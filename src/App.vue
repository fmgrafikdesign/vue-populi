<template>
  <div id="app">
    <div id="nav">
      <navbar/>
    </div>
    <div class="router-view w100">
    <router-view/>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Navbar from '@/views/Navbar.vue'

export default Vue.extend({
  components: { Navbar },
  created () {
    this.$store.dispatch('getCivilizationData')
  }
})
</script>
<style>
#app {
  font-family: 'Didact Gothic', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  height: 100%;
}

  .router-view {
    height: 100%;
    overflow-y: auto;
  }
</style>
