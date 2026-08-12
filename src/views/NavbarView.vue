<template>
  <div class="navbar-wrapper h100">
  <div class="navbar" v-bind:class="{ collapsed }">
    <div class="flex h100">
      <div class="civilizations w100">
        <input type="text" v-model="civFilter" v-on:input="civFilter = ($event.target as HTMLInputElement).value" ref="search" placeholder="Type anywhere to filter">

        <div v-if="receivedData">
          <div v-for="civ in filteredCivilizations" v-bind:key="civ.id">
            <router-link :to="/civilization/ + civ.name.toLowerCase()" class="nav-link" active-class="active" :title="civ.name">
              <div class="flex align-items-center">
              <picture><source :srcset="'/img/' + civ.name + '.webp'" type="image/webp"><img width="62" height="62" :src="'/img/' + civ.name + '.png'" class="responsive nav-img"></picture>
                <span>{{ civ.name }}</span>
              </div>
            </router-link>
          </div>
        </div>

        <div v-else>
          <div v-for="index in civilizations.length" :key="index">
            <div class="preview-wrapper flex align-items-center">
              <div class="nav-img-preview">
                <div class="preview-circle "></div>
              </div>
              <span class="civ-name-preview preview">
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

    <div class="navbar-switcher" @click="collapsed = !collapsed">
      <span class="switcher-inner" v-if="!collapsed">&laquo;</span>
      <span class="switcher-inner" v-else>&raquo;</span>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed, onUnmounted, ref, useTemplateRef } from 'vue'
import type ICivilization from '@/ICivilization'
import { useCivilizationStore } from '@/store/civilizations'

const civFilter = ref('')
const collapsed = ref(false)
const search = useTemplateRef<HTMLInputElement>('search')

const civilizations = computed<ICivilization[]>(
  () => useCivilizationStore().civilizations,
)
const filteredCivilizations = computed<ICivilization[]>(() =>
  civilizations.value.filter(
    (civ) =>
      civ.name.toLowerCase().includes(civFilter.value.toLowerCase()) ||
      civ.leader.toLowerCase().includes(civFilter.value.toLowerCase()),
  ),
)
const receivedData = computed<boolean>(
  () => useCivilizationStore().receivedData,
)

function keydownEvent(e: KeyboardEvent) {
  // Don't capture special keys or spacebar, but capture backspace
  if ((e.key.length > 1 || e.key === ' ') && e.key !== 'Backspace') return
  search.value?.focus()
}

window.addEventListener('keydown', keydownEvent)
onUnmounted(() => window.removeEventListener('keydown', keydownEvent))
</script>

<style scoped>
  picture {
    display: contents;
  }

  input, input:focus, input:active {
    width: 100%;
    outline: 0;
    padding: .5rem;
    font-family: 'Didact Gothic', sans-serif;
    font-size: .9rem;
    border: 0;
    box-shadow: 0 0;
  }

  .responsive {
    max-width: 100%;
  }

  .nav-img {
    width: 62px;
    margin-right: 0.2rem;
    transition: all .2s ease;
  }

  .nav-link {
    display: block;
    transition: all .2s ease;
    text-decoration: none;
  }

  .nav-link:hover, .nav-link:active, .nav-link:focus {
    background-color: #053630;
    outline: 0;
    filter: brightness(1.25);
  }

  .nav-link:hover .nav-img {
    filter: brightness(1.25);
    text-decoration: none;
  }

  .nav-link:hover span {
    filter: brightness(1.25);
    color: #fff;
    text-decoration: none;
  }

  .civ-name-preview {
    width: 80px;
  }

  .active {
    background-color: #053630;
  }

  .navbar {
    width: 204px;
    overflow-x: hidden;
    display: inline-block;
    height: 100%;
    overflow-y: scroll;
    background-color: #031312;
    position: relative;
    transition: width .4s ease;
  }

  .collapsed {
    width: 82px;
  }

  .navbar-wrapper {
    position: relative;
  }

  .navbar-switcher {
    position: absolute;
    bottom: 5px;
    left: 100%;
    width: 2.2rem;
    height: 2.5rem;
    background: rgb(1,43,37);
    color: #ffffc8;
    background: linear-gradient(270deg, rgba(1,43,37,1) 7%, rgba(1,31,27,1) 45%, rgba(1,43,37,1) 95%);
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    border: 2px solid #897a58;
    border-left: 0;
    font-size: 1.8rem;
    text-align: center;
    cursor: pointer;
    transition: all .2s ease;
    z-index: 1;
  }

  .navbar-switcher:hover {
    filter: brightness(1.2);
    text-shadow: #dcd1bc 0 0 7px;
  }

  .switcher-inner {
    display: inline-block;
    padding-right: .3rem;
  }
</style>
