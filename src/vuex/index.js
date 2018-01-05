import Vue from 'vue'
import Vuex from 'vuex'
import appService from '../app-service.js'
import postsModule from './post'

Vue.use(Vuex)

const state = {
  isAuthenticated: false
}

const store = new Vuex.Store({
  modules: {
    postsModule
  },
  state,
  getters: {
    isAuthenticated: (state) => {
      return state.isAuthenticated
    }
  },
  actions: {
    logout (context) {
      context.commit('logout') // .commit will immediately trigger a mutation
    },
    login (context, credentials) {
      return new Promise(resolve => {
        // appService.login({username: this.username, password: this.password})
        appService.login(credentials) // Changed to use Vuex
          .then((data) => {
            window.localStorage.setItem('token', data.token)
            window.localStorage.setItem('tokenExpiration', data.expiration)
            // this.isAuthenticated = true
            // this.username = ''
            // this.password = ''

            resolve()
          })
          .catch(() => window.alert('Could not login'))
      })
    }
  },
  mutations: {
    logout (state) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('token', null)
        window.localStorage.setItem('tokenExpiration', null)
      }

      state.isAuthenticated = false
    },
    login (state, token) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('token', token.token)
        window.localStorage.setItem('tokenExpiration', token.expiration)
      }

      state.isAuthenticated = true
    }
  }
})

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function (event) {
    let expiration = window.localStorage.getItem('tokenExpiration')
    var unixTimestamp = new Date().getTime() / 1000

    if (expiration !== null && parseInt(expiration) - unixTimestamp > 0) {
      store.state.isAuthenticated = true
    }
  })
}

export default store
