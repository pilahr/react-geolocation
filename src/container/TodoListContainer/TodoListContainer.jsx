import React, { useState } from "react";
import "./TodoListContainer.scss";
import TodoList from "../../components/TodoList/TodoList";

const TodoListContainer = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const getTask = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (!newTask) {
      alert("Enter task");
      return;
    }

    const task = {
      id: Math.floor(Math.random() * 1000),
      value: newTask,
    };

    setTasks((oldList) => [...oldList, task]);
    setNewTask("");
  };

  const handleDeleteTask = (id) => {
    const newArray = tasks.filter((task) => task.id !== id);
    setTasks(newArray);
  };

  return (
    <div className="todoListContainer">
      <TodoList
        newTask={newTask}
        tasks={tasks}
        getTask={getTask}
        handleAddTask={handleAddTask}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default TodoListContainer;
