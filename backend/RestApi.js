const sqlite3 = require("better-sqlite3");
const Encrypt = require("./Encrypt");

module.exports = class RestApi {
  constructor(expressApp, urlPrefix = "/api/", pathToDb = "./database.db") {
    this.app = expressApp;
    this.db = sqlite3(pathToDb);
    this.prefix = urlPrefix;

    let tables = this.getAllTables();
    console.log(tables);
    for (let table of tables) {
      this.createGetAllRoute(table);
      this.createGetRoute(table);
      this.createGetSpecificRoute(table);
      this.createPostRoute(table);
      this.createPutRoute(table);
      this.createDeleteRoute(table);
    }
    this.addLoginRoutes();
  }

  getAllTables() {
    let statement = this.db.prepare(`
    SELECT name
    FROM sqlite_master
    WHERE type = $type
  `);
    return statement.all({ type: "table" }).map((x) => x.name);
  }

  createGetAllRoute(table) {
    this.app.get(this.prefix + table, (req, res) => {
      let statement;

      if (table === "comments" || table === "threads") {
        statement = this.db.prepare(`
          SELECT * FROM ${table}
          INNER JOIN users ON
          ${table}.userId = users.id
          `);
      } else {
        statement = this.db.prepare(`
        SELECT * FROM ${table}
        `);
      }

      try {
        res.json(statement.all().map((x) => ({ ...x, password: undefined })));
      } catch (e) {
        res.json({ error: e + "" });
      }
    });
  }

  createGetSpecificRoute(table) {
    this.app.get(this.prefix + table + "/specific" + "/:data", (req, res) => {
      let statement;

      if (table === "threads") {
        statement = this.db.prepare(`
      SELECT * FROM ${table}
      INNER JOIN users ON
      ${table}.userId = users.id
      WHERE subforum = $data
    `);
      } else {
        statement = this.db.prepare(`
      SELECT * FROM ${table}
      INNER JOIN users ON
      ${table}.userId = users.id
      WHERE threadId = $data
    `);
      }
      let result =
        statement.all(req.params).map((x) => ({ ...x, password: undefined })) ||
        [];
      res.json(result);
    });
  }

  createGetRoute(table) {
    if (table === "comments" || table === "threads") {
      this.app.get(this.prefix + table + "/:id", (req, res) => {
        let statement = this.db.prepare(`
      SELECT * FROM ${table}
      INNER JOIN users ON
      ${table}.userId = users.id
      WHERE ${table}.${table}Id = $id
    `);
        let result;
        try {
          result = statement.get(req.params) || null;
        } catch (e) {
          result = { error: e + "" };
        }
        if (result) {
          delete result.password;
        }
        res.json(result);
      });
    } else {
      this.app.get(this.prefix + table + "/:id", (req, res) => {
        let statement = this.db.prepare(`
      SELECT * FROM ${table}
      WHERE id = $id
    `);
        let result;
        try {
          result = statement.get(req.params) || null;
        } catch (e) {
          result = { error: e + "" };
        }
        if (result) {
          delete result.password;
        }
        res.json(result);
      });
    }
  }

  createPostRoute(table) {
    this.app.post(this.prefix + table, (req, res) => {
      let b = req.body;
      if (b.password) {
        b.password = Encrypt.multiEncrypt(b.password);
      }
      let statement = this.db.prepare(`
      INSERT INTO ${table} (${Object.keys(b)})
      VALUES (${Object.keys(b).map((x) => "$" + x)})
    `);
      try {
        res.json(statement.run(b));
      } catch (e) {
        res.json({ error: e + "" });
      }
    });
  }

  createPutRoute(table) {
    this.app.put(this.prefix + table + "/:id", (req, res) => {
      let b = req.body;
      if (b.password) {
        b.password = Encrypt.multiEncrypt(b.password);
      }
      let statement;

      if (table === "threads") {
        b.threadsId = req.params.id;
        statement = this.db.prepare(`
        UPDATE ${table} 
        SET ${Object.keys(b).map((x) => x + " = $" + x)}
        WHERE ${table}Id = $threadsId
        `);
      } else {
        b.id = req.params.id;
        statement = this.db.prepare(`
          UPDATE ${table} 
          SET ${Object.keys(b).map((x) => x + " = $" + x)}
          WHERE id = $id
        `);
      }
      try {
        res.json(statement.run(b));
      } catch (e) {
        res.json({ error: e + "" });
      }
    });
  }

  createDeleteRoute(table) {
    this.app.delete(this.prefix + table + "/:id", (req, res) => {
      let statement = this.db.prepare(`
        DELETE FROM ${table} WHERE id = $id
      `);
      try {
        res.json(statement.run(req.params));
      } catch (e) {
        res.json({ error: e + "" });
      }
    });
  }

  // Routes for login, check if logged in, logout
  // Note: These are not "pure" REST-routes
  addLoginRoutes() {
    // POST = Login
    this.app.post(this.prefix + "login", (req, res) => {
      if (req.body.email.password) {
        req.body.email.password = Encrypt.multiEncrypt(req.body.email.password);
      }
      let statement = this.db.prepare(`
         SELECT * FROM users
         WHERE email = $email AND password = $password
      `);
      let user = statement.get(req.body.email) || null;
      if (user) {
        delete user.password;
        // store the logged in user in a session
        req.session.user = user;
      }
      res.json(user);
    });

    // GET - check if logged in and return user if so
    this.app.get(this.prefix + "login", (req, res) => {
      res.json(req.session.user || null);
    });

    // DELETE - log out a logged in user
    this.app.delete(this.prefix + "login", (req, res) => {
      delete req.session.user;
      res.json({ loggedOut: true });
    });
  }
};
