<template>
  <span>
    <template v-for="segment in segments" :key="segment.key">
      <img
        v-if="segment.type === 'icon'"
        :src="segment.src"
        :alt="segment.name"
        width="20"
        height="20"
        loading="lazy"
        class="token-icon"
      >
      <template v-else>{{ segment.value }}</template>
    </template>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getTokenIconSrc } from '@/tokenIcons'

const TOKEN_PATTERN = /\{([^{}]+)\}/g

type Segment =
  | { type: 'text'; value: string; key: string }
  | { type: 'icon'; name: string; src: string; key: string }

// Splits text such as "+1 {Culture} Culture" into text/icon segments so the
// `{Token}` placeholders the backend sends can be rendered as <img> tags
// instead of being interpolated as raw HTML.
function tokenize(text: string): Segment[] {
  const segments: Segment[] = []
  let lastIndex = 0

  TOKEN_PATTERN.lastIndex = 0
  let match = TOKEN_PATTERN.exec(text)
  while (match !== null) {
    if (match.index > lastIndex) {
      segments.push({
        type: 'text',
        value: text.slice(lastIndex, match.index),
        key: `t${lastIndex}`,
      })
    }

    const name = match[1]
    const src = getTokenIconSrc(name)
    if (src) {
      segments.push({ type: 'icon', name, src, key: `i${match.index}` })
    } else {
      segments.push({ type: 'text', value: match[0], key: `t${match.index}` })
    }

    lastIndex = TOKEN_PATTERN.lastIndex
    match = TOKEN_PATTERN.exec(text)
  }

  if (lastIndex < text.length) {
    segments.push({
      type: 'text',
      value: text.slice(lastIndex),
      key: `t${lastIndex}`,
    })
  }

  return segments
}

const props = withDefaults(defineProps<{ text?: string }>(), { text: '' })

const segments = computed<Segment[]>(() => tokenize(props.text))
</script>

<style scoped>
  .token-icon {
    display: inline-block;
    vertical-align: 0;
    margin: 0 1px;
  }
</style>
