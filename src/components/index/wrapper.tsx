import * as React from "react";
import * as style from "@styles/index/wrapper.module.css";
import { AppState } from "@stores/index";
import { AppActions } from "@containers/index";
import { Facebook } from "@components/common/buttons/facebook";
import { Twitter } from "@components/common/buttons/twitter";
import { Blogs } from "@components/index/blogs";
import headerSvg from "@images/header.svg";

type Props = AppActions & AppState;

export const Wrapper = (props: Props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.siteContent}>
        <header className={style.header}>
          <object
            className={style.headerSvg}
            type="image/svg+xml"
            data={headerSvg}
          />
        </header>
        <main className={style.main}>
          <Blogs {...props} />
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
