import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createBook } from "../services/bookService";
import { getCategories } from "../../categories/categoryService";

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    isbn: "",
    author: "",
    publisher: "",
    category: "",
    rack: "",
    noOfCopy: "",
    updatedOn: new Date(),
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    // Task: Filter user input.
    e.preventDefault();
    await createBook(formData);
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
                  value={formData.title}
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
                  value={formData.isbn}
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
                  value={formData.author}
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
                  value={formData.publisher}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Category</label>
              </td>
              <td>
                <select name="category" onChange={handleChange}>
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
                  value={formData.rack}
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
                  value={formData.noOfCopy}
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

export default AddBook;
