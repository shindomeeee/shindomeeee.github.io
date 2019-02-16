import * as React from "react";
import * as style from "@styles/index/wrapper.module.css";
import { Facebook } from "@components/common/buttons/facebook";
import { Twitter } from "@components/common/buttons/twitter";

interface Props {}

export const Wrapper = (props: Props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.siteContent}>
        <header className={style.header}>shin・DO・meeee</header>
        <main className={style.main}>
          s<br />s<br />s<br />s<br />s<br />s<br />s<br />s<br />s<br />s<br />
          s<br />s<br />s<br />s<br />s<br />s<br />s<br />s<br />s<br />s<br />
          s<br />s<br />s<br />s<br />s<br />s<br />s<br />s<br />s<br />s<br />
          s<br />s<br />s<br />
        </main>
        <footer className={style.footer}>
          <nav className={style.nav}>
            <Facebook />
            <span className={style.margin} />
            <Twitter />
          </nav>
        </footer>
      </div>
    </div>
  );
};
