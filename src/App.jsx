import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CustomProvider } from "rsuite";
import UserLayout from "./layouts/UserLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Products from "./pages/Products/Products";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import Time from "./pages/Time/Time";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/create-products",
          element: <CreateProduct />,
        },
        {
          path: "/time",
          element: <Time />,
        },
      ],
    },
  ]);
  return (
    <CustomProvider theme={"light"}>
      <RouterProvider router={router} />
    </CustomProvider>
  );
}

export default App;
