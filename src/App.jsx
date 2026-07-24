import Login from "./components/Login";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./store/store";

import ProblemPage from "./components/Problempage";
import AddProblem from "./components/AddProblem";
import Questions from "./components/Questions";
import ProblemDetails from "./components/ProblemDetails";
import EditProblem from "./components/EditProblem";
import AdminQuestionRequests from "./components/AdminQuestionRequest";
import ViewQuestionRequest from "./components/ViewQuestionRequest";
import UserSubmissions from "./components/UserSubmissions";
import SubmissionDetails from "./components/SubmissionDetails";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="mt-16">
        <Outlet />
      </div>
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
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/problem/:id",
        element: <ProblemPage />,
      },
      {
        path: "/problems",
        element: <Questions />,
      },
      {
        path: "/questions/create",
        element: <AddProblem />,
      },
      {
        path: "/questions/edit/:id",
        element: <EditProblem />,
      },
      {
        path: "/questions",
        element: <ProblemDetails />,
      },
      {
        path: "/admin/questionrequest",
        element: <AdminQuestionRequests />,
      },
      {
        path: "/admin/view/questionrequest/:id",
        element: <ViewQuestionRequest />,
      },
      {
        path: "/submissionDetails/:id",
        element: <SubmissionDetails />,
      },
      {
        path: "/submissions/:id",
        element: <UserSubmissions />,
      },
    ],
  },
]);

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
