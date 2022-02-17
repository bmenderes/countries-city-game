import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cities: null,
  },

  mutations: {
    setCities(state, payload) {
      state.cities = payload;
    }

  },

  actions: {
    fetchCites({ commit }) {
      return fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => {
          commit("setCities", data);
        })
        .catch((err) => console.error(err));

    }
  },

  modules: {
  },

  plugins: [createPersistedState()],


})
