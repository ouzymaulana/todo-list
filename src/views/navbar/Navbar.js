import React from "react";
import Link from "next/link";
import style from "../../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <header className={style.header}>
      <ul className={style.ul}>
        <li className={style.li}>
          <Link href="/">Home</Link>
        </li>
        <li className={style.li}>
          <Link href="/product">Product</Link>
        </li>
        <li className={style.li}>
          <Link href="/todoList">Todo list</Link>
        </li>
        <li className={style.li}>
          <Link href="about">About</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
