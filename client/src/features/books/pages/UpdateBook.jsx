import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBook, updateBook } from "../services/bookService";
import { getCategories } from "../../categories/categoryService";

const UpdateBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchBook();
    fetchCategories();
  }, []);

  const fetchBook = async () => {
    const data = await getBook(id);
    setBook(data);
  };

  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    // Task: Filter user input.
    e.preventDefault();
    await updateBook({ id: 1 }, book);
  };

  return (
    <>
      <Link to={"/books"}>
        <button>List</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <table border={1}>
          <tbody>
            <tr>
              <td>
                <label htmlFor="">Title</label>
              </td>
              <td>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={book.title}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">ISBN</label>
              </td>
              <td>
                <input
                  type="text"
                  name="isbn"
                  placeholder="ISBN"
                  value={book.isbn}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Author</label>
              </td>
              <td>
                <input
                  type="text"
                  name="author"
                  placeholder="Author"
                  value={book.author}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Publisher</label>
              </td>
              <td>
                <input
                  type="text"
                  name="publisher"
                  placeholder="Publisher"
                  value={book.publisher}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Category</label>
              </td>
              <td>
                <select
                  name="category"
                  value={book.category}
                  onChange={handleChange}
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Rack</label>
              </td>
              <td>
                <input
                  type="text"
                  name="rack"
                  placeholder="Rack"
                  value={book.rack}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Copies</label>
              </td>
              <td>
                <input
                  type="text"
                  name="noOfCopy"
                  placeholder="Copies"
                  value={book.noOfCopy}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <input type="submit" value={"Add"} />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
};

export default UpdateBook;
