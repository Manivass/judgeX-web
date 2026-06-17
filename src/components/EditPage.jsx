import axios from "axios";
import { useState } from "react";
import { LuPencil } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constant";
import { addStateSuggestion } from "../store/stateSuggestion";
import { addUser } from "../store/user";
const Editpage = () => {
  const userInfo = useSelector((store) => store?.user);
  const stateSuggest = useSelector((store) => store?.stateSuggest);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (!userInfo) {
    navigate("/login");
  }
  let [firstName, setFirstName] = useState(userInfo?.data?.user?.firstName);
  let [lastName, setLastName] = useState(userInfo?.data?.user?.lastName);
  let [contactEmail, setContactEmail] = useState(
    userInfo?.data?.user?.contactEmail,
  );
  let [isFocus, setIsFocused] = useState(false);
  let [state, setState] = useState(userInfo?.data?.user?.state);
  let [bio, setBio] = useState(userInfo?.data?.user?.bio);
  let [githubURL, setGithubURL] = useState(userInfo?.data?.user?.githubURL);
  let [instagramURL, setinstagramURL] = useState(
    userInfo?.data?.user?.instagramURL,
  );
  let [linkedinURL, setLinkedinURL] = useState(
    userInfo?.data?.user?.linkedinURL,
  );
  let [phoneNumber, setPhoneNumber] = useState(
    userInfo?.data?.user?.phoneNumber,
  );

  let [college, setCollege] = useState("");
  let [success, setSuccess] = useState("");
  let [errInfo, setErr] = useState("");

  const handleStateSuggestion = async (e) => {
    const value = e;
    setState(value || "");
    try {
      const res = await axios.post(
        BASE_URL + "/state-location-search",
        { value },
        { withCredentials: true },
      );
      dispatch(addStateSuggestion(res.data.searchResult));
    } catch (err) {
      setErr(err?.response?.data?.message);
    }
  };

  const handleSaveEditProfile = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/editProfile",
        {
          firstName,
          lastName,
          contactEmail,
          state,
          bio,
          githubURL,
          instagramURL,
          linkedinURL,
          phoneNumber,
        },
        { withCredentials: true },
      );
      const user = res?.data?.message;
      dispatch(addUser({ user }));
      setErr("");
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (err) {
      setErr(err?.response?.data?.message);
    }
  };

  return (
    <div>
      <div className="card   rounded-box   w-55 md:w-auto  grow  px-3 py-1 ">
        <div className="drawer drawer-end h-12  ">
          <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content  flex justify-end">
            <label
              htmlFor="my-drawer-5"
              className="drawer-button btn text-blue-700 rounded-lg"
            >
              Edit Profile <LuPencil className="text-lg" />
            </label>
          </div>
          <div className="drawer-side  ">
            <label
              htmlFor="my-drawer-5"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="menu bg-base-200 min-h-full  w-260 px-5 ">
              <div className="my-3 flex flex-col gap-2">
                <h3 className="text-4xl text-blue-700 font-semibold">
                  Edit profile
                </h3>
                <p>update your profile to showcase</p>
              </div>
              {/* Sidebar content here */}
              <div className="border border-slate-300 h-auto p-3  ">
                <div className="grid grid-cols-2 gap-2">
                  {/* FirstBox */}
                  <div className=" px-0 ">
                    <h2 className="text-md font-bold">Profile Picture</h2>

                    <div className="indicator h-auto w-full  mx-auto   my-4">
                      <div className="bg-base-300 grid  h-35 w-35 aspect-square rounded-full mx-auto ">
                        <img
                          src="https://cdn-icons-png.flaticon.com/256/9131/9131529.png"
                          className=""
                        />
                        <h2 className="text-slate-700 font-semibold hover:text-blue-700 hover:underline cursor-pointer text-center">
                          Edit Profile photo
                        </h2>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-3 ">
                      <fieldset className="fieldset">
                        <legend className="fieldset-legend">FirstName</legend>
                        <input
                          type="text"
                          className="input"
                          placeholder="Enter the FirstName"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </fieldset>
                      <fieldset className="fieldset">
                        <legend className="fieldset-legend">LastName</legend>
                        <input
                          type="text"
                          className="input"
                          placeholder="Enter the LastName"
                          value={lastName || ""}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </fieldset>
                      <fieldset className="fieldset">
                        <legend className="fieldset-legend">
                          Contact email
                        </legend>
                        <input
                          type="text"
                          className="input"
                          placeholder="Enter the Contact email"
                          value={contactEmail || ""}
                          onChange={(e) => setContactEmail(e.target.value)}
                        />
                      </fieldset>
                      <fieldset className="fieldset">
                        <legend className="fieldset-legend">
                          Phone Number
                        </legend>
                        <input
                          type="text"
                          className="input"
                          placeholder="Enter the Phone Number"
                          value={phoneNumber || ""}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </fieldset>
                      <fieldset className="fieldset">
                        <legend className="fieldset-legend">State</legend>
                        <input
                          type="text"
                          placeholder="Enter the State"
                          className="input w-full h-10 p-5 border border-slate-400"
                          value={state || ""}
                          onChange={(e) =>
                            handleStateSuggestion(e.target.value)
                          }
                          onFocus={() => setIsFocused(true)}
                          onBlur={() =>
                            setTimeout(() => setIsFocused(false), 500)
                          }
                        />
                        <div className="bg-white h-auto">
                          {isFocus &&
                            stateSuggest?.map((sugg) => {
                              return (
                                <div
                                  className="h-7 font-semibold border border-slate-400 my-auto cursor-pointer px-3 pt-2 hover:bg-gray-400"
                                  onClick={() => setState(sugg)}
                                >
                                  <h2 className="text-md">{sugg}</h2>
                                </div>
                              );
                            })}
                        </div>
                      </fieldset>
                      <fieldset className="fieldset">
                        <legend className="fieldset-legend">Country</legend>
                        <input
                          type="text"
                          placeholder="Enter the Country"
                          className="input border border-slate-400 h-10 p-5  "
                        />
                      </fieldset>
                    </div>
                  </div>
                  {/* Second Box */}
                  <div className=" flex flex-col justify-center  w-full">
                    <div className="grid grid-cols-2 gap-2 "></div>
                    <fieldset className="fieldset">
                      <legend className="fieldset-legend">Bio</legend>
                      <textarea
                        placeholder="Enter your Bio"
                        className="textarea textarea-info  h-auto  w-full"
                        value={bio || ""}
                        onChange={(e) => setBio(e.target.value)}
                      ></textarea>
                    </fieldset>
                    <fieldset className="fieldset">
                      <legend className="fieldset-legend">college</legend>
                      <input
                        type="text"
                        placeholder="Enter your github URL"
                        className="input w-full h-10 p-5 border border-slate-400"
                        value={college || ""}
                        onChange={(e) => setCollege(e.target.value)}
                      />
                    </fieldset>
                    <fieldset className="fieldset">
                      <legend className="fieldset-legend">Github URL</legend>
                      <input
                        type="text"
                        placeholder="Enter your github URL"
                        className="input w-full h-10 p-5 border border-slate-400"
                        value={githubURL || ""}
                        onChange={(e) => setGithubURL(e.target.value)}
                      />
                    </fieldset>
                    <fieldset className="fieldset">
                      <legend className="fieldset-legend">linkedin URL</legend>
                      <input
                        type="text"
                        placeholder="Enter your linkedin URL"
                        className="input w-full h-10 p-5 border border-slate-400"
                        value={linkedinURL || ""}
                        onChange={(e) => setLinkedinURL(e.target.value)}
                      />
                    </fieldset>
                    <fieldset className="fieldset">
                      <legend className="fieldset-legend">Instagram URL</legend>
                      <input
                        type="text"
                        placeholder="Enter your instagram URL"
                        className="input w-full h-10 p-5 border border-slate-400"
                        value={instagramURL || ""}
                        onChange={(e) => setinstagramURL(e.target.value)}
                      />
                    </fieldset>

                    <div className="flex flex-col">
                      <div className="flex  justify-end p-4">
                        <button
                          className="px-7 py-1 cursor-pointer font-semibold text-lg text-white bg-blue-800 rounded-lg border border-blue-950 hover:-translate-y-1 duration-500 "
                          onClick={handleSaveEditProfile}
                        >
                          Save
                        </button>
                      </div>
                      <p className=" text-md text-red-600 text-end  mb-2">
                        {errInfo}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {success && (
        <div className="toast toast-top toast-center z-50">
          <div className="alert alert-success">
            <span>profile updated successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Editpage;
