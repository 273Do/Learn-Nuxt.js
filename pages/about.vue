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
// useMeta関数でmeta情報を設定
// const title = ref("Aboutページ"); // 動的に変更可能
// const description = ref("Aboutページ");
// useHead({
//   title,
//   meta: [
//     {
//       name: "description",
//       content: description,
//     },
//   ],
// });
</script>
<template>
  <div>
    <!-- タグを使用して設定も可能 -->
    <Head>
      <Title>Aboutページ</Title>
      <Meta name="description" content="Aboutページ" />
    </Head>
    <button @click="enableCustomLayout">Update layout</button>
  </div>
</template>
