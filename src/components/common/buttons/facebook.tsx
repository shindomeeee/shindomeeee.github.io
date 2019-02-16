import * as React from "react";

type Props = {};
type State = {
  loading: boolean;
};

export class Facebook extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    ((d, id) => {
      var js,
        fjs = d.getElementsByTagName("script")[0];
      if (d.getElementById(id)) return;
      js = d.createElement("script");
      js.id = id;
      js.src = `https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v3.1&appId=${
        process.env.FACEBOOK_APP_ID
      }&autoLogAppEvents=1`;
      fjs.parentNode.insertBefore(js, fjs);
      this.setState({
        loading: false
      });
    })(document, "facebook-jssdk");
  }

  render() {
    return (
      <div
        className="fb-share-button"
        data-href={location.href}
        data-layout="button_count"
        data-size="small"
        data-mobile-iframe="true"
      >
        <a
          target="_blank"
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
          className="fb-xfbml-parse-ignore"
        >
          {this.state.loading ? "" : "シェア"}
        </a>
      </div>
    );
  }
}
