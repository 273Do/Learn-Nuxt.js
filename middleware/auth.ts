// サイトへのアクセス後のページが表示される前に事前に設定していた処理を行うことできる．
// ある特定のページには管理者権限を持っているユーザしかアクセスさせたくないといった場合、
// ページを表示する前に認証チェックを行うといったことが可能になります。
// 認証のチェックに失敗した場合にはアクセスしたページを表示させず別のページに
// リダイレクトさせるといったことが行えます。

export default defineNuxtRouteMiddleware((to, from) => {
  //   console.log("from", from);
  //   console.log("to", to);

  //   /(ルート)ページからアクセスがあった場合のみ発火
  if (from.fullPath === "/") {
    //   再度/(ルート)ページにリダイレクトさせる
    // return navigateTo("/");

    //  ページ遷移を中止させる
    return abortNavigation();
  }

  //isAdmin関数はアクセスしているユーザが管理者かどうかチェックする関数です。
  //   isAdminは存在しないので動作しません。各自が要件にあった関数を作成する必要があります。
  //   if (isAdmin() === false) {
  //     return navigateTo("/login");
  //   }
});
