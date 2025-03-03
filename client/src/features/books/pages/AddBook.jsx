import { useState } from "react";
import { Link } from "react-router-dom";
import { createBook } from "../services/bookService";

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createBook({ id: 1 }, formData);
  };

  const handleClear = () => {
    setFormData({
      title: "Hamlet",
      isbn: "9780743477123",
      author: "William Shakespeare",
      publisher: "Simon & Schuster",
      category: "Drama",
      rack: "C07",
      noOfCopy: "4",
      updatedOn: new Date(),
    });
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
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">ISBN:</label>
          <input
            type="text"
            name="isbn"
            placeholder="ISBN"
            value={formData.isbn}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Author:</label>
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={formData.author}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Publisher:</label>
          <input
            type="text"
            name="publisher"
            placeholder="Publisher"
            value={formData.publisher}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Category:</label>
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Rack:</label>
          <input
            type="text"
            name="rack"
            placeholder="Rack"
            value={formData.rack}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Copies:</label>
          <input
            type="text"
            name="noOfCopy"
            placeholder="Copies"
            value={formData.noOfCopy}
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="submit" value={"Add"} />
          <input type="button" value={"Clear"} onClick={handleClear} />
        </div>
      </form>
    </>
  );
};

export default AddBook;
