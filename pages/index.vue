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

const show = ref(false);

const handleClick = () => {
  show.value = true;
};

// useFetch関数はuseAsyncData関数と$fetch関数の利用を便利にしたラッパー
// useFetch関数より複雑な処理を追加できる
// 第一引数(キー)は省略可能で，省略した場合はファイル名と行番号を利用して自動でキーが設定される
const { data: posts, error } = await useAsyncData(() => {
  console.log("fetch"); //追加の処理
  // $fetchはofetchのを使用しており，サーバ側とクライアント側で2度fetchが行われる
  return $fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
});
console.log(useNuxtApp().payload.data);

// const { data } = useFetch("/api/hello");
const { data: tasks, refresh } = useFetch("/api/task");

const task = ref("");
const addTask = () => {
  // console.log(task.value);
  $fetch("/api/task", {
    method: "post",
    body: { task: task.value },
  });
  // サーバー側でデータが更新された後に再度データを取得する
  refresh();
  task.value = ""; // フォームのリセット
};
</script>
<template>
  <div>
    <Html lang="ja">
      <Head>
        <Title>Indexページ</Title>
        <Meta name="description" content="Indexページ" />
      </Head>
    </Html>
    <h1>Main Page</h1>
    <button @click="handleClick">Coupon Get</button>
    <LazyCoupon v-if="show" />

    <div>
      <!-- <p class="font-bold">{{ data }}</p> -->
      <h1>form area</h1>
      <ul>
        <li class="text-red-600" v-for="task in tasks" :key="task.id">
          {{ task.task }}
        </li>
      </ul>
      <form @submit.prevent="addTask">
        <div>
          <input v-model="task" />
        </div>
        <div>
          <button type="submit">タスクを登録</button>
        </div>
      </form>
    </div>

    <hr class="m-4" />

    <div>
      <p v-if="error">{{ error }}</p>
      <ul>
        <li class="text-blue-400" v-for="post in posts" :key="post.id">
          {{ post.title }}
        </li>
      </ul>
    </div>

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
