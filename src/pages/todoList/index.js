import React, { useState } from "react";
import TodoListItem from "@/Components/TodoListItem";
import Layout from "@/Layout";
import { useSelector, useDispatch } from "react-redux";
import { setDataTodoList, setValue } from "../../Redux/Slices/TodoSlice";
import style from "../../styles/TodoList/Todolist.module.css";
import checkLogin from "@/Helper/checkLogin";

const TodoListPage = () => {
  const { dataTodoList, value } = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  const handleAddTodoList = (e) => {
    e.preventDefault();
    if (value !== "") {
      if (dataTodoList === "") {
        dispatch(setDataTodoList([{ name: value, completed: false }]));
      } else {
        dispatch(
          setDataTodoList([...dataTodoList, { name: value, completed: false }])
        );
      }
      dispatch(setValue(""));
    } else {
      alert("data tidak boleh kosong");
    }
  };

  return (
    <Layout>
      <div className={style.todoList}>
        <div className={style.todoListItem}>
          <div>
            <form className={style.form} onSubmit={handleAddTodoList}>
              <input
                className={style.inputTodo}
                type="text"
                onChange={(e) => dispatch(setValue(e.target.value))}
                value={value || ""}
              />
              <button className={style.buttonAddTodo}>Add</button>
            </form>
          </div>
          <div className={style.todoListData}>
            <TodoListItem />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TodoListPage;

export async function getServerSideProps(context) {
  const isLogin = checkLogin(context.req.cookies.email);

  if (isLogin) {
    return isLogin;
  }

  return {
    props: {},
  };
}
