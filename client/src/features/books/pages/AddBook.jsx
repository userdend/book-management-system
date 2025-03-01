import { Link } from "react-router-dom";

const AddBook = () => {
  return (
    <>
      <Link to={"/books"}>
        <button>List</button>
      </Link>
      <form action="" method="post">
        <div>
          <label htmlFor="">Title:</label>
          <input type="text" placeholder="Title" />
        </div>
        <div>
          <label htmlFor="">ISBN:</label>
          <input type="text" placeholder="ISBN" />
        </div>
        <div>
          <label htmlFor="">Author:</label>
          <input type="text" placeholder="Author" />
        </div>
        <div>
          <label htmlFor="">Publisher:</label>
          <input type="text" placeholder="Publisher" />
        </div>
        <div>
          <label htmlFor="">Category:</label>
          <input type="text" placeholder="Category" />
        </div>
        <div>
          <label htmlFor="">Rack:</label>
          <input type="text" placeholder="Rack" />
        </div>
        <div>
          <label htmlFor="">Copies:</label>
          <input type="text" placeholder="Copies" />
        </div>
        <div>
          <input type="submit" value={"Add"} />
        </div>
      </form>
    </>
  );
};

export default AddBook;
