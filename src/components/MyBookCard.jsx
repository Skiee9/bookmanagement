import React from "react";
import { useDispatch } from "react-redux";
import { updateBookStatus, updateBookRating } from "../redux/actions/bookActions";

const MyBookCard = ({ book }) => {
  const dispatch = useDispatch();

  const handleStatusChange = (e) => {
    dispatch(updateBookStatus(book.id, e.target.value));
  };

  const handleRatingChange = (e) => {
    dispatch(updateBookRating(book.id, parseInt(e.target.value)));
  };
// books card
  return (
    <div className="my-book-card">
      <img src={book.coverImage} alt={book.title} className="book-cover" />
      <div className="book-info">
        <h3>{book.title}</h3>
        <p>Author: {book.author}</p>

        <label>Status:</label>
        <select value={book.status} onChange={handleStatusChange}>
          <option value="Want to Read">Want to Read</option>
          <option value="Currently Reading">Currently Reading</option>
          <option value="Read">Read</option>
        </select>

        <label>Rating:</label>
        <select value={book.rating || 0} onChange={handleRatingChange}>
          <option value="0">No Rating</option>
          {[1, 2, 3, 4, 5].map((star) => (
            <option key={star} value={star}>
              {star} ★
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MyBookCard;
