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
import { defineComponent } from 'vue'
import { useCivilizationStore } from '@/store/civilizations'
import Navbar from '@/views/Navbar.vue'

export default defineComponent({
  components: { Navbar },
  created() {
    useCivilizationStore().getCivilizationData()
  },
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
