import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

const axios = require("axios");

const baseUrl = "https://micromoni.herokuapp.com/";

const vuexPersist = new VuexPersist({
  key: "Micromoni",
  storage: window.sessionStorage
});

Vue.use(Vuex);
Vue.use(require("vue-moment"));

export default new Vuex.Store({
  state: {
    user: {},
    investments: [],
    invites: []
  },
  getters: {
    user: state => state.user,
    token: state => state.user.token,
    investments: state => state.investments,
    invites: state => state.invites
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setInvestment(state, investments) {
      state.investments = investments;
    },
    editUser(state, newUser) {
      state.user.full_name = newUser.full_name;
      state.user.phone_number = newUser.phone_number;
      state.user.date_of_birth = newUser.date_of_birth;
      state.user.bank_name = newUser.bank_name;
      state.user.account_name = newUser.account_name;
      state.user.account_number = newUser.account_number;
    },
    setInvites(state, invites) {
      state.invites = invites;
    }
  },
  actions: {
    registerUser(undefined, userData) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${baseUrl}register`, userData)
          .then(res => {
            const { error, message } = res.data;
            let data;
            if (error !== 0) {
              data = {
                success: false,
                message: message
              };
              resolve(data);
            }
            data = {
              success: true,
              message: message
            };
            resolve(data);
          })
          .catch(err => reject(err));
      });
    },
    loginUser({ commit }, userData) {
      return new Promise((resolve, reject) => {
        // Do something here... lets say, a http call using vue-resource
        axios
          .post(`${baseUrl}login`, userData)
          .then(res => {
            const { error, message, data: userRes = null } = res.data;
            let data;
            if (error !== 0) {
              data = {
                success: false,
                message: message
              };
            } else {
              // mutations
              commit("setUser", userRes);
              data = {
                success: true
              };
            }
            resolve(data);
          })
          .catch(err => reject(err));
      });
    },
    fetchInvestments({ commit, getters }) {
      return new Promise((resolve, reject) => {
        // Do something here... lets say, a http call using vue-resource
        let headers = {
          "x-access-token": getters.token
        };
        axios
          .get(`${baseUrl}/fetch_user_investment`, { headers: headers })
          .then(res => {
            const { error, message, data: userRes = [] } = res.data;
            let data;
            if (error !== 0) {
              data = {
                success: false,
                message: message
              };
            } else {
              // mutations
              commit("setInvestment", userRes);
              data = {
                success: true
              };
            }
            resolve(data);
          })
          .catch(err => reject(err));
      });
    },
    fetchInvites({ commit, getters }) {
      return new Promise((resolve, reject) => {
        // Do something here... lets say, a http call using vue-resource
        let headers = {
          "x-access-token": getters.token
        };
        axios
          .get(`${baseUrl}/fetch_invites`, { headers: headers })
          .then(res => {
            const { error, message, data: userRes = [] } = res.data;
            let data;
            if (error !== 0) {
              data = {
                success: false,
                message: message
              };
            } else {
              // mutations
              commit("setInvites", userRes);
              data = {
                success: true
              };
            }
            resolve(data);
          })
          .catch(err => reject(err));
      });
    }
  },
  plugins: [vuexPersist.plugin]
});
