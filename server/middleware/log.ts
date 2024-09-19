// server ディレクトリの下に middleware ディレクトリを作成してファイルを作成することで
// すべてのリクエストに対して API Routes にリクエストが入る前に処理を行うことができる．

export default defineEventHandler((event) =>
  console.log("New request: " + event.node.req.url)
);
