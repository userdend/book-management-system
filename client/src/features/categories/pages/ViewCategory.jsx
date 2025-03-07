import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../categoryService";

const ViewCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  return (
    <>
      <Link to={"/category/add"}>
        <button>New</button>
      </Link>
      <table border={1}>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>
                <Link>
                  <button>Update</button>
                </Link>
                <Link>
                  <button>Remove</button>
                </Link>
              </td>
            </tr>
          )) || (
            <tr>
              <td colSpan={3}>No categories found.</td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>
              <Link>
                <button>Previous</button>
              </Link>
              {1}
              <Link>
                <button>Next</button>
              </Link>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ViewCategory;
