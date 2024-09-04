<!-- <script setup>
definePageMeta({
  layout: false,
});
</script> -->
<!-- <template> -->
<!-- <div> -->
<!-- NuxtLayoutは<Child></Child>に近い． -->
<!-- NuxtLayoutの中身がlayoutの<slot />にそのまま入る -->
<!-- https://qiita.com/soicchi/items/25f57f706465e8d5c137 -->
<!-- <NuxtLayout name="default"> -->
<!-- <template>に対してv-slotディレクティブ(#)を使う -->
<!-- <template #header>ヘッダー</template> -->
<!-- <template #footer>フッター</template> -->
<!-- <h1>Main Page</h1> -->
<!-- </NuxtLayout> -->
<!-- </div> -->
<!-- </template> -->

<!-- <script setup>
const show = ref(false);

const handleClick = () => {
  show.value = true;
};
</script> -->
<!-- <template> -->
<!-- <div> -->
<!-- <h1>Main Page</h1> -->
<!-- <button @click="handleClick">Coupon Get</button> -->
<!-- v-ifで要素の表示をするか設定できる -->
<!-- Lazyをつけることで必要な時だけJSファイルをDLできる -->
<!-- <LazyCoupon v-if="show" /> -->
<!-- </div> -->
<!-- </template> -->

<script setup>
// configでも設定可能
import "@/assets/css/style.css";

const { $hello } = useNuxtApp();
// ページごとに遷移アニメーションを無効化
definePageMeta({
  pageTransition: false,
});
</script>
<template>
  <div>
    <h1>Main Page</h1>
    <h2>{{ $hello("World") }}</h2>
    <div>
      <!-- パスに/publicは不要 -->
      <img src="/favicon.ico" alt="Nuxt3 Icon" />
    </div>
    <div>
      <!-- assets配下のファイルを使用する場合は先頭に~や@を使用 -->
      <img src="~/assets/icon-green.png" alt="Nuxt3 Icon" />
    </div>
  </div>
</template>
<!-- <style scoped>
styleでもimport可能
@import '@/assets/css/style.css';
</style> -->
