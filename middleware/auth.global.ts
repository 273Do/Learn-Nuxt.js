// ファイルに global をつけることで全てのページで自動でmiddlewareが設定される．

export default defineNuxtRouteMiddleware((to, from) => {
  console.log("from", from);
  console.log("to", to);
});
