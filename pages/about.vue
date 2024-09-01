<script setup>
// レイアウトを動的に変更するための関数1
// function enableCustomLayout() {
//   setPageLayout("custom");
// }
// レイアウトを動的に変更するための関数2
const route = useRoute();
const enableCustomLayout = () => {
  route.meta.layout = "custom";
};
definePageMeta({
  // layout: "custom", // カスタムレイアウト(ファイル名)を指定
  layout: false, // レイアウトを無効化
  middleware: "auth", // ミドルウェアをファイル名で指定
  // inlineでミドルウェアを指定することも可能
  // middleware: defineNuxtRouteMiddleware((to, from) => {
  //   console.log("to", to);
  //   console.log("from", from);
  // }),
});
</script>
<template>
  <div>
    <button @click="enableCustomLayout">Update layout</button>
  </div>
</template>
