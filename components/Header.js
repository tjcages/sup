import React from "react";
import Image from "next/image";

import styles from "../styles/header.module.scss";

const Header = () => {
  return (
    <div className={styles.main}>
      <Image
        priority
        src="/sup.svg"
        alt="SUP logo"
        width={200}
        height={100}
        className={styles.logo}
      />
    </div>
  );
};

export default Header;
