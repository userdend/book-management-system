import { Routes, Route, Outlet } from "react-router-dom";
import BookList from "./pages/BookList";
import AddBook from "./pages/AddBook";

const BookRoutes = () => {
  return (
    <>
      <Outlet />
      <Routes>
        <Route index element={<BookList />} />
        <Route path="add" element={<AddBook />} />
      </Routes>
    </>
  );
};

export default BookRoutes;
