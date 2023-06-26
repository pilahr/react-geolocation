import React from "react";
import "./TodoList.scss";
import Bin from "../../assets/bin.svg";

const TodoList = ({
  newTask,
  tasks,
  getTask,
  handleAddTask,
  handleDeleteTask,
}) => {
  return (
    <div className="todoList">
      <h2 className="todoList__header">To Do List..</h2>
      <div className="todoList__wrap">
        <input
          className="todoList__wrap--input"
          type="text"
          placeholder="Add a task.."
          value={newTask}
          onChange={getTask}
        />

        <button className="todoList__wrap--button" onClick={handleAddTask}>
          +
        </button>
      </div>

      {tasks.map((task, index) => {
        return (
          <div key={index} className="todoList__task">
            <h3 className="todoList__task--text">{task.value}</h3>
            <img
              className="todoList__task--icon"
              src={Bin}
              alt="bin icon"
              onClick={() => {
                handleDeleteTask(task.id);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
