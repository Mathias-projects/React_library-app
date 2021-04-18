import { React, useState, useEffect } from 'react';
import olApi from '../../olApi';
import BookDetail from './BookDetail';

const BookDetailContainer = (props) => {
  const [book, setBook] = useState({});
  const [author, setAuthor] = useState({});
  const [cover, setCover] = useState({});

  useEffect(() => {
    console.log(props.match.params);
    olApi.get(`${props.match.params.key}/${props.match.params.id}.json`)
      .then((response) => {
        setBook(response.data);
        var authorKey = book.authors && book.authors[0].author.key;
        console.log(authorKey);
          if(authorKey != undefined) {
            setCover(book.covers[0]);
            console.log("aaa");
            olApi.get(authorKey + ".json")
            .then((response) => {
              setAuthor(response.data);
            });
          }
      });

      return () => {
        console.log("Papa!");
      }
  }, [props.match.params.key, props.match.params.id]);

  return <BookDetail book={book} author={author} cover={cover} />;
}
// author_info={author}
export default BookDetailContainer;