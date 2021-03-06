const express = require("express");
const session = require("express-session");
const store = require("better-express-store");

const app = express();
const RestApi = require("./RestApi");
const ACL = require("./ACL");
const ACLsettings = require("./ACLsettings");

// Make Express able to read the req.body
app.use(express.json());

// Prevent badly formatted JSON in request.body from causing errors
// (Note: express middleware can take an extra parameter error)
app.use((error, req, res, next) => {
  console.log("ERROR", error);
  if (error) {
    res.status(500);
    res.json({
      error: "Something went wrong - probably badly formatted JSON",
      errorDetails: error,
    });
  }
});

// Add express-session as middleware to our express app
// so that we can handle sessions
app.use(
  session({
    secret: require("./session-secret.json"),
    resave: false,
    saveUninitialized: true,
    cookie: { secure: "auto" },
    store: store({ dbPath: "./database.db" }),
  })
);

// Middleware for handling ACL (Access Control)
app.use(ACL(ACLsettings));

// REST api
new RestApi(app);

// Handle SPA
app.use(express.static(__dirname + '/dist'));
app.get('*', (req, res) => res.sendFile(__dirname + '/dist/index.html'));

// Start the web server
app.listen(4002, () => {
  console.log("Listening on port 4002");
});
