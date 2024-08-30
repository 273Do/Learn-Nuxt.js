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
</script>
<template>
  <div>
    <!-- <NavNavbar /> -->
    <Navbar />
    <slot />
  </div>
</template>
