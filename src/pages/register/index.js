import React, { useState } from "react";
import style from "../../styles/GuestLayout/Register.module.scss";
import GuestLayout from "@/Layout/GuestLayout";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function RegistePage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().min(5).required(),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "confirm password is not correct"
    ),
  });

  return (
    <GuestLayout title="Register">
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validationSchema={validationSchema}
      >
        <Form action="" className={style.form}>
          <label className={style.label} htmlFor="email">
            Email
          </label>
          <Field type="text" name="email" className={style.input} id="email" />
          <span className={style.errorMessage}>
            <ErrorMessage name="email" />
          </span>
          <label className={style.label} htmlFor="password">
            Password
          </label>
          <div className={style.inputGroup}>
            <Field
              type={`${showPassword ? "text" : "password"}`}
              name="password"
              className={style.input}
              id="password"
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
          <label className={style.label} htmlFor="confirm-password">
            Confirm Password
          </label>
          <div className={style.inputGroup}>
            <Field
              type={`${showConfirmPassword ? "text" : "password"}`}
              name="confirmPassword"
              className={style.input}
              id="confirm-password"
            />
            <FontAwesomeIcon
              onClick={handleShowConfirmPassword}
              className={style.iconEyes}
              icon={showConfirmPassword ? faEye : faEyeSlash}
            />
          </div>
          <span className={style.errorMessage}>
            <ErrorMessage name="confirmPassword" />
          </span>
          <button className={style.button} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </GuestLayout>
  );
}
