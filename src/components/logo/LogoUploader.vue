<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLogoStore } from '../../stores/logo'
import { ref } from 'vue'

const logo = useLogoStore()
const { t } = useI18n()
const isDragOver = ref(false)

function handleDrop(e: DragEvent) {
  e.preventDefault()
  isDragOver.value = false
  const file = e.dataTransfer?.files[0]
  if (file && file.type.startsWith('image/')) {
    logo.setLogo(file)
  }
}

function handleDragOver(e: DragEvent) {
  e.preventDefault()
  isDragOver.value = true
}

function handleDragLeave() {
  isDragOver.value = false
}

function handleFileSelect(e: Event) {
  const input = e.target as HTMLInputElement
  const file = input.files?.[0]
  if (file) {
    logo.setLogo(file)
  }
}
</script>

<template>
  <div
    class="uploader"
    :class="{ 'drag-over': isDragOver }"
    @drop="handleDrop"
    @dragover="handleDragOver"
    @dragleave="handleDragLeave"
  >
    <div class="uploader-content">
      <div class="upload-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      </div>
      <p class="upload-title">{{ t('uploader.dropHere') }}</p>
      <p class="upload-hint mono">{{ t('uploader.clickToSelect') }}</p>
      <p class="upload-size-hint">{{ t('uploader.sizeHint') }}</p>
      <input
        type="file"
        accept="image/*"
        class="file-input"
        @change="handleFileSelect"
      />
    </div>
  </div>
</template>

<style scoped>
.uploader {
  width: 100%;
  max-width: 360px;
  border: 1px dashed var(--border-light);
  transition: border-color 0.2s, background 0.2s;
  cursor: pointer;
  position: relative;
}

.uploader:hover,
.uploader.drag-over {
  border-color: var(--text-tertiary);
  background: var(--bg-secondary);
}

.uploader-content {
  padding: 48px 32px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.upload-icon {
  color: var(--text-tertiary);
  width: 24px;
  height: 24px;
}

.upload-title {
  font-size: 14px;
  color: var(--text-secondary);
  letter-spacing: 0.3px;
}

.upload-hint {
  font-size: 10px;
  color: var(--text-tertiary);
  letter-spacing: 1px;
}

.upload-size-hint {
  font-size: 10px;
  color: var(--text-tertiary);
  letter-spacing: 0.3px;
  opacity: 0.55;
  max-width: 220px;
  line-height: 1.4;
}

.file-input {
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
}
</style>
