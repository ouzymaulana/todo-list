import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDataTodoList } from "@/Redux/Slices/TodoSlice";
import style from "../styles/TodoList/Todolist.module.css";

const TodoListItem = () => {
  const { dataTodoList } = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  const updateTodoList = (index) => {
    const newData = dataTodoList.map((data, i) => {
      if (i == index) {
        return {
          ...data,
          completed: !data.completed,
        };
      }
      return data;
    });
    dispatch(setDataTodoList(newData));
  };

  function deleteTodo(index) {
    const newDataTodo = dataTodoList.filter((data, i) => i !== index);
    dispatch(setDataTodoList(newDataTodo));
  }

  return dataTodoList == "" ? (
    <p>data kosong</p>
  ) : (
    dataTodoList.map((data, index) => (
      <div className={style.todolistDataItem} key={index}>
        <p className={`${style.todoName} ${data.completed ? style.done : ""}`}>
          {data.name}
        </p>
        <button
          className={style.buttonTodo}
          onClick={() => updateTodoList(index)}
        >
          Done
        </button>
        <button className={style.buttonTodo} onClick={() => deleteTodo(index)}>
          Delete
        </button>
      </div>
    ))
  );
};

export default TodoListItem;
