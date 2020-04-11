import { defaultState } from '../defaultState';
import { BUY_FEATURE, REMOVE_FEATURE } from '../actionsCreators';
import { buyFeature, removeFeature } from '../helpers';

const reducer = (currentState = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BUY_FEATURE:
      return buyFeature(currentState, payload);
    case REMOVE_FEATURE:
      return removeFeature(currentState, payload);
    default:
      return currentState;
  }
};

export default reducer;
