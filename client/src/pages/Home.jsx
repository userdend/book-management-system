import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Link to={"books"}>Books</Link>
      <br />
      <Link to={"categories"}>Categories</Link>
    </>
  );
};

export default Home;
