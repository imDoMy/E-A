
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_REVIEWS_FETCH_SUCCESS':
      return action.payload;
    default:
      return state;
  }
};
