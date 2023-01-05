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
const addContent = window.prompt("タスクを入力してください");
const addGenre = window.prompt("ジャンルを入力してください");
const newTaskObject = new Object();
newTaskObject.content = addContent;
newTaskObject.genre = addGenre;
window.alert("新しいタスクを追加しました。");
tasks.push(newTaskObject);
showTaskList();
const message2 = window.prompt(
  "「確認,追加,削除,終了」の４つのいずれかを入力してください"
);

function showTaskList() {
  console.log("=======================");
  console.log("現在持っているのタスク一覧");
  console.log("=======================");
  for (let i in tasks) {
    console.log(
      i + " : [内容]" + tasks[i].content + "、" + "[ジャンル]" + tasks[i].genre
    );
  }
}
