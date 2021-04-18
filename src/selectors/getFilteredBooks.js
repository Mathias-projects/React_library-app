export const getFilteredBooks = (books, hasCover) => {
  return books.filter(book => {
    if (!hasCover) {
      return true;
    }

    return !!book.cover_i;
  });
};