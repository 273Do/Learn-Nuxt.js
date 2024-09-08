<script setup>
// useFetchを使用してデータを取得(SSRに対応，fetchだとCSR)．
// postsとしてdataを分割代入で取得
// const {
//   data: posts,
//   error,
//   refresh,
// } = await useLazyFetch("https://jsonplaceholder.typicode.com/posts/");
// 以下と同義
// const { data: posts, error } = await useFetch(
//   'https://jsonplaceholder.typicode.com/posts/',
//   {
//     lazy: true,
//   }
// );
// MEMO: useFetch，useLazyFetchの違い：前者=>データの取得が完了するまでページへの移動をしない

const {
  data: posts,
  error,
  pending, //pendingはデータ取得中かどうかを判定する
} = await useLazyAsyncData("posts", () =>
  $fetch("https://jsonplaceholder.typicode.com/posts/")
);
console.log(posts);
console.log(("error", error.value)); // エラーがなければnull
</script>
<template>
  <div>
    <h1>Posts一覧</h1>
    <button @click="refresh()">再取得</button>
    <p v-if="error">{{ error }}</p>
    <p v-if="pending">Loading...</p>
    <ul>
      <!-- v-forを使用し，postsをpostとして展開．Laravelのforeachと似ている -->
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
