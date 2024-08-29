<script setup>
definePageMeta({
  layout: false,
});
</script>
<template>
  <div>
    <!-- NuxtLayoutは<Child></Child>に近い． -->
    <!-- NuxtLayoutの中身がlayoutの<slot />にそのまま入る -->
    <!-- https://qiita.com/soicchi/items/25f57f706465e8d5c137 -->
    <NuxtLayout name="default">
      <!-- <template>に対してv-slotディレクティブ(#)を使う -->
      <template #header>ヘッダー</template>
      <!-- <template #footer>フッター</template> -->
      <h1>Main Page</h1>
    </NuxtLayout>
  </div>
</template>
