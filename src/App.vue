<template>
  <div class="content">
    <my-head></my-head>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import head from './components/header/header.vue';
export default {
  components: {
    'my-head': head
  }
};
</script>

<style>
.content {

}
</style>
