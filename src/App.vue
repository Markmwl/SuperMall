<template>
  <div id="app">
	  <router-view />
	 <MainTabBar/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MainTabBar from 'components/content/maintabbar/MainTabBar.vue';

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
 /* 因为已经将assets加入到vue.config.js中起配置别名，所以不用在路径前边加./assets */
 @import url("assets/css/base.css");
</style>
