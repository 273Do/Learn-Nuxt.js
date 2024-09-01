<script setup>
// $route.params.id以外にもuseRoute()でもidを取得できる
const router = useRoute();

console.log(router.params.id);
</script>
<template>
  <div>
    <!-- idの取得 -->
    <p>ユーザID: {{ $route.params.id }}</p>
  </div>
</template>
