<template>
  <div id="app">
    <div id="nav">
      <NavbarView/>
    </div>
    <div class="router-view w100">
    <router-view/>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCivilizationStore } from '@/store/civilizations'
import NavbarView from '@/views/NavbarView.vue'

useCivilizationStore().getCivilizationData()
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
