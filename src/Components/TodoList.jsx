import React, { useRef, useState } from "react";
import todo from "../assets/image/todolist.jpg";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todolist, setTodolist] = useState([]);
  const inputRef = useRef();

  const ADD = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      alert("Please enter a task");
      return;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodolist((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
    // inputRef.current.focus();
  };

  const deleteTodo = (id) => {
    setTodolist((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodolist((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      ADD();
    }
  };

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl shadow-lg">
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo} alt="Todo list icon" />
        <h1 className="text-3xl font-semibold">Todo List</h1>
      </div>

      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Please enter your task.."
          onKeyPress={handleKeyPress}
          aria-label="Task input"
        />
        <button
          onClick={ADD}
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer hover:bg-orange-700 transition-colors"
          aria-label="Add task"
        >
          ADD
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {todolist.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">No tasks yet. Add a task to get started!</p>
        ) : (
          todolist.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              text={item.text}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;