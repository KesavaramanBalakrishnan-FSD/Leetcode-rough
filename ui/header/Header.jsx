"use client";

import React from "react";
import styles from "@/ui/header/header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>LeetcodeStats</div>
        <nav className={styles.nav}>
          <Link className={styles.a} href="/">
            Home
          </Link>
          <Link className={styles.a} href="/login">
            Sign In
          </Link>
          <Link href="/register" className={`${styles.a} ${styles.btn}`}>
            Register
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
