import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../store/user";

const Login = () => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [signup, setsignUp] = useState(false);
  let [errMsg, setErr] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = async () => {
    try {
      await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, email, password },
        { withCredentials: true },
      );
      navigate("/");
    } catch (err) {
      setErr(err?.response?.data?.message);
    }
  };
  const handleLogin = async () => {
    try {
      await axios.post(
        BASE_URL + "/login",
        { email, password },
        { withCredentials: true },
      );
      navigate("/");
    } catch (err) {
      setErr(err?.response?.data?.message);
    }
  };
  const handleGoogleLogin = async (response) => {
    try {
      const res = await axios.post(
        BASE_URL + "/google-login",
        { token: response.credential, authProvider: "google" },
        { withCredentials: true },
      );

      dispatch(addUser(res?.data?.user));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (!window.google) {
      console.log("Google SDK Not Loaded");
      return;
    }
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id:
          "309200387998-4irl0kdpdb895getlg8d0j5h6um54699.apps.googleusercontent.com",
        callback: handleGoogleLogin,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("googleBtn"),
        { theme: "outline", size: "large" },
      );
    }
  }, []);
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/originals/89/b9/49/89b94950b914f97a4c4831dcd1044dcc.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content ">
          <div className="">
            <h1 className="mb-4 text-5xl font-bold text-center">
              {signup ? "SignUp" : "Login"}
            </h1>
            <div className="card bg-white min-w-[220px] w-[350px] border  shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  {signup && (
                    <div>
                      <label className="label text-black mb-2">
                        First Name
                      </label>
                      <input
                        type="name"
                        className="input bg-gray-500/30 text-black"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  )}
                  {signup && (
                    <div>
                      <label className="label text-gray-900 mb-2">
                        Last Name
                      </label>
                      <input
                        type="name"
                        className="input bg-gray-500/30 text-black"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  )}
                  <label className="label text-black">email</label>
                  <input
                    type="email"
                    className="input bg-gray-500/30 text-black"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="label text-black">Password</label>
                  <input
                    type="password"
                    className="input bg-gray-500/30 text-black"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div>
                    <p className="link link-hover text-red-900">{errMsg}</p>
                  </div>
                  <button
                    className="btn btn-primary mt-4"
                    onClick={signup ? handleSignUp : handleLogin}
                  >
                    {signup ? "SignUp" : "Login"}
                  </button>
                  <p className="text-black">
                    Already have Account ?{" "}
                    <span
                      className="underline cursor-pointer hover:text-blue-700"
                      onClick={() => {
                        setsignUp(!signup);
                        setFirstName("");
                        setLastName("");
                        setEmail("");
                        setPassword("");
                      }}
                    >
                      {signup ? "Login" : "SignUp"}
                    </span>
                  </p>
                </fieldset>

                <h2 className="text-lg font-bold text-center text-blue-800">
                  OR
                </h2>

                <div
                  id="googleBtn"
                  className="w-full border border-gray-900"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
