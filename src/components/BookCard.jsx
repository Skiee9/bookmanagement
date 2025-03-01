import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBookToUserList } from "../redux/actions/bookActions";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleAddToMyBooks = () => {
    if (!user) {
      alert("Please log in to add books to your list.");
      return;
    }
    dispatch(addBookToUserList(book));
  };

  return (
    <div className="book-card">
      <img src={book.coverImage} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <button onClick={handleAddToMyBooks}>Want to Read</button>
    </div>
  );
};

export default BookCard;
