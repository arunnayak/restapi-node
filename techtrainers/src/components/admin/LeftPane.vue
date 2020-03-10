<template>
  <div id="admin-nav" class="left-pane">
    <ul class="left-pane__links">
      <li class="left-pane__link"><router-link to="/admin">Admin Home</router-link></li>
      <li class="left-pane__link"><router-link to="/admin/members">Members</router-link></li>
      <li class="left-pane__link"><router-link to="/admin/courses">Courses</router-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "LeftPane"
};
</script>
<style scoped lang="scss">
.left-pane {
  float: left;
  width: 20%;
  background: var(--grey);
  padding: var(--padding);
  height: 100vh;
  overflow: auto;

  &__links {
  }
  &__link {
    display: block;
    text-align: left;
    line-height: 2rem;
    border-bottom: solid 1px #eee;
  }
}
</style>