<!-- Remixのnested routeのような感じ -->
<script setup>
// useStateによって状態の保持とコンポーネント間でのデータ共有が行える
// const counter = useState("counter");
const counter = useCounter();
console.log(counter);
</script>
<template>
  <div>
    <h1>Usersページ</h1>
    <p>Count:{{ counter }}</p>
    <!-- Remixのoutletのようなもの -->
    <NuxtPage />
  </div>
</template>
