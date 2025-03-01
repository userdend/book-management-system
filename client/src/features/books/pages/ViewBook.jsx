import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBook } from "../services/bookService";

const ViewBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    const data = await getBook(id);
    setBook(data);
  };

  return (
    <>
      <Link to={"/books"}>
        <button>List</button>
      </Link>
      <ul>
        <li>{"ID: " + book.id}</li>
        <li>{"Title: " + book.title}</li>
        <li>{"ISBN: " + book.isbn}</li>
        <li>{"Author: " + book.author}</li>
        <li>{"Publisher: " + book.publisher}</li>
        <li>{"Category: " + book.category}</li>
        <li>{"Rack: " + book.rack}</li>
        <li>{"Copies: " + book.noOfCopy}</li>
      </ul>
    </>
  );
};

export default ViewBook;
