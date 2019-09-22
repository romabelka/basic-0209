import { OrderedMap, Record } from "immutable";

export const arrToMap = arr =>
  arr.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});

export const arrToImmutableMap = (arr, DataRecord) =>
  new OrderedMap(
    arr.reduce((acc, item) => {
      acc[item.id] = DataRecord ? new DataRecord(item) : item;
      return acc;
    }, {})
  );

export const createReducerRecord = items =>
  Record({
    entities: items,
    loaded: false,
    loading: false,
    error: ""
  })();
