/**
 * 課題①-3
 */

let array = ["掃除", "買い物", "散歩"];

showTaskList();
const message = window.prompt("タスクを入力してください");
array.push(message);
window.alert("新しいタスクを追加しました。");
showTaskList();

const message2 = window.prompt(
  "「確認,追加,削除,終了」の４つのいずれかを入力してください"
);

function showTaskList() {
  console.log("=======================");
  console.log("現在持っているのタスク一覧");
  console.log("=======================");
  array.forEach((value, index) => {
    console.log(index + " : " + value);
  });
}