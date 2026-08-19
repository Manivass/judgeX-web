import axios from "axios";
import { useState } from "react";
import { LuPencil } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { BASE_URL } from "../utils/constant";
import { addStateSuggestion } from "../store/stateSuggestion";
import { addUser } from "../store/user";

const Editpage = ({ onProfileUpdate }) => {
  const userInfo = useSelector((store) => store?.user);
  const stateSuggest = useSelector((store) => store?.stateSuggest);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState(userInfo?.firstName || "");

  const [lastName, setLastName] = useState(userInfo?.lastName || "");

  const [contactEmail, setContactEmail] = useState(
    userInfo?.contactEmail || "",
  );

  const [phoneNumber, setPhoneNumber] = useState(userInfo?.phoneNumber || "");

  const [state, setState] = useState(userInfo?.state || "");

  const [college, setCollege] = useState(userInfo?.college || "");

  const [bio, setBio] = useState(userInfo?.bio || "");

  const [githubURL, setGithubURL] = useState(userInfo?.githubURL);

  const [linkedinURL, setLinkedinURL] = useState(userInfo?.linkedinURL);

  const [instagramURL, setInstagramURL] = useState(userInfo?.instagramURL);

  const [isFocus, setIsFocused] = useState(false);

  const [success, setSuccess] = useState(false);

  const [errInfo, setErr] = useState("");

  const handleStateSuggestion = async (value) => {
    setState(value);

    if (!value.trim()) {
      dispatch(addStateSuggestion([]));
      return;
    }

    try {
      const res = await axios.post(
        BASE_URL + "/state-location-search",
        {
          value,
        },
        {
          withCredentials: true,
        },
      );

      dispatch(addStateSuggestion(res?.data?.searchResult || []));
    } catch (err) {
      setErr(err?.response?.data?.message || "Failed to search state");
    }
  };

  const handleSaveEditProfile = async () => {
    try {
      setErr("");

      const res = await axios.post(
        BASE_URL + "/editProfile",
        {
          firstName,
          lastName,
          contactEmail,
          phoneNumber,
          state,
          college,
          bio,
          githubURL,
          linkedinURL,
          instagramURL,
        },
        {
          withCredentials: true,
        },
      );

      const updatedUser = res?.data?.updatedUser;

      if (!updatedUser) {
        throw new Error("Updated user was not returned by server");
      }


      dispatch(addUser(updatedUser));


      onProfileUpdate?.(updatedUser);

      setFirstName(updatedUser?.firstName || "");

      setLastName(updatedUser?.lastName || "");

      setContactEmail(updatedUser?.contactEmail || "");

      setPhoneNumber(updatedUser?.phoneNumber || "");

      setState(updatedUser?.state || "");

      setCollege(updatedUser?.college || "");

      setBio(updatedUser?.bio || "");

      setGithubURL(updatedUser?.githubURL);

      setLinkedinURL(updatedUser?.linkedinURL);

      setInstagramURL(updatedUser?.instagramURL);
-

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (err) {
      console.log("Update profile error:", err);

      setErr(
        err?.response?.data?.message ||
          "Something went wrong while updating profile",
      );
    }
  };

  if (!userInfo) {
    navigate("/login");
    return null;
  }


  return (
    <div>
      {/* EDIT PROFILE BUTTON */}

      <div className="card bg-transparent shadow-none rounded-box my-8 w-55 md:w-auto grow px-3 py-1">
        <div className="drawer drawer-end h-12 border">
          <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />

          {/* BUTTON */}

          <div className="drawer-content flex justify-end">
            <label
              htmlFor="my-drawer-5"
              className="drawer-button btn text-blue-700 rounded-lg"
            >
              Edit Profile
              <LuPencil className="text-lg" />
            </label>
          </div>

          {/* DRAWER */}

          <div className="drawer-side">
            <label
              htmlFor="my-drawer-5"
              aria-label="close sidebar"
              className="drawer-overlay"
            />

            <div className="menu bg-base-200 min-h-full w-full lg:w-[1000px] px-5">
              {/* HEADER */}

              <div className="my-5">
                <h3 className="text-4xl text-blue-700 font-semibold">
                  Edit Profile
                </h3>

                <p className="text-slate-500">
                  Update your profile to showcase yourself.
                </p>
              </div>

              {/* FORM */}

              <div className="border border-slate-300 rounded-xl p-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* ================================================= */}
                  {/* LEFT */}
                  {/* ================================================= */}

                  <div>
                    <h2 className="text-xl font-bold mb-5">
                      Personal Information
                    </h2>

                    {/* PROFILE IMAGE */}

                    <div className="flex justify-center mb-6">
                      <div className="flex flex-col items-center">
                        <div className="w-32 h-32 rounded-full overflow-hidden bg-base-300">
                          <img
                            src={
                              userInfo?.profilePicture ||
                              "https://cdn-icons-png.flaticon.com/256/9131/9131529.png"
                            }
                            className="w-full h-full object-cover"
                            alt="Profile"
                          />
                        </div>

                        <button
                          type="button"
                          className="text-slate-700 font-semibold hover:text-blue-700 hover:underline mt-3"
                        >
                          Edit Profile Photo
                        </button>
                      </div>
                    </div>

                    {/* NAME */}

                    <div className="grid grid-cols-2 gap-3">
                      <fieldset className="fieldset">
                        <legend className="fieldset-legend">First Name</legend>

                        <input
                          type="text"
                          className="input w-full"
                          placeholder="First Name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </fieldset>

                      <fieldset className="fieldset">
                        <legend className="fieldset-legend">Last Name</legend>

                        <input
                          type="text"
                          className="input w-full"
                          placeholder="Last Name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </fieldset>
                    </div>

                    {/* CONTACT EMAIL */}

                    <fieldset className="fieldset">
                      <legend className="fieldset-legend">Contact Email</legend>

                      <input
                        type="email"
                        className="input w-full"
                        placeholder="Contact Email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                      />
                    </fieldset>

                    {/* PHONE */}

                    <fieldset className="fieldset">
                      <legend className="fieldset-legend">Phone Number</legend>

                      <input
                        type="text"
                        className="input w-full"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </fieldset>

                    {/* STATE */}

                    <fieldset className="fieldset relative">
                      <legend className="fieldset-legend">State</legend>

                      <input
                        type="text"
                        placeholder="Enter State"
                        className="input w-full"
                        value={state}
                        onChange={(e) => handleStateSuggestion(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() =>
                          setTimeout(() => setIsFocused(false), 300)
                        }
                      />

                      {isFocus && stateSuggest?.length > 0 && (
                        <div className="absolute top-full left-0 right-0 bg-white border border-slate-300 rounded-lg shadow-lg z-50">
                          {stateSuggest.map((sugg, index) => (
                            <div
                              key={index}
                              className="px-4 py-2 cursor-pointer hover:bg-slate-200"
                              onClick={() => {
                                setState(sugg);

                                setIsFocused(false);
                              }}
                            >
                              {sugg}
                            </div>
                          ))}
                        </div>
                      )}
                    </fieldset>

                    {/* COLLEGE */}

                    <fieldset className="fieldset">
                      <legend className="fieldset-legend">College</legend>

                      <input
                        type="text"
                        className="input w-full"
                        placeholder="Enter your college"
                        value={college}
                        onChange={(e) => setCollege(e.target.value)}
                      />
                    </fieldset>
                  </div>

                  {/* ================================================= */}
                  {/* RIGHT */}
                  {/* ================================================= */}

                  <div>
                    <h2 className="text-xl font-bold mb-5">About You</h2>

                    {/* BIO */}

                    <fieldset className="fieldset">
                      <legend className="fieldset-legend">Bio</legend>

                      <textarea
                        placeholder="Tell something about yourself"
                        className="textarea textarea-info w-full h-32"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                      />
                    </fieldset>

                    {/* GITHUB */}

                    <fieldset className="fieldset">
                      <legend className="fieldset-legend">GitHub URL</legend>

                      <input
                        type="text"
                        className="input w-full"
                        placeholder="https://github.com/username"
                        value={githubURL}
                        onChange={(e) => setGithubURL(e.target.value)}
                      />
                    </fieldset>

                    {/* LINKEDIN */}

                    <fieldset className="fieldset">
                      <legend className="fieldset-legend">LinkedIn URL</legend>

                      <input
                        type="text"
                        className="input w-full"
                        placeholder="https://linkedin.com/in/username"
                        value={linkedinURL}
                        onChange={(e) => setLinkedinURL(e.target.value)}
                      />
                    </fieldset>

                    {/* INSTAGRAM */}

                    <fieldset className="fieldset">
                      <legend className="fieldset-legend">Instagram URL</legend>

                      <input
                        type="text"
                        className="input w-full"
                        placeholder="https://instagram.com/username"
                        value={instagramURL}
                        onChange={(e) => setInstagramURL(e.target.value)}
                      />
                    </fieldset>

                    {/* ERROR */}

                    {errInfo && (
                      <p className="text-red-600 text-sm mt-5">{errInfo}</p>
                    )}

                    {/* SAVE */}

                    <div className="flex justify-end mt-8">
                      <button
                        type="button"
                        onClick={handleSaveEditProfile}
                        className="px-8 py-2 text-white bg-blue-800 rounded-lg font-semibold hover:bg-blue-700 hover:-translate-y-1 duration-300"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SUCCESS TOAST */}

      {success && (
        <div className="toast toast-top toast-center z-[100]">
          <div className="alert alert-success">
            <span>Profile updated successfully 🎉</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Editpage;
