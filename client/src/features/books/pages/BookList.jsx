import { useEffect, useState } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { getBooks } from "../services/bookService";

const BookList = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const currentPage = Number(
    searchParams.get("page") < 1 ? 1 : searchParams.get("page")
  );

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, [location.search]);

  const fetchBooks = async () => {
    const data = await getBooks(currentPage);
    setBooks(data);
  };

  return (
    <>
      <h2>Libraries</h2>
      <Link to={"/book/add"}>
        <button>New</button>
      </Link>
      <table border={1}>
        <thead>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>ISBN</td>
            <td>Author</td>
            <td>Publisher</td>
            <td>Category</td>
            <td>Rack</td>
            <td>Copies</td>
            <td>Last Update</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>
                <a href={"/book/" + book.id}>{book.title}</a>
              </td>
              <td>{book.isbn}</td>
              <td>{book.author}</td>
              <td>{book.publisher}</td>
              <td>{book.category}</td>
              <td>{book.rack}</td>
              <td>{book.noOfCopy}</td>
              <td>{book.updatedOn}</td>
              <td>
                <Link to={"/book/update/" + book.id}>
                  <button>Update</button>
                </Link>
                <button>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={10}>
              <Link
                to={
                  "/books?page=" + (currentPage - 1 === 0 ? 1 : currentPage - 1)
                }
              >
                <button>Previous</button>
              </Link>
              {currentPage}
              <Link to={"/books?page=" + (currentPage + 1)}>
                <button>Next</button>
              </Link>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default BookList;
