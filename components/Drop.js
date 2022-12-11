import React from "react";
import Image from "next/image";

import styles from "../styles/drop.module.scss";

const Drop = () => {
  return (
    <div className={styles.main}>
      <div className={styles.image}>
        <Image
          src="/blit.webp"
          alt="blit"
          width={600}
          height={600}
          className={styles.drop}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <p className={styles.copy}>[ SCI-FI/FANTASY UNIVERSE ]</p>
          <h1 className={styles.header}>Blitmap</h1>
          <p className={styles.copy}>
            The project that started it all. Community-crafted, no rights
            reserved. Explore a vibrant solarpunk utopia, collect artifacts of
            unknown potential, and discover the stories of the Blitnauts and
            Logos that protect them.
          </p>
        </div>
        <a
          className={styles.button}
          href="https://twitter.com/blitmap"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="128"
            height="48"
            className={styles.border}
          >
            <rect
              x="2"
              y="2"
              width="124"
              height="44"
              rx="24"
              ry="24"
              fill="transparent"
              stroke="currentColor"
              stroke-width="2"
              stroke-dasharray="4,4"
            ></rect>
          </svg>
          <span className={styles.cta}>Learn more</span>
        </a>
      </div>
    </div>
  );
};

export default Drop;
