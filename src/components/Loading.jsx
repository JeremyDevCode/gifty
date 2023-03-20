import React from "react";
import styles from "../styles/Loading.module.css";

function Loading() {
  return (
    <section className="grid place-items-center w-full">
      <article className={styles.container}>
        <div></div>
        <div></div>
      </article>
    </section>
  );
}

export { Loading };
