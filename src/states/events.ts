import { reducerWithInitialState } from "typescript-fsa-reducers";
import { Event, fetchEvents } from "@thunks/events";

export interface StoreData<T> {
  data: T;
  loading?: boolean;
  error?: any;
}

export interface EventsState {
  events: StoreData<{
    events: Array<Event>;
    nextPageToken: string | null;
  }>;
}

export const initialState: EventsState = {
  events: {
    data: {
      events: [],
      nextPageToken: null
    },
    loading: false,
    error: null
  }
};

export const eventsReducer = reducerWithInitialState(initialState)
  .case(fetchEvents.async.started, state => {
    return {
      ...state,
      events: {
        ...state.events,
        loading: true,
        error: null
      }
    };
  })
  .case(fetchEvents.async.failed, (state, payload) => {
    return {
      ...state,
      events: {
        ...state.events,
        loading: false,
        error: payload.error
      }
    };
  })
  .case(fetchEvents.async.done, (state, payload) => {
    return {
      ...state,
      events: {
        ...state.events,
        data: {
          ...state.events.data,
          ...payload.result,
          events: [...state.events.data.events, ...payload.result.events]
        },
        loading: false,
        error: null
      }
    };
  });
