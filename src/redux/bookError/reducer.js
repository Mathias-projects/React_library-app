export const booksError = (state = false, action) => {
  switch(action.type) {
    case 'BOOKS_ERROR':
      return action.value;
    default:
      return state;
  }
}