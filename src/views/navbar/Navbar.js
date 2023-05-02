import React, { useEffect } from "react";
import Link from "next/link";
import style from "../../styles/Navbar.module.scss";
import { deleteCartWhenLogout } from "@/Redux/Slices/dataCartSlice";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Navbar = () => {
  const dispatch = useDispatch();
  const route = useRouter();

  const handleLogout = () => {
    dispatch(deleteCartWhenLogout());
    route.push("/login");
    Cookies.remove("email");
  };

  return (
    <header className={style.header}>
      <ul className={style.ul}>
        <li className={style.li}>
          <Link href="/">Home</Link>
        </li>
        <li className={style.li}>
          <Link href="/todoList">Todo list</Link>
        </li>
        <li className={style.li}>
          <Link href="about">About</Link>
        </li>
      </ul>
      <button className={style.logoutButton} onClick={handleLogout}>
        Logout
      </button>
    </header>
  );
};

export default Navbar;
