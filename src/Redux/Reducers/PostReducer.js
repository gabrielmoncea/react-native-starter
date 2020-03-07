export default function reducer(state = { text: '' }, action) {
  switch (action.type) {
    case 'CREATE_POST':
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
}

export const createPost = text => ({
  type: 'CREATE_POST',
  payload: text,
});
