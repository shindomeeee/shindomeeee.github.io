import * as React from "react";
import * as style from "@styles/index/wrapper.module.css";
import { AppState } from "@stores/index";
import { AppActions } from "@containers/index";
import { Facebook } from "@components/common/buttons/facebook";
import { Twitter } from "@components/common/buttons/twitter";
import { Blogs } from "@components/index/blogs";
import { Events } from "@components/index/events";
import headerSvg from "@images/header.svg";
import { empty } from "coverage/lcov-report/base.css";

type Props = AppActions & AppState;
type State = {
  tabs: "blogs" | "events";
};

export class Wrapper extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tabs: "blogs"
    };
  }

  render() {
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
            <nav className={style.tabs}>
              <div
                className={
                  this.state.tabs === "blogs" ? style.tappedTab : style.tab
                }
                onClick={() => this.setState({ tabs: "blogs" })}
              >
                Blogs
              </div>
              <div
                className={
                  this.state.tabs === "events" ? style.tappedTab : style.tab
                }
                onClick={() => this.setState({ tabs: "events" })}
              >
                Events
              </div>
            </nav>
            <Blogs {...this.props} display={this.state.tabs === "blogs"} />
            <Events {...this.props} display={this.state.tabs === "events"} />
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
  }
}
