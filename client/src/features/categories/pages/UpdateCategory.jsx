import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCategory, updateCategory } from "../categoryService";

const UpdateCategory = () => {
  const { id } = useParams();
  const [category, setCategory] = useState({});

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    const data = await getCategory(id);
    setCategory(data);
  };

  const handleChange = (e) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateCategory(category);
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
                <label htmlFor="">ID</label>
              </td>
              <td>
                <input
                  type="text"
                  name="id"
                  id=""
                  value={category.id}
                  placeholder="ID"
                  readOnly={true}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Name</label>
              </td>
              <td>
                <input
                  type="text"
                  name="name"
                  id=""
                  value={category.name}
                  placeholder="Name"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <input type="submit" value="Update" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
};

export default UpdateCategory;
