"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "@/ui/registerationForm/registerationForm.module.css";
import { handleSubmit } from "@/utils/formHandlers";
const RegisterationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [serverMessage, setServerMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.bodyContainer}>
      <div className={styles.wrapper}>
        <h2 className={styles.h2}>Registration</h2>
        <form
          className={styles.form}
          onSubmit={(e) =>
            handleSubmit(
              e,
              formData,
              setErrors,
              setServerMessage,
              setIsError,
              setIsLoading,
              setFormData
            )
          }
        >
          <div className={styles.inputBox}>
            <input
              type="text"
              placeholder="Enter your name"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          {errors.username && (
            <span className={styles.error}>{errors.username}</span>
          )}

          <div className={styles.inputBox}>
            <input
              type="text"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {errors.email && <span className={styles.error}>{errors.email}</span>}

          <div className={styles.inputBox}>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {errors.password && (
            <span className={styles.error}>{errors.password}</span>
          )}

          <div className={`${styles.inputBox} ${styles.button}`}>
            <button type="submit" disabled={isLoading} className={styles.btn}>
              {isLoading ? "Loading..." : "Register Now"}
            </button>
          </div>

          {/* Conditional rendering for server messages */}
          {serverMessage && (
            <span className={isError ? styles.error : styles.success}>
              {serverMessage}
            </span>
          )}
          <br />

          <div className={styles.text}>
            <p className={styles.p}>
              Already have an account?{" "}
              <Link className={styles.a} href="/login">
                Login now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterationForm;
