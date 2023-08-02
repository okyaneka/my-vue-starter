<route lang="yaml">
meta:
  layout: app
</route>

<script setup lang="ts">
function swipeHandler() {
  console.log('swiper jangan mencuri')
}
</script>

<template>
  <n-h1>Jam dunia 😝</n-h1>
  <div class="h-96 bg-pink-50" v-touch:swipe="swipeHandler">Swipe Here</div>
  <div class="h-96 bg-pink-50" v-touch:swipe="swipeHandler">Swipe Here</div>
  <div class="h-96 bg-pink-50" v-touch:swipe="swipeHandler">Swipe Here</div>
  <div class="h-96 bg-pink-50" v-touch:swipe="swipeHandler">Swipe Here</div>
  <div class="h-96 bg-pink-50" v-touch:swipe="swipeHandler">Swipe Here</div>
</template>
