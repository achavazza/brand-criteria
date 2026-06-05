<script setup lang="ts">
import { onMounted } from 'vue'
import AppLayout from './components/layout/AppLayout.vue'
import wood from './assets/wood.jpg'
import paper from './assets/paper.jpg'
import cloth from './assets/cloth.jpg'
import cup from './assets/cup.png'
import can from './assets/can.png'
import tote from './assets/tote.png'
import phone from './assets/phone.png'
import l01 from './assets/logos/logos_01.png'
import l02 from './assets/logos/logos_02.png'
import l03 from './assets/logos/logos_03.png'
import l04 from './assets/logos/logos_04.png'
import l05 from './assets/logos/logos_05.png'
import l06 from './assets/logos/logos_06.png'
import l07 from './assets/logos/logos_07.png'
import l08 from './assets/logos/logos_08.png'
import l09 from './assets/logos/logos_09.png'
import l10 from './assets/logos/logos_10.png'
import l11 from './assets/logos/logos_11.png'
import l12 from './assets/logos/logos_12.png'
import l13 from './assets/logos/logos_13.png'
import l14 from './assets/logos/logos_14.png'
import l15 from './assets/logos/logos_15.png'
import l16 from './assets/logos/logos_16.png'

onMounted(() => {
  ;[wood, paper, cloth, cup, can, tote, phone, l01, l02, l03, l04, l05, l06, l07, l08, l09, l10, l11, l12, l13, l14, l15, l16].forEach(src => {
    const img = new Image()
    img.src = src
  })
})
</script>

<template>
  <AppLayout />
</template>
