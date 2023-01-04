/**
 * 課題①-4
 */

let taskObj = {
  掃除: "机を片付ける",
  買い物: "牛乳を買う",
  運動: "散歩する",
};

let i = 0;

showTaskList();
const addValue = window.prompt("タスクを入力してください");
const addKey = window.prompt("ジャンルを入力してください");
window.alert("新しいタスクを追加しました。");
taskObj[addKey] = addValue;
showTaskList();
const message2 = window.prompt(
  "「確認,追加,削除,終了」の４つのいずれかを入力してください"
);

function showTaskList() {
  console.log("=======================");
  console.log("現在持っているのタスク一覧");
  console.log("=======================");
  for (const [key, value] of Object.entries(taskObj)) {
    console.log(i + " : [内容]" + value + "、" + "[ジャンル]" + key);
    i += 1;
  }
  i = 0;
}
