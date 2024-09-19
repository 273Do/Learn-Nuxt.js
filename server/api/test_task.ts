import { PrismaClient } from "@prisma/client";

// defineEventHandlerでリクエストを処理する関数を定義する
export default defineEventHandler(async (e) => {
  // C新しい PrismaClient インスタンスを作成する
  const prisma = new PrismaClient();

  // eventを使用してリクエストのメソッドを取得する
  console.log(e.node.req.method);
  if (e.node.req.method === "GET") {
    // PrismaClient インスタンスを使ってデータベースから全てのタスクを取得する
    const tasks = await prisma.task.findMany();

    return tasks;
  }
  if (e.node.req.method === "POST") {
    // リクエストのボディを読み取る
    const body = await readBody(e);
    const newTask = await prisma.task.create({
      data: {
        task: body.task,
        completed: false,
      },
    });
    console.log(newTask);
    return newTask;
  }
});

// ファイルを以下のようにメソッドごとに分割することもできる
// task.get.ts, task.post.ts，task.put.ts, task.delete.ts
