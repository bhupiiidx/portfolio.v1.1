import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Bhupender</h1>
        <p className={styles.description}>
          I'm a dedicated full-stack developer with 4 years of experience specializing in the MERN stack.
          I have a passion for creating seamless user interfaces and robust back-end systems.
          If you're looking for a skilled developer to bring your ideas to life,
          I'd love to connect!
        </p>

        <a href="mailto:bhupender81238@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
