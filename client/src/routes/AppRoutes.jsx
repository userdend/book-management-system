import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BookRoutes from "../features/books/BookRoutes";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/*" element={<BookRoutes />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
