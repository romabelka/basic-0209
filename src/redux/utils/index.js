import { OrderedMap, Record } from "immutable";
import { ERROR, START, SUCCESS } from "../constants";

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

export const ReducerRecord = Record({
  entities: new OrderedMap(),
  loading: false,
  error: null
});

export const thunk = (type, api) => async dispatch => {
  dispatch({
    type: type + START
  });
  try {
    const data = await fetch(api);
    const response = await data.json();
    dispatch({
      type: type + SUCCESS,
      payload: response
    });
  } catch (error) {
    dispatch({
      type: type + ERROR,
      payload: error
    });
  }
};
