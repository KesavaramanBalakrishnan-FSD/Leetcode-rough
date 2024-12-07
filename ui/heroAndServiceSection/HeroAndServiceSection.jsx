"use client";

import React from "react";
import styles from "@/ui/heroAndServiceSection/heroAndServiceSection.module.css";
import Link from "next/link";

const HeroAndServiceSection = () => {
  return (
    <>
      <main>
        <section className={styles.hero}>
          <h1 className={styles.h1}>Welcome to LeetCode Profile Explorer!</h1>
          <p className={styles.p}>
            Track your progress, analyze your coding journey, and showcase your
            achievements in style.
          </p>
          <div className={styles.actions}>
            <Link href="/login" className={`${styles.a} ${styles.btn}`}>
              Sign In
            </Link>
            <Link
              href="/register"
              className={`${styles.a} ${styles.btn} ${styles.secondary}`}
            >
              Register
            </Link>
          </div>
        </section>
        <section className={styles.features}>
          <h2 className={styles.h3}>Why Use Our Platform?</h2>
          <div className={styles.featurelist}>
            <div className={styles.feature}>
              <h3 className={styles.h3}>📈 Track Progress</h3>
              <p className={styles.p}>
                View submission stats, rankings, and solved problems.
              </p>
            </div>
            <div className={styles.feature}>
              <h3 className={styles.h3}>⏱ Real-Time Data</h3>
              <p className={styles.p}>
                Fetch live LeetCode data for up-to-date information.
              </p>
            </div>
            <div className={styles.feature}>
              <h3 className={styles.h3}>🔒 Secure Access</h3>
              <p className={styles.p}>
                Rest assured that your data remains private and secure.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HeroAndServiceSection;
