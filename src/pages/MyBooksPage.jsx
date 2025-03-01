import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyBooks } from "../redux/actions/bookActions";
import MyBookCard from "../components/MyBookCard";

const MyBooksPage = () => {
  const dispatch = useDispatch();
  const { myBooks, loading, error } = useSelector((state) => state.books);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      dispatch(fetchMyBooks(user.uid));
    }
  }, [dispatch, user]);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="my-books-container">
      <h2>My Books</h2>
      {myBooks.length === 0 ? (
        <p>No books added yet.</p>
      ) : (
        <div className="book-list">
          {myBooks.map((book) => (
            <MyBookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBooksPage;
