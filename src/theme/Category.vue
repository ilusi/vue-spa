<<template>
  <div class="columns">
      <div class="column is-one-third" v-for="(post, title) in posts" v-bind:key="post.id">
         <app-post :link="post.rest_api_enabler.Link">
           <h3 slot="title" v-html="post.title.rendered"></h3>
           <span slot="content" v-html="post.excerpt.rendered">npm </span>
           <!-- <h3 slot="title">{{ post.title }}</h3>
           <span slot="content">{{ post.content }}</span> -->
         </app-post>
      </div>
   </div>
</template>
<script>
    import Post from './Post.vue'
    // Use Axios to get data and comment out the hard-coded date below
    // import appService from '../app-service.js'
    import { mapGetters } from 'vuex'

    export default {
      components: {
        'app-post': Post
      },
      // Removing the entire data and use module instead
      // data () {
      //   return {
      //     id: this.$route.params.id,
      //     postsFrontEnd: [
      //       // { id: 1, title: 'PWA Stats', content: 'A community-driven list of stats and news related to Progressive Web Apps', link: 'https://www.pwastats.com/' },
      //       // { id: 2, title: 'A Comprehensive Guide To HTTP/2 Server Push', content: 'No longer is HTTP/2 a feature we pine for. It has arrived, and with it comes server push!', link: 'https://www.smashingmagazine.com/2017/04/guide-http2-server-push/' },
      //       // { id: 3, title: 'So what’s this GraphQL thing I keep hearing about?', content: 'Why now is the perfect time to learn what exactly this GraphQL thing you keep hearing about really is.', link: 'https://medium.freecodecamp.com/so-whats-this-graphql-thing-i-keep-hearing-about-baf4d36c20cf' }
      //     ],
      //     postsMobile: [
      //       // { id: 4, title: 'State of The Mobile Gap Between Native and Web', content: 'Clearly PhoneGap, and Cordova are still required today in the mobile world, but when is it really needed? Did the web ever catch up?', link: 'https://remysharp.com/2016/05/28/state-of-the-gap' },
      //       // { id: 5, title: 'Learning JavaScript Design Patterns', content: 'Design patterns are reusable solutions to commonly occurring problems in software design.', link: 'https://addyosmani.com/resources/essentialjsdesignpatterns/book/' },
      //       // { id: 6, title: 'The Power of Custom Directives in Vue', content: 'The beautiful thing about Vue is that it\'s incredibly feature-rich.', link: 'https://css-tricks.com/power-custom-directives-vue/' }
      //     ],
      //     posts: []
      //   }
      // },
      computed: {
        ...mapGetters('postsModule', ['posts'])
      },
      methods: {
        loadPosts () {
          let categoryId = 2

          if (this.$route.params.id === 'mobile') {
          // if (this.id === 'mobile') {
            categoryId = 11
          }

          // Comment below after using Axios
          // if (this.id === 'front-end') {
          //   this.posts = this.postsFrontEnd
          // } else {
          //   this.posts = this.postsMobile
          // }

          // Using module
          // appService.getPosts(categoryId).then(data => {
          //   this.posts = data
          // })

          this.$store.dispatch('postsModule/updateCategory', categoryId)
        }
      },
      // Updating the id retrieved from the url
      watch: {
        '$route' (to, from) {
          // this.id = to.params.id // Using module
          this.loadPosts()
        }
      },
      // Run this method everytime component is created
      created () {
        this.loadPosts()
        // console.log(this.$route.query.page)
      }
    }
</script>
