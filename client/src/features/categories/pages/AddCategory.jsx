import { useState } from "react";
import { Link } from "react-router-dom";
import { createCategory } from "../categoryService";

const AddCategory = () => {
  const [category, setCategory] = useState({ name: "" });

  const handleChange = (e) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCategory(category);
  };

  return (
    <>
      <Link to={"/categories"}>
        <button>List</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <table border={1}>
          <tbody>
            <tr>
              <td>
                <label htmlFor="">Name</label>
              </td>
              <td>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={category.name}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <input type="submit" value="Add" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
};

export default AddCategory;
