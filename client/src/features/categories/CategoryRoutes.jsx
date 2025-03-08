import { Outlet, Route, Routes } from "react-router-dom";
import ViewCategory from "./pages/ViewCategory";
import AddCategory from "./pages/AddCategory";
import UpdateCategory from "./pages/UpdateCategory";

const CategoryRoutes = () => {
  return (
    <>
      <Outlet />
      <Routes>
        <Route path="categories" element={<ViewCategory />} />
        <Route path="category/:id" element={<UpdateCategory />} />
        <Route path="category/add" element={<AddCategory />} />
      </Routes>
    </>
  );
};

export default CategoryRoutes;
