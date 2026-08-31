import Login from "./components/Login";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./store/store";

import ProblemPage from "./components/Problempage";
import AddProblem from "./components/AdminDashboard/AddProblem";
import Questions from "./components/Questions";
import ProblemDetails from "./components/ProblemDetails";
import EditProblem from "./components/EditProblem";
import AdminQuestionRequests from "./components/AdminQuestionRequest";
import ViewQuestionRequest from "./components/ViewQuestionRequest";
import UserSubmissions from "./components/UserSubmissions";
import SubmissionDetails from "./components/SubmissionDetails";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Dashboard from "./components/AdminDashboard/Dashboard";
import ManageUsers from "./components/AdminDashboard/ManageUsers";
import ScrollToTop from "./components/ScrollTop";
import Membership from "./components/Membership";
import Requests from "./components/Request";
import Chat from "./components/Chat";

export const Layout = () => {
  return (
    <>
      <ScrollToTop />
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
      {
        path: "/leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/manage-users",
        element: <ManageUsers />,
      },
      {
        path: "/membership",
        element: <Membership />,
      },
      {
        path: "/request",
        element: <Requests />,
      },
      {
        path: "/chat/:id",
        element: <Chat />,
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
