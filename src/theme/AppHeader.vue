<<template>
   <nav class="nav has-shadow">
      <div class="container">
         <a href="/">
           <img src="http://bit.ly/vue-img" alt="VUE SPA" />
         </a>
         <!-- With router-link, only the component reloads instead of the whole page -->
         <router-link to="/category/front-end" exact>
           Front-end
         </router-link>
         <router-link to="/category/mobile">
           Mobile
         </router-link>
         <router-link :to="{ name: 'category', params: { id: 'mobile' } }">
           Mobile (category)
         </router-link>
         <router-link class="nav-item is-tab" to="/login">
           <span v-if="isAuthenticated">Logout</span><span v-else>Login</span>
         </router-link>
      </div>
   </nav>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['isAuthenticated'])
      // Replacing the below lines with mapGetters
      // isAuthenticated () {
      //   return this.$store.state.isAuthenticated
      // }
    }
    // Replacing below methods with Vuex
    // import eventBus from '../event-bus.js'
    //
    // data () {
    //   return {
    //     isAuthenticated: false
    //   }
    // },
    // created () {
    //   eventBus.$on('authStatusUpdate', isAuthenticated => {
    //     this.isAuthenticated = isAuthenticated
    //   })
    // }
  }
</script>

