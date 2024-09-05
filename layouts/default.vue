<!-- 画面に共通するレイアウト -->
<!-- <template> -->
<!-- <div> -->
<!-- slotは親コンポーネント(indexなど)から要素を受けとる -->
<!-- nameを設定することで複数(指定したコンテンツを渡すことが可能) -->

<!-- 以下はtemplate #headerの要素を受けとる -->
<!-- https://qiita.com/m_norii/items/c52171fd09c4504f8b81 -->
<!-- <slot name="header" /> -->
<!-- <nav>ここにナビゲーションバーを入れる</nav> -->
<!-- 名前付きtemplate以外の親コンポーネントの全てを受けとる -->
<!-- <slot /> -->
<!-- <slot name="footer" /> -->
<!-- </div> -->
<!-- </template> -->
<script setup>
import Navbar from "@/components/Navbar";
// タイトル - Nuxt 3 basicのようにtitleをページごとに設定できる
// useHead({
//   titleTemplate: (title) => {
//     return title ? `${title} - Nuxt 3 basic` : "Nuxt 3 basic";
//   },
// });
// titleTemplateで関数を利用しない場合はtitleの箇所に%sを設定することでtitleが設定される
useHead({
  titleTemplate: "%s - Nuxt 3 basic",
});
</script>
<template>
  <div>
    <!-- 全てのページで言語がjaになる -->
    <Html lang="ja" />
    <!-- <NavNavbar /> -->
    <Navbar />
    <slot />
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
