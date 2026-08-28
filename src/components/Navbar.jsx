import { MdOutlineMenu } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { PiCodesandboxLogoBold } from "react-icons/pi";
import { TbUserSquareRounded } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { removeActiveTab } from "../store/activetab";
import { removeQuestion } from "../store/question";
import { removeStats } from "../store/stats";
import { removeStateSuggestion } from "../store/stateSuggestion";
import { clearSubmission } from "../store/submission";
import { removeTestcase } from "../store/testcase";
import { removeUser } from "../store/user";
import TextType from "./TextType";
import { MdLeaderboard } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { LuClipboardList } from "react-icons/lu";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store?.user);
  const closeDrawer = () => {
    document.getElementById("my-drawer-1").checked = false;
  };
  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeActiveTab());
      dispatch(removeQuestion());
      dispatch(removeStats());
      dispatch(removeStateSuggestion());
      dispatch(clearSubmission());
      dispatch(removeTestcase());
      dispatch(removeUser());
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 bg-[#0B1120]/90 border-b border-slate-700 mb-4">
      <div className="flex-none">
        <div className="drawer">
          <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-1"
              className="btn drawer-button bg-gray-800 border-gray-700 text-white"
            >
              <MdOutlineMenu className="text-3xl" />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-1"
              aria-label="close sidebar"
              className="drawer-overlay "
            ></label>
            <ul className="menu bg-gray-900 text-white min-h-full w-64 p-4">
              <h2 className="text-xl  font-bold text-white mb-4 flex gap-1 justify-center">
                <PiCodesandboxLogoBold className="pt-1 text-3xl" /> JudgeX
              </h2>
              {/* Sidebar content here */}
              <li>
                <Link
                  to="/"
                  onClick={closeDrawer}
                  className="text-lg font-semibold"
                >
                  <FaHome className="text-2xl my-auto" /> Home
                </Link>
              </li>
              <li>
                <Link
                  to={`/profile/${user?._id}`}
                  onClick={closeDrawer}
                  className="text-lg font-semibold"
                >
                  <TbUserSquareRounded className="text-2xl" /> Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/leaderboard"
                  onClick={closeDrawer}
                  className="text-lg font-semibold"
                >
                  <MdLeaderboard className="text-2xl" /> Leaderboard
                </Link>
              </li>
              {user?.role == "admin" && (
                <li>
                  <Link
                    to="/admin/dashboard"
                    onClick={closeDrawer}
                    className="text-lg font-semibold"
                  >
                    <TbUserSquareRounded className="text-2xl" /> Dashboard
                  </Link>
                </li>
              )}
              <li>
                <Link
                  to="/problems"
                  onClick={closeDrawer}
                  className="text-lg font-semibold"
                >
                  <LuClipboardList className="text-2xl" />{" "}
                  {user?.role == "admin" ? "Edit" : "View"} Problem
                </Link>
              </li>
              {user?.role == "user" && (
                <li>
                  <Link
                    to="/questions/create"
                    onClick={closeDrawer}
                    className="text-lg font-semibold"
                  >
                    <FaPlus className="text-2xl" /> Contribute Problem
                  </Link>
                </li>
              )}
              {user?.role == "admin" && (
                <li>
                  <Link
                    to="/admin/questionRequest"
                    onClick={closeDrawer}
                    className="text-lg font-semibold"
                  >
                    <TbUserSquareRounded className="text-2xl" />
                    Problem Request
                  </Link>
                </li>
              )}
              <li>
                <Link
                  to="/membership"
                  onClick={closeDrawer}
                  className="text-lg font-semibold"
                >
                  <FaPlus className="text-2xl" /> Membership
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-1 pl-4 ">
        <Link to="/" className="flex gap-2 text-xl  text-white">
          <PiCodesandboxLogoBold className="pt-1 text-3xl  flex items-center -translate-y-0.5" />{" "}
          JudgeX
        </Link>
      </div>
      <div className="flex gap-2">
        <div className=" flex items-center">
          <TextType
            text={
              "welcome" +
              " " +
              user?.firstName +
              " " +
              (user?.lastName == undefined ? "" : user?.lastName) +
              "💫"
            }
            typingSpeed={90}
            deletingSpeed={80}
            pauseDuration={1800}
            className="text-lg font-bold text-white leading-tight"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={user?.profilePicture}
              />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
