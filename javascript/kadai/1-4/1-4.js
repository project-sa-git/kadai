/**
 * 課題①-4
 */

const tasks = [
  {
    content: "机を片付ける",
    genre: "掃除",
  },
  {
    content: "牛乳を買う",
    genre: "買い物",
  },
  {
    content: "運動",
    genre: "散歩する",
  },
];

showTaskList();
const content = window.prompt("タスクを入力してください");
const genre = window.prompt("ジャンルを入力してください");
const task = {
  content,
  genre,
};
window.alert("新しいタスクを追加しました。");
tasks.push(task);
showTaskList();
const action = window.prompt(
  "「確認,追加,削除,終了」の４つのいずれかを入力してください"
);

function showTaskList() {
  console.log("=======================");
  console.log("現在持っているのタスク一覧");
  console.log("=======================");
  tasks.forEach((task, index) => {
    console.log(
      index + " : [内容]" + task.content + "、" + "[ジャンル]" + task.genre
    );
  });
}
