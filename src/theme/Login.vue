<template>
<div class="content">
  <div v-if="isAuthenticated">
    Hello authenticated user!
     <!-- <p>Name: {{profile.firstName}}</p>
     <p>Favorite Sandwich: {{profile.favoriteSandwich}}</p> -->
     <button v-on:click="logout()" class="button is-primary">
      Logout
    </button>
  </div>
	<h2>Login</h2>
	<div class="field is-horizontal">
		<div class="field-label is-normal">
		  <label class="label">Username</label>
		</div>
		<div class="field-body">
		  <div class="field">
			<div class="control">
			  <input v-model="username" class="input" type="text"
			  placeholder="Your username">
			</div>
		  </div>
		</div>
	</div>
	<div class="field is-horizontal">
		<div class="field-label is-normal">
		  <label class="label">Password</label>
		</div>
		<div class="field-body">
		  <div class="field">
			<div class="control">
			  <input v-model="password" class="input" type="password"
			  placeholder="Your password">
			</div>
		  </div>
		</div>
	</div>
	<div class="field is-horizontal">
		<div class="field-label">
		  <!-- Left empty for spacing -->
		</div>
		<div class="field-body">
		  <div class="field">
			<div class="control">
			  <button v-on:click="login()" class="button is-primary">
				Login
			  </button>
			</div>
		  </div>
		</div>
	</div>
</div>
</template>
<script>
  // import appService from '../app-service.js'
  // import eventBus from '../event-bus.js'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data () {
      return {
        username: '',
        password: ''
        // isAuthenticated: false,
        // profile: {}
      }
    },
    computed: {
      ...mapGetters(['isAuthenticated'])
    },
    watch: {
      // Removing and using the mapGetters instead
      // isAuthenticated: function (val) {
      //   if (val) {
      //     appService.getProfile()
      //       .then(profile => {
      //         this.profile = profile
      //       })
      //   } else {
      //     this.profile = null
      //   }

      //   eventBus.$emit('authStatusUpdate', val)
      // }
    },
    methods: {
      ...mapActions({
        logout: 'logout'
      }),
      login () {
        this.$store.dispatch('login', {username: this.username, password: this.password})
          .then(() => {
            // context.commit('login', data)
            this.username = ''
            this.password = ''
            // resolve()
          })
        // Removed this into the Vuex
        // appService.login({username: this.username, password: this.password})
        //   .then((data) => {
        //     window.localStorage.setItem('token', data.token)
        //     window.localStorage.setItem('tokenExpiration', data.expiration)
        //     // this.isAuthenticated = true
        //     this.username = ''
        //     this.password = ''
        //   })
        //   .catch(() => window.alert('Could not login'))
      },
      logout () {
        window.localStorage.setItem('token', null)
        window.localStorage.setItem('tokenExpiration', null)
        // this.isAuthenticated = false
      } // Removing created below and create DOM module in the Vuex module index.js
      // },
      // created () {
      //   let expiration = window.localStorage.getItem('tokenExpiration')
      //   var unixTimestamp = new Date().getTime() / 1000
      //   if (expiration !== null && parseInt(expiration) - unixTimestamp > 0) {
      //     // this.isAuthenticated = true
      //   }
      // }
    }
  }
</script>
