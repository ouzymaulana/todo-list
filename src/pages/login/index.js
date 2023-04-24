import GuestLayout from "@/Layout/GuestLayout";
import React from "react";
import style from "../../styles/GuestLayout/Login.module.scss";
import Link from "next/link";

export default function LoginPage() {
  return (
    <GuestLayout title="Login">
      <form action="" className={style.form}>
        <label htmlFor="">email</label>
        <input type="text" className={style.input} />
        <label htmlFor="">password</label>
        <input type="text" className={style.input} />
        <button className={style.button} type="submit">
          Login
        </button>
        <Link className={style.createAccount} href="/register">
          create account
        </Link>
      </form>
    </GuestLayout>
  );
}
