<template>
  <div>
    <app-header></app-header>
    <section class="main-section section">
       <div class="container content">
         <!-- <category></category> -->
         <router-view></router-view>
      </div>
    </section>
  </div>
</template>
<script>
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
// import Category from './Category.vue'
export default {
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter
    // category: Category
  }
}
</script>
<style lang="scss">
  $primary: #287ab1;
  @import "~bulma";
</style>
