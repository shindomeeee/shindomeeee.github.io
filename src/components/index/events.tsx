import * as React from "react";
import { AppState } from "@stores/index";
import { AppActions } from "@containers/index";
import * as style from "@styles/index/events.module.css";

type Props = AppActions &
  AppState & {
    display: boolean;
  };

export const Events = (props: Props) => {
  const eventsElement = props.events.events.data.events.map(event => {
    return (
      <div key={event.id}>
        <div>{event.created_at}</div>
        <div>
          <a href={event.url} target="_blank" rel="noopener">
            {event.title}
          </a>
        </div>
      </div>
    );
  });
  return (
    <section className={props.display ? style.eventsSection : style.disable}>
      <div>{eventsElement}</div>
      <button
        className={
          props.events.events.data.nextPageToken
            ? style.moreReadButton
            : style.moreReadButtonHidden
        }
        onClick={() =>
          props.actions.events.fetchEvents(
            props.events.events.data.nextPageToken
          )
        }
      >
        さらに読む
      </button>
    </section>
  );
};
