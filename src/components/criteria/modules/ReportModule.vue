<script setup lang="ts">
import { useLogoStore } from '../../../stores/logo'

const logo = useLogoStore()
</script>

<template>
  <div class="report-module">
    <div class="logo-area">
      <img :src="logo.dataUrl!" alt="" class="large-logo" />
    </div>
  </div>
</template>

<style scoped>
.report-module {
  width: 100%; height: 100%;
  display: flex; flex-direction: column;
}
.logo-area {
  flex: 1;
  display: flex; align-items: center; justify-content: center;
  padding: 20px;
  min-height: 0;
}
.large-logo { max-width: 80%; max-height: 85%; object-fit: contain; }
</style>
