<script setup lang="ts">
defineProps<{
  text: string
  source?: string
}>()
</script>

<template>
  <div class="pull-quote">
    <div class="quote-line"></div>
    <blockquote>
      <p>{{ text }}</p>
      <cite v-if="source" class="mono">{{ source }}</cite>
    </blockquote>
  </div>
</template>

<style scoped>
.pull-quote {
  margin: 32px 0;
  padding: 24px 0;
  position: relative;
}

.quote-line {
  position: absolute;
  left: 0;
  top: 0;
  width: 24px;
  height: 2px;
  background: var(--text-tertiary);
}

blockquote {
  padding-right: 40px;
}

blockquote p {
  font-size: 15px;
  line-height: 1.7;
  color: var(--text-secondary);
  font-style: italic;
  letter-spacing: 0.2px;
}

cite {
  display: block;
  margin-top: 12px;
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--text-tertiary);
  font-style: normal;
}
</style>
