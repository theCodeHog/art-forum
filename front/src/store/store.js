import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { name: null, email: null, userRole: null },
    forumTopics: ["Traditional Art", "Digital Art", "Photography"],
    isCreatingNewThread: false,
    isCreatingNewComment: false,
    currentThread: {},
  },
  mutations: {
    setUser(state, value) {
      state.user = value;
    },
    setCurrentThread(state, value) {
      state.currentThread = value;
    },
    setIsCreatingNewThread(state, value) {
      state.isCreatingNewThread = value;
    },
    setIsCreatingNewComment(state, value) {
      state.isCreatingNewComment = value;
    },
  },
  actions: {
    async login({ commit }, email, password) {
      let res = await fetch(`/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password }),
      });
      res = await res.json();
      commit("setUser", res);
    },
    async logout({ commit }) {
      commit("setUser", { name: null, email: null, userRole: null });
    },
  },
  modules: {},
});
