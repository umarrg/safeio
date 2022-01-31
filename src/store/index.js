import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import router from '../router/index'
import helpers from '../Services/helpers'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    token: localStorage.getItem('token') || null,
    user: JSON.parse(localStorage.getItem('user')) || null,
    signIn: {
      signInLoading: false,
      signInDisabled: false,
      signInErrorSnackbar: false,
      signInErrorPayload: null,

    },
    signUp: {
      signUpLoading: false,
      signUpDisabled: false,
      signUpErrorSnackbar: false,
      signUpErrorPayload: null,
    },
    profile: [],

  },
  getters: {
    currentUser: (state) => state.token,
    getUser: (state) => state.user,
    getProfile: (state) => state.profile,

  },
  mutations: {
    SET_PROFILE(state, profile) {
      state.profile = profile
    },
    SET_USER(state, user) {
      state.user = user;
    },

    loginUser(state, userData) {
      state.token = userData.token
      state.user = userData.user
    },
    registerUser(state, userData) {
      state.signUp.signUpLoading = true
      state.signUp.signUpDisabled = true
      state.user = userData.user
    },
    signOut(state) {
      state.user = null
      state.token = null
      localStorage.clear()
    },
    startSignUpLoader(state) {
      state.signUp.signUpLoading = true
      state.signUp.signUpDisabled = true
    },
    stopSignUpLoader(state) {
      state.signUp.signUpLoading = false
      state.signUp.signUpDisabled = false
    },
    startLoader(state) {
      state.signIn.signInLoading = true
      state.signIn.signInDisabled = true
    },
    stopLoader(state) {
      state.signIn.signInLoading = false
      state.signIn.signInDisabled = false
    },

    signInError(state, error) {
      state.signIn.signInErrorSnackbar = true;
      state.signIn.signInErrorPayload = error;
    },
    signUpError(state, error) {
      state.signUp.signUpErrorSnackbar = true;
      state.signUp.signUpErrorPayload = error;
    },
  },
  actions: {

    FETCH_PROFILE({ commit }) {
      axios.get(helpers.BaseUrl + "/patient/profile").then((res) => {
        console.log(res)
        commit("SET_PROFILE", res.data)
      }).catch((err) => console.log(err))

    },

    SIGN_IN({ commit }, authData) {
      let data = {
        login: authData.email,
        password: authData.password
      };
      commit('startLoader')
      axios.post(helpers.BaseUrl + "/patient/auth/signin", data).then((response) => {
        console.log(response);
        if (response.status === 200) {
          const { token, user, } = response.data
          commit('loginUser', {
            token: token,
            user: user,
          })
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('user', JSON.stringify(response.data.data))
          router.push("/home")
          commit('stopLoader')
        } else {
          commit('stopLoader')
          commit('signInError', response.error)

        }
      }).catch((error) => {

        console.log('Error>>>', error)
        commit('signInError', error.message)
        commit('stopLoader')
      })

    },
    SIGN_UP({ commit }, authData) {
      let data = {
        email: authData.email,
        password: authData.password
      };
      commit('startSignUpLoader')
      axios.post(helpers.BaseUrl + "/patient/auth/signup", data).then((response) => {
        console.log(response);
        if (response.status === 200) {
          router.push("/activateaccount")
          commit('stopSignUpLoader')
        } else {
          commit('stopSignUpLoader')
          commit('signUpError', response.error)

        }
      }).catch((error) => {
        console.log('Error>>>', error)
        commit('signUpError', error.message)
        commit('stopSignUpLoader')
      })


    },
    logout({ commit }) {
      router.push('/')
      commit('signOut')
    },
  },
  modules: {
  }
})

