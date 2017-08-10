import update from 'immutability-helper';

const initialState = {
  measures: [],
  dimensions: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'data.measures.set': {
      return update(state, { measures: { $set: action.measures } });
    }
    case 'data.dimensions.set': {
      return update(state, { dimensions: { $set: action.dimensions } });
    }
    default:
      return state;
  }
};
