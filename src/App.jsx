import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export const Layout = () => {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
