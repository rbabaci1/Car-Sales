import { defaultState } from '../defaultState';
import { BUY_FEATURE } from '../actionsCreators';
import { addFeature } from '../helpers/addFeature';

const reducer = (currentState = defaultState, action) => {
  const { type, payload } = action;

  console.log(currentState);

  switch (type) {
    case BUY_FEATURE:
      return addFeature(currentState, payload);
    default:
      return currentState;
  }
};

export default reducer;
