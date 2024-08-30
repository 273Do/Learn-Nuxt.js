// composables な関数は reactive な変数と
// ロジックをコンポーネントから切り離して再利用できるようにした関数
// 何度でも実行できる
// reactでいうhooksのようなもの

// カウンター
export function useCounter(initialValue: number) {
  const count = ref(initialValue);
  const inc = () => (count.value = count.value + 1);
  const dec = () => (count.value = count.value - 1);
  return {
    count,
    inc,
    dec,
  };
}
