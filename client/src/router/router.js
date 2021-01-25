import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import Login from "@/components/Login";
import SubForum from "@/components/SubForum";
import ThreadPage from "@/components/ThreadPage";
import AdminPage from "@/components/AdminPage";
import Register from "@/components/Register";
import PageNotFound from "@/components/PageNotFound";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/admin",
    name: "AdminPage",
    component: AdminPage,
  },
  {
    path: "/forum/:subforum",
    name: "SubForum",
    component: SubForum,
  },
  {
    path: "/forum/:subforum/:id",
    name: "ThreadPage",
    component: ThreadPage,
  },
  {
    path: "*",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
