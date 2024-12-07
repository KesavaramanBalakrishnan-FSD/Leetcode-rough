import React from "react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import styles from "@/ui/loginForm/loginForm.module.css";

const LoginForm = () => {
  return (
    <>
      <div className={styles.bodyContainer}>
        <div className={styles.wrapper}>
          <h2 className={styles.h2}>Login</h2>
          <form className={styles.form}>
            <div className={styles.inputBox}>
              <input
                type="text"
                placeholder="Enter your name"
                name="username"
                required
              />
            </div>

            <div className={styles.inputBox}>
              <input
                type="password"
                placeholder="Enter your password"
                required
                name="password"
              />
            </div>

            <div className={`${styles.inputBox} ${styles.button}`}>
              <input type="Submit" defaultValue="Login Now" />
            </div>
            <div className={styles.text}>
              <p className={styles.p}>
                Don't have an account?{" "}
                <Link className={styles.a} href="/register">
                  Register
                </Link>
              </p>
            </div>
          </form>
          <br></br>
          <hr></hr>

          <div className={styles.google}>
            <div className={styles.containerIcon}>
              <div className={styles.inputBox}>
                <button>
                  <FcGoogle /> <span>Sign in with Google</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
