import { defaultState } from '../defaultState';
import { BUY_FEATURE, REMOVE_FEATURE } from '../actionsCreators';
import { addFeature } from '../helpers';

const reducer = (currentState = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BUY_FEATURE:
      return addFeature(currentState, payload);
    case REMOVE_FEATURE:
      return;
    default:
      return currentState;
  }
};

export default reducer;
