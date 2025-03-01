import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/actions/bookActions";
import BookCard from "./BookCard";

const BookList = () => {
  const dispatch = useDispatch();
  const { books, loading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (loading) {
    return <p>Loading books...</p>;
  }

  if (error) {
    return <p>Error loading books: {error}</p>;
  }

  return (
    <div className="book-list">
      {books.length === 0 ? (
        <p>No books available.</p>
      ) : (
        books.map((book) => <BookCard key={book.id} book={book} />)
      )}
    </div>
  );
};

export default BookList;
