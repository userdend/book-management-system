import { useEffect, useState } from "react";
import { getBooks } from "../services/bookService";
import { useSearchParams } from "react-router-dom";

const BookList = () => {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page") || 1);

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  return (
    <>
      <h2>Libraries</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </>
  );
};

export default BookList;
