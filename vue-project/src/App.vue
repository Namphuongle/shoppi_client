<template>
  <div id="app">
    
    
    <router-view></router-view>
  </div>
</template>

<script >
// import
import Home from './views/home.vue';
import Login from './views/login.vue';
import Admin from './views/admin.vue';

export default {
  components:{
    Home,
    Login,
    Admin,
  }
}
</script>

<style >
body {
  background-color: #F4F4F6;
}
</style>