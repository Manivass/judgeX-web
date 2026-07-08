import { MdOutlineMenu } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { PiCodesandboxLogoBold } from "react-icons/pi";
import { TbUserSquareRounded } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { removeActiveTab } from "../store/activetab";
import { removeQuestion } from "../store/question";
import { removeStats } from "../store/stats";
import { removeStateSuggestion } from "../store/stateSuggestion";
import { clearSubmission } from "../store/submission";
import { removeTestcase } from "../store/testcase";
import { removeUser } from "../store/user";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-none">
        <div className="drawer">
          <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer-1" className="btn drawer-button">
              <MdOutlineMenu className="text-3xl" />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-1"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 min-h-full w-60 p-4">
              <h2 className="text-xl  font-bold text-blue-950 mb-4 flex gap-1 justify-center">
                <PiCodesandboxLogoBold className="pt-1 text-3xl" /> JudgeX
              </h2>
              {/* Sidebar content here */}
              <li>
                <Link to="/" className="text-lg font-semibold">
                  <FaHome className="text-2xl my-auto" /> Home
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-lg font-semibold">
                  <TbUserSquareRounded className="text-2xl" /> Profile
                </Link>
              </li>
              <li>
                <Link to="/questions" className="text-lg font-semibold">
                  <TbUserSquareRounded className="text-2xl" /> Add Problem
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-blue-900">
          <PiCodesandboxLogoBold className="pt-1 text-3xl" /> JudgeX
        </a>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
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
