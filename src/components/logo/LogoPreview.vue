<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  src: string
}>()

const imgRef = ref<HTMLImageElement | null>(null)

defineExpose({ imgRef })
</script>

<template>
  <div class="preview-container">
    <div class="preview-frame">
      <img ref="imgRef" :src="src" alt="Uploaded logo" class="logo-image" />
    </div>
  </div>
</template>

<style scoped>
.preview-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-frame {
  max-width: 360px;
  max-height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-color);
  padding: 32px;
}

.logo-image {
  max-width: 100%;
  max-height: 280px;
  object-fit: contain;
}
</style>
