import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBook } from "../services/bookService";

const ViewBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    const data = await getBook(id);
    setBook(data);
  };

  return (
    <>
      <Link to={"/books"}>
        <button>List</button>
      </Link>
      <table border={1}>
        <tbody>
          <tr>
            <td>ID</td>
            <td>{book.id}</td>
          </tr>
          <tr>
            <td>Title</td>
            <td>{book.title}</td>
          </tr>
          <tr>
            <td>ISBN</td>
            <td>{book.isbn}</td>
          </tr>
          <tr>
            <td>Author</td>
            <td>{book.author}</td>
          </tr>
          <tr>
            <td>Publisher</td>
            <td>{book.publisher}</td>
          </tr>
          <tr>
            <td>Category</td>
            <td>{book.category}</td>
          </tr>
          <tr>
            <td>Rack</td>
            <td>{book.rack}</td>
          </tr>
          <tr>
            <td>Copies</td>
            <td>{book.noOfCopy}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ViewBook;
