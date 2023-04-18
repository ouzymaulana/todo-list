import React from "react";
import style from "../../styles/GuestLayout/Register.module.css";
import GuestLayout from "@/Layout/GuestLayout";

export default function index() {
  return (
    <GuestLayout title="Register">
      <form action="" className={style.form}>
        <label className={style.label} htmlFor="">
          Email
        </label>
        <input type="text" className={style.input} />
        <label className={style.label} htmlFor="">
          Password
        </label>
        <input type="text" className={style.input} />
        <label className={style.label} htmlFor="">
          Confirm Password
        </label>
        <input type="text" className={style.input} />
        <button className={style.button} type="submit">
          Submit
        </button>
      </form>
    </GuestLayout>
  );
}
