<template>
  <div class="container">
    <div class="civilization">
      <div v-if="receivedData && civ">
        <h1><picture><source :srcset="'/img/' + civ.name + '.webp'" type="image/webp"><img width="54" height="54" :src="'/img/' + civ.name + '.png'" class="civ-image"></picture>{{ civ.name }} | {{ civ.leader }}</h1>
        <hr class="divider">
        <p>Starting bias: <TokenizedText :text="civ.startingBias"/></p>
        <hr class="divider">
        <div class="flex block-sm">
        <p class="flex-label">Unique Ability:</p>
          <p><TokenizedText :text="civ.uniqueAbility"/></p>
        </div>
        <hr class="divider">
        <div class="flex block-sm">
        <p class="flex-label">Unique Building<br class="none-sm"> / Improvement:</p>
          <p><TokenizedText :text="civ.uniqueBuildingOrImprovement"/></p>
        </div>
        <hr class="divider">
        <div class="flex block-sm">
        <p class="flex-label">Unique Unit:</p>
          <p><TokenizedText :text="civ.uniqueUnit"/></p>
        </div>
        <hr class="divider">
        <p>Vox Populi Civilization viewer made with ♥ and <img src="https://vignette.wikia.nocookie.net/civ-5-cbp/images/1/1c/20xScience5.png/revision/latest"> by <a href="https://fmgrafikdesign.de/" target="_blank">Fabian Mohr</a>. All content taken from <a href="https://civ-5-cbp.fandom.com/wiki/Civilizations" target="_blank">the vox
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
import { defineComponent } from 'vue'
import TokenizedText from '@/components/TokenizedText.vue'
import { useCivilizationStore } from '@/store/civilizations'
import type ICivilization from '../ICivilization'

export default defineComponent({
  name: 'CivilizationView',
  components: {
    TokenizedText,
  },
  computed: {
    civ(): ICivilization | undefined {
      return useCivilizationStore().getCivilizationByName(
        this.$route.params.name as string,
      )
    },
    receivedData(): boolean {
      return useCivilizationStore().receivedData
    },
  },
})
</script>

<style scoped>
  .civilization picture {
    display: contents;
  }
  .civilization {
    margin-top: 3rem;
  }
  .civilization :deep(img) {
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
