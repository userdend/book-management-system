import { Routes, Route, Outlet } from "react-router-dom";
import BookList from "./pages/BookList";
import ViewBook from "./pages/ViewBook";
import AddBook from "./pages/AddBook";
import UpdateBook from "./pages/UpdateBook";

const BookRoutes = () => {
  return (
    <>
      <Outlet />
      <Routes>
        <Route path="books" element={<BookList />} />
        <Route path="book/:id" element={<ViewBook />} />
        <Route path="book/add" element={<AddBook />} />
        <Route path="book/update/:id" element={<UpdateBook />} />
      </Routes>
    </>
  );
};

export default BookRoutes;
