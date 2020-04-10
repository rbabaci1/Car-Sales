import { defaultState } from '../defaultState';

const reducer = (initialState = defaultState, action) => {
  console.log(initialState);
  return initialState;
};

export default reducer;
