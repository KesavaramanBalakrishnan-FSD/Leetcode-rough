"use client";

import React from "react";
import styles from "@/ui/footer/footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <p>
          © 2024 LeetCode Profile Explorer.
          <Link className={styles.a} href="/terms">
            Terms
          </Link>
          |
          <Link className={styles.a} href="/privacy">
            Privacy
          </Link>
          <Link className={styles.a} href="/contact">
            Contact Us
          </Link>
        </p>
      </footer>
    </>
  );
};

export default Footer;
