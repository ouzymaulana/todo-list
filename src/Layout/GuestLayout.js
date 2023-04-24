import React from "react";
import style from "../styles/GuestLayout/Login.module.scss";

export default function GuestLayout({ children, title }) {
  return (
    <div className="guest-layout">
      <div className={style.login}>
        <div className={style.title}>
          <span>{title}</span>
        </div>
        {children}
      </div>
    </div>
  );
}
