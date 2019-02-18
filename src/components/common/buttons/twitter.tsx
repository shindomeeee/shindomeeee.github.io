import * as React from "react";

type Props = {};
type State = {
  loading: boolean;
};

export class Twitter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    const scriptElement = document.createElement("script");
    scriptElement.src = "https://platform.twitter.com/widgets.js";
    document.body.appendChild(scriptElement);
    this.setState({
      loading: false
    });
  }

  render() {
    return this.state.loading ? null : (
      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        className="twitter-share-button"
        data-show-count="false"
      >
        Tweet
      </a>
    );
  }
}
