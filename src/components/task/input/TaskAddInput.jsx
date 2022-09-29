import React from "react";
import { v4 as uuid } from "uuid";

export const TaskAddInput = ({
  inputText,
  setInputText,
  setTaskList,
  taskList,
}) => {
  const handleSubmit = (e) => {
    const taskId =uuid();
    e.preventDefault();
    if (inputText === "") {
      return;
    }
    // カードを追加する。
    setTaskList([
      ...taskList,
      {
        id: taskId,
        draggableId: `task-${taskId}`,
        text: inputText,
      },
    ]);
    //console.log(...taskList);
    //console.log(inputText)
    setInputText("");
  };

  const handleChange = (e) => {
    // 入力フォームに入力された文字を受け取り更新する
    setInputText(e.target.value);
    //console.log(inputText);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a task"
          className="taskAddInput"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};
