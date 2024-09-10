<script setup>
// レイアウトを動的に変更するための関数1
// function enableCustomLayout() {
//   setPageLayout("custom");
// }
// レイアウトを動的に変更するための関数2
const route = useRoute();
const enableCustomLayout = () => {
  route.meta.layout = "default";
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

// const counter = ref(0);
// ページを移動してもcountの値が保持される
// 第一引数にキーを設定することで後ほど別のページから共有したcounterにアクセスする．
// const counter = useState("counter", () => 0);
const counter = useCounter();
</script>
<template>
  <div>
    <!-- タグを使用して設定も可能 -->
    <Head>
      <Title>Aboutページ</Title>
      <Meta name="description" content="Aboutページ" />
    </Head>
    <button @click="enableCustomLayout">Update layout</button>

    <h1>About Page</h1>
    <h2>Counter</h2>
    <p>Count: {{ counter }}</p>
    <button @click="counter++">+</button>
  </div>
</template>
