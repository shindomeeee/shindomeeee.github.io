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
    (d => {
      var js,
        fjs = d.getElementsByTagName("script")[0];
      js = d.createElement("script");
      js.src = "https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);
      this.setState({
        loading: false
      });
    })(document);
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
