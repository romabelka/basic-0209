import { OrderedMap, Record } from "immutable";

export const ReducerRecord = Record({
  entities: new OrderedMap(),
  loading: false,
  loaded: false,
  error: null
});
