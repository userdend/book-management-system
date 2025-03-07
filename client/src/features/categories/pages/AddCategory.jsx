import { useState } from "react";
import { Link } from "react-router-dom";

const AddCategory = () => {
  const [category, setCategory] = useState({});

  return (
    <>
      <Link to={"/categories"}>
        <button>List</button>
      </Link>
      <form>
        <table border={1}>
          <tbody>
            <tr>
              <td>
                <label htmlFor="">ID</label>
              </td>
              <td>
                <input
                  type="number"
                  name="id"
                  placeholder="ID"
                  value={category.id}
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
                  placeholder="Name"
                  value={category.name}
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
