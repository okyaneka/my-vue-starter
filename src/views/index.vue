<script setup lang="ts">
const version = APP_VERSION
const name = APP_NAME

function p() {
  navigator.clipboard.writeText(document.body.innerHTML)
}
</script>

<template>
  <n-h1 @click="p">Hello there 👋 tes</n-h1>
  <n-p>This is {{ name }} v{{ version }}</n-p>

  <n-h2>What's insides?</n-h2>
  <n-p>This app using:</n-p>
  <n-ul class="list-disc list-outside">
    <n-li><a target="_blank" href="https://www.naiveui.com/">Naive UI</a></n-li>
    <n-li><a target="_blank" href="https://tailwindcss.com/">Tailwind CSS</a></n-li>
    <n-li><a target="_blank" href="https://iconify.design/">Icondify Remix Icon</a></n-li>
    <n-li><a target="_blank" href="https://vueuse.org/">VueUse </a></n-li>
    <n-li><a target="_blank" href="https://pinia.vuejs.org/">Pinia</a></n-li>
    <n-li><a target="_blank" href="https://router.vuejs.org/">Vue Router</a></n-li>
    <n-li
      ><a target="_blank" href="https://www.npmjs.com/package/unplugin-auto-import"
        >Unplugin Auto Import</a
      ></n-li
    >
    <n-li
      ><a target="_blank" href="https://www.npmjs.com/package/unplugin-vue-components"
        >Unplugin Vue Components</a
      ></n-li
    >
    <n-li
      ><a target="_blank" href="https://www.npmjs.com/package/vite-plugin-vue-layouts"
        >Vite Plugin Vue Layouts</a
      ></n-li
    >
    <n-li
      ><a target="_blank" href="https://www.npmjs.com/package/vite-plugin-pages"
        >Vite Plugin Pages</a
      ></n-li
    >
  </n-ul>

  <n-h2>How to</n-h2>
  <n-h3>Run dev</n-h3>

  <n-card class="bg-gray-50" bordered>
    <pre>
pnpm dev      
</pre
    >
  </n-card>
  <n-h3>Build</n-h3>

  <n-card class="bg-gray-50" bordered>
    <pre>
pnpm build
</pre
    >
  </n-card>

  <n-h2>Directory Structure</n-h2>

  <n-card class="bg-gray-50" bordered>
    <pre>
/components
/layouts
/middlewares
/models
/views
</pre
    >
  </n-card>

  <n-h3>/components</n-h3>
  <n-p>This directory is used for saving component files.</n-p>
  <n-h3>/layouts</n-h3>
  <n-p>This directory is used for saving layout files.</n-p>
  <n-h3>/middlewares</n-h3>
  <n-p>This directory is used for saving middleware files.</n-p>
  <n-h3>/models</n-h3>
  <n-p>This directory is used for saving model files.</n-p>
  <n-p>This models are include store function.</n-p>
  <n-h3>/views</n-h3>
  <n-p>This directory is used for saving view files.</n-p>
  <n-p>This also generate route based on path created.</n-p>

  <n-p>
    <n-text strong italic> nb: please visit the source for more info </n-text>
  </n-p>
</template>
