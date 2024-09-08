<template>
  <nav>
    <!-- <a href="/">Home</a>
    <a href="/about">About</a> -->
    <!-- ページの中で更新が必要な箇所だけ更新が行われる -->
    <!-- ページ全体が再ロードされないためスムーズ -->
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/counter">Counter</NuxtLink>
    <NuxtLink to="/posts">Posts</NuxtLink>
    <!-- nameプロパティでルーティングの名前を利用することでも設定可能 -->
    <NuxtLink :to="{ name: 'users-list' }">User List</NuxtLink>
    <!-- toではなくhrefを使用可能 -->
    <NuxtLink to="https://google.com" target="_blank">Google</NuxtLink>
  </nav>
</template>
<style>
nav {
  gap: 10px;
  display: flex;
}
</style>
