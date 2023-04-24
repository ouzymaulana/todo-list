import React from "react";
import style from "../../styles/GuestLayout/Register.module.scss";
import GuestLayout from "@/Layout/GuestLayout";

export default function RegistePage() {
  return (
    <GuestLayout title="Register">
      <form action="" className={style.form}>
        <label className={style.label} htmlFor="email">
          Email
        </label>
        <input type="text" className={style.input} id="email" />
        <label className={style.label} htmlFor="password">
          Password
        </label>
        <input type="text" className={style.input} id="password" />
        <label className={style.label} htmlFor="confirm-password">
          Confirm Password
        </label>
        <input type="text" className={style.input} id="confirm-password" />
        <button className={style.button} type="submit">
          Submit
        </button>
      </form>
    </GuestLayout>
  );
}
