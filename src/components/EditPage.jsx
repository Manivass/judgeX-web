import { LuPencil } from "react-icons/lu";
const Editpage = () => {
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
              <ul className=" flex  justify-between">
                <li>
                  <h2 className="text-4xl font-semibold text-blue-600 ">
                    Edit Profile
                  </h2>
                  <p className="text-slate-600 text-md py-2">
                    Update your profile and showcase your profile
                  </p>
                </li>
              </ul>
              {/* Sidebar content here */}

              <div className="border  border-slate-300 h-auto py-1  ">
                <div className="grid grid-cols-2">
                  {/* FirstBox */}
                  <div className=" px-3 ">
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
                      <fieldset class="fieldset">
                        <legend class="fieldset-legend">FirstName</legend>
                        <input
                          type="text"
                          class="input"
                          placeholder="Enter the FirstName"
                        />
                      </fieldset>
                      <fieldset class="fieldset">
                        <legend class="fieldset-legend">LastName</legend>
                        <input
                          type="text"
                          class="input"
                          placeholder="Enter the LastName"
                        />
                      </fieldset>
                      <fieldset class="fieldset">
                        <legend class="fieldset-legend">user name</legend>
                        <input
                          type="text"
                          class="input"
                          placeholder="Enter the user name"
                        />
                      </fieldset>
                      <fieldset class="fieldset">
                        <legend class="fieldset-legend">email</legend>
                        <input
                          type="text"
                          class="input"
                          placeholder="Enter the email"
                        />
                      </fieldset>
                      <fieldset class="fieldset">
                        <legend class="fieldset-legend">Contact email</legend>
                        <input
                          type="text"
                          class="input"
                          placeholder="Enter the Contact email"
                        />
                      </fieldset>
                      <fieldset class="fieldset">
                        <legend class="fieldset-legend">Phone Number</legend>
                        <input
                          type="text"
                          class="input"
                          placeholder="Enter the Phone Number"
                        />
                      </fieldset>
                      <fieldset class="fieldset">
                        <legend class="fieldset-legend">City</legend>
                        <input
                          type="text"
                          class="input"
                          placeholder="Enter the City"
                        />
                      </fieldset>
                    </div>
                  </div>
                  {/* Second Box */}
                  <div className=" flex flex-col justify-center  w-full">
                    <div className="grid grid-cols-2 gap-2 ">
                      <fieldset class="fieldset">
                        <legend class="fieldset-legend">State</legend>
                        <input
                          type="text"
                          s
                          class="input"
                          placeholder="Enter the State"
                          className="w-full h-10 p-5 border border-slate-400"
                        />
                      </fieldset>
                      <fieldset class="fieldset">
                        <legend class="fieldset-legend">Country</legend>
                        <input
                          type="text"
                          class="input"
                          placeholder="Enter the Country"
                          className="border border-slate-400 h-10 p-5  "
                        />
                      </fieldset>
                    </div>
                    <fieldset class="fieldset">
                      <legend class="fieldset-legend">Bio</legend>
                      <textarea
                        placeholder="Enter your Bio"
                        className="textarea textarea-info  h-auto  w-full"
                      ></textarea>
                    </fieldset>
                    <fieldset class="fieldset">
                      <legend class="fieldset-legend">Github URL</legend>
                      <input
                        type="text"
                        class="input"
                        placeholder="Enter your github URL"
                        className="w-full h-10 p-5 border border-slate-400"
                      />
                    </fieldset>
                    <fieldset class="fieldset">
                      <legend class="fieldset-legend">Instagram URL</legend>
                      <input
                        type="text"
                        class="input"
                        placeholder="Enter your instagram URL"
                        className="w-full h-10 p-5 border border-slate-400"
                      />
                    </fieldset>

                    <li className="flex flex-col">
                      <div className="flex  justify-end">
                        <div className="px-6 py-2 text-md text-white bg-blue-800 rounded-lg">
                          Save
                        </div>
                      </div>

                      <p className="label text-md text-red-600">
                        *hello Vanakam da mpla
                      </p>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editpage;
