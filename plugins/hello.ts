// プラグインはアプリケーション全体で利用可能なグローバルな機能を提供
// アプリケーションの起動時に一度だけ実行される
// https://zenn.dev/hoshi_front/articles/1f79130fac2d70
export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello(msg: string) {
        return `Hello ${msg}!`;
      },
    },
  };
});
