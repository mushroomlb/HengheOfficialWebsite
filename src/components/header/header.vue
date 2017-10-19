<template>
  <div class="header">
    <img class="logo" src="./logo.png" alt="logo">
    <div class="tab">
      <router-link to="mainPage">
        首页
      </router-link>
      <router-link to="aboutUs">
        关于我们
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {};
</script>

<style lang="less">
  @import "./header.less";
</style>
