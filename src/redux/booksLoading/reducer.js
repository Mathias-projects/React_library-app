export const booksLoading = (state = false, action) => {
  switch(action.type) {
    case 'IS_LOADING':
      return action.value;
    default:
      return state;
  }
}