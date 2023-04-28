import GuestLayout from "@/Layout/GuestLayout";
import React, { useState } from "react";
import style from "../../styles/GuestLayout/Login.module.scss";
import Link from "next/link";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import { isAccessLoginPage } from "@/Helper/checkLogin";
// import dataUser from "../../../src/../"

export default function LoginPage({ dataUsers }) {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (values, setFieldError) => {
    const { email, password } = values;
    const checkEmail = dataUsers.find((data) => data.email == email);
    const checkPassword = dataUsers.find((data) => data.password == password);

    if (checkEmail == undefined) {
      setFieldError("email", "email not found");
      return;
    } else if (checkPassword == undefined) {
      setFieldError("password", "password not found");
      return;
    } else {
      Cookies.set("email", email, { expires: 1 / 24 });
      router.push("/");
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().min(5).required(),
  });

  return (
    <GuestLayout title="Login">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setFieldError }) =>
          handleSubmit(values, setFieldError)
        }
      >
        <Form action="" className={style.form}>
          <label htmlFor="email">email</label>
          <Field type="text" id="email" name="email" className={style.input} />
          <span className={style.errorMessage}>
            <ErrorMessage name="email" />
          </span>
          <label htmlFor="password">password</label>
          <div className={style.inputGroup}>
            <Field
              type={`${showPassword ? "text" : "password"}`}
              id="password"
              name="password"
              className={style.input}
            />
            <FontAwesomeIcon
              onClick={handleShowPassword}
              className={style.iconEyes}
              icon={showPassword ? faEye : faEyeSlash}
            />
          </div>
          <span className={style.errorMessage}>
            <ErrorMessage name="password" />
          </span>
          <button className={style.button} type="submit">
            Login
          </button>
          <Link className={style.createAccount} href="/register">
            create account
          </Link>
        </Form>
      </Formik>
    </GuestLayout>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/users`);
  const users = await res.json();

  const isLogin = isAccessLoginPage(context.req.cookies.email);

  if (isLogin) {
    return isLogin;
  }

  return {
    props: {
      dataUsers: users,
    },
  };
}
