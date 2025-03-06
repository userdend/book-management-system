import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBook, updateBook } from "../services/bookService";

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

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateBook({ id: 1 }, book);
  };

  return (
    <>
      <Link to={"/books"}>
        <button>List</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={book.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">ISBN:</label>
          <input
            type="text"
            name="isbn"
            placeholder="ISBN"
            value={book.isbn}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Author:</label>
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={book.author}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Publisher:</label>
          <input
            type="text"
            name="publisher"
            placeholder="Publisher"
            value={book.publisher}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Category:</label>
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={book.category}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Rack:</label>
          <input
            type="text"
            name="rack"
            placeholder="Rack"
            value={book.rack}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Copies:</label>
          <input
            type="text"
            name="noOfCopy"
            placeholder="Copies"
            value={book.noOfCopy}
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="submit" value={"Add"} />
        </div>
      </form>
    </>
  );
};

export default UpdateBook;
