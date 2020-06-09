<template>
  <div class="container">
    <div class="civilization">
      <div v-if="receivedData">
        <h1><img :src="civ.image" class="civ-image">{{ civ.name }} | {{ civ.leader }}</h1>
        <hr class="divider">
        <p>Starting bias: <span v-html="civ.startingBias"></span></p>
        <hr class="divider">
        <div class="flex block-sm">
        <p class="flex-label">Unique Ability:</p>
          <p v-html="civ.uniqueAbility"/>
        </div>
        <hr class="divider">
        <div class="flex block-sm">
        <p class="flex-label">Unique Building<br class="none-sm"> / Improvement:</p>
          <p v-html="civ.uniqueBuildingOrImprovement"/>
        </div>
        <hr class="divider">
        <div class="flex block-sm">
        <p class="flex-label">Unique Unit:</p>
          <p v-html="civ.uniqueUnit"/>
        </div>
        <hr class="divider">
        <p>Vox Populi Civilization viewer made with ♥ and Vue by <a href="https://fmgrafikdesign.de/" target="_blank">Fabian Mohr</a>. All content taken from <a href="https://civ-5-cbp.fandom.com/wiki/Civilizations" target="_blank">the vox
          populi wiki</a> under the <a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" target="_blank">CC
          BY-SA 3.0 license</a>.</p>
      </div>
      <div v-else>
        <div class="nav-img-preview">
          <div class="preview-circle "></div>
        </div>
        <div class="preview preview-title"></div>
        <hr class="divider">
        <div class="preview preview-notice"></div>
        <hr class="divider">
        <div class="flex block-sm">
          <div class="preview preview-label"></div>
          <div class="preview-wrapper">
            <div class="preview preview-text-line"></div>
            <div class="preview preview-text-line"></div>
            <div class="preview preview-text-line"></div>
          </div>
        </div>
        <hr class="divider">
        <div class="flex block-sm">
          <div class="preview preview-label"></div>
          <div class="preview-wrapper">
            <div class="preview preview-text-line"></div>
            <div class="preview preview-text-line"></div>
            <div class="preview preview-text-line"></div>
          </div>
        </div>
        <hr class="divider">
        <div class="flex block-sm">
          <div class="preview preview-label"></div>
          <div class="preview-wrapper">
            <div class="preview preview-text-line"></div>
            <div class="preview preview-text-line"></div>
            <div class="preview preview-text-line"></div>
          </div>
        </div>
        <hr class="divider block-sm">
        <div class="preview preview-notice"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ICivilization from '../ICivilization'
import Vue from 'vue'

export default Vue.extend({
  name: 'Civilization',
  computed: {
    civ (): ICivilization {
      return this.$store.getters.getCivilizationByName(this.$route.params.name)
    },
    receivedData (): boolean {
      return this.$store.state.receivedData
    }
  }
})
</script>

<style scoped>
  .civilization {
    margin-top: 3rem;
  }
  .civilization >>> img {
    transform: translateY(4px);
  }

  .civilization .civ-image {
    width: 54px;
    height: auto;
    display: block;
    margin-bottom: .5rem;
    margin-left: -6px;
  }

  .preview-title {
    margin-top: 1rem;
  }

  @media screen and (min-width: 768px) {
    .civilization .civ-image {
      width: 54px;
      height: auto;
      transform: translateY(14px);
      display: inline-block;
      margin-right: .4rem;
      margin-bottom: 0;
    }

    .preview-circle {
      display: inline-block;
      width: 100%;
    }

    .nav-img-preview {
      display: inline-block;
    }

    .preview-title {
      display: inline-block;
      margin-top: 0;
    }
  }
</style>
