import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBook } from "../services/bookService";

const UpdateBook = () => {
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
      <form action="" method="post">
        <div>
          <label htmlFor="">Title:</label>
          <input type="text" placeholder="Title" value={book.title} />
        </div>
        <div>
          <label htmlFor="">ISBN:</label>
          <input type="text" placeholder="ISBN" value={book.isbn} />
        </div>
        <div>
          <label htmlFor="">Author:</label>
          <input type="text" placeholder="Author" value={book.author} />
        </div>
        <div>
          <label htmlFor="">Publisher:</label>
          <input type="text" placeholder="Publisher" value={book.publisher} />
        </div>
        <div>
          <label htmlFor="">Category:</label>
          <input type="text" placeholder="Category" value={book.category} />
        </div>
        <div>
          <label htmlFor="">Rack:</label>
          <input type="text" placeholder="Rack" value={book.rack} />
        </div>
        <div>
          <label htmlFor="">Copies:</label>
          <input type="text" placeholder="Copies" value={book.noOfCopy} />
        </div>
        <div>
          <input type="submit" value={"Add"} />
        </div>
      </form>
    </>
  );
};

export default UpdateBook;
