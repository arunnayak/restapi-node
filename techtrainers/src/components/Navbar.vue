<template>
  <div>
    <div id="site-nav" v-if="!showNavigation">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/admin">Admin</router-link>
    </div>
    <LeftPane v-if="showNavigation" />
  </div>
</template>
<script>
import LeftPane from "./admin/LeftPane";

export default {
  name: "Navbar",
  components: {
    LeftPane
  },
  data() {
    return {
      showNavigation: false
    };
  },
  watch: {
    $route() {
      const path = this.$route.path;
      path.indexOf('admin') > -1
        ? (this.showNavigation = true)
        : (this.showNavigation = false);
    }
  }
};
</script>
