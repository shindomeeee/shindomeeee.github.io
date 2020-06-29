import * as React from "react";
import * as style from "@styles/index/wrapper.module.css";
import { AppState } from "@stores/index";
import { AppActions } from "@containers/index";
import { Facebook } from "@components/common/buttons/facebook";
import { Twitter } from "@components/common/buttons/twitter";
import { Blogs } from "@components/index/blogs";
import { Events } from "@components/index/events";
import headerSvg from "@images/header.svg";
import footerImg from "@images/index/background.png";

type Props = AppActions & AppState;
type State = {
  tabs: "blogs" | "events";
  footer: {
    imageLoading: boolean;
  };
};

export class Wrapper extends React.Component<Props, State> {
  footerImage: HTMLImageElement;

  constructor(props: Props) {
    super(props);
    this.state = {
      tabs: "blogs",
      footer: {
        imageLoading: true
      }
    };
  }

  componentDidMount() {
    if (this.state.footer.imageLoading) {
      this.footerImage = new Image();
      this.footerImage.onload = () => {
        this.setState({
          footer: {
            imageLoading: false
          }
        });
      };
      this.footerImage.src = footerImg;
    }
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
          <footer
            className={
              this.state.footer.imageLoading ? style.disable : style.footer
            }
          >
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
