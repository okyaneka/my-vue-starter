<template>
  <n-h1 class="text-center"> Selamat Datang di Kegabutan Kulooky </n-h1>
  <n-p class="text-center"> Selamat menikmati kegabutan yang telah dibuat oleh Kulooky </n-p>
  <n-p> &nbsp;</n-p>
  <n-grid cols="3" x-gap="16" y-gap="16">
    <n-gi>
      <router-link to="/app/world-clock">
        <n-card hoverable class="bg-blue-50">
          <div class="text-center">
            <n-icon size="48"><i-ri-timer-2-line /></n-icon>
          </div>
          <div class="text-center">
            <n-text>Jam Dunia</n-text>
          </div>
        </n-card>
      </router-link>
    </n-gi>
  </n-grid>
</template>
