import React from "react";
import styles from "../styles/home.module.scss";

import Pixels from "../components/Pixels";
import Header from "../components/Header";
import Drop from "../components/Drop";

export default function Home() {
  return (
    <div className={styles.main}>
      <Pixels />
      <Header />
      <Drop />
    </div>
  );
}
