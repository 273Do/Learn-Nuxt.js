<script setup>
const { count, inc, dec } = useCounter(100);
</script>
<template>
  <div>
    <h1>Counter Page</h1>
    <div>Count:{{ count }}</div>
    <div>
      <button @click="() => inc()">increase</button>
      <button @click="() => dec()">decrease</button>
    </div>
  </div>
</template>
