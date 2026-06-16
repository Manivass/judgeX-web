import { FaGithub, FaLinkedin, FaCheckCircle } from "react-icons/fa";
import { MdOutlineEmail, MdLocationOn } from "react-icons/md";
import { HiMiniTrophy } from "react-icons/hi2";
import Editpage from "./EditPage";
import { useSelector } from "react-redux";
import { map } from "../utils/constant";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const Profile = () => {
  const userDetails = useSelector((store) => store?.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userDetails?.data) {
      navigate("/login");
      return null;
    }
  }, [userDetails]);
  let joinedDate = userDetails?.data?.user?.createdAt;
  joinedDate = joinedDate?.slice(0, 9)?.split("-") || [];
  return (
    <div className="min-h-screen bg-[#050816] p-6">
      {/* Background Glow */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-0 h-96 w-96 bg-blue-500/20 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-96 w-96 bg-purple-500/20 blur-[140px]" />
      </div>
      <div className="drawer drawer-end   w-6/7 p-4  mx-auto">
        <Editpage />
      </div>
      <div className="max-w-7xl mx-auto">
        {/* PROFILE CARD */}

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
          <div className="absolute top-0 right-0 h-40 w-40 bg-blue-500/10 blur-3xl rounded-full"></div>
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            {/* LEFT */}

            <div className="flex flex-col md:flex-row gap-6">
              <div className="avatar">
                <div className="w-32 md:w-35 h-35 rounded-full  ring-offset-4 ring-offset-base-100 shadow-[0_0_40px_rgba(59,130,246,0.4)]">
                  <img src={userDetails?.data?.user?.profilePicture} alt="" />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-3xl font-bold text-white">
                    {userDetails?.data?.user?.firstName}{" "}
                    {userDetails?.data?.user?.lastName}
                  </h1>
                </div>

                <p className="mt-2 text-slate-400">{userDetails?.college}</p>

                <div className="flex items-center gap-2 mt-2 text-slate-400">
                  <MdLocationOn />
                  <h2 className="text-sm font-semibold">TamilNadu,India</h2>
                </div>

                <p className="mt-4 text-slate-300">
                  Full Stack Developer | DSA Enthusiast | Building cool projects
                  every day 🚀
                </p>

                <div className="flex gap-4 mt-5">
                  <a href="#" className="btn btn-sm btn-outline">
                    <FaGithub />
                    GitHub
                  </a>
                  <a href="#" className="btn btn-sm btn-outline">
                    <FaLinkedin />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div className="flex flex-col justify-between">
              <div className="flex justify-end"></div>

              <div className="space-y-3 mt-6 lg:mt-0">
                <div className="flex items-center gap-3 text-slate-300">
                  <MdOutlineEmail />
                  {userDetails?.data?.user?.email}
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  📅 <span className="font-semibold">Joined :</span>
                  {joinedDate[2] +
                    " " +
                    map[joinedDate[1]] +
                    " " +
                    joinedDate[0]}
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  🎯 Role : {userDetails?.data?.user?.role}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 mt-8">
          <div className="group rounded-3xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 p-6 hover:-translate-y-2 transition duration-300">
            <FaCheckCircle className="text-3xl text-emerald-400" />

            <p className="mt-4 text-slate-400">Problems Solved</p>

            <h1 className="text-5xl font-bold text-emerald-400 mt-2">220</h1>

            <p className="text-slate-500 mt-2">Rank #25,543</p>
          </div>
          <div className="group rounded-3xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 p-6 hover:-translate-y-2 transition duration-300">
            <HiMiniTrophy className="text-3xl text-cyan-400" />

            <p className="mt-4 text-slate-400">Problems Attempted</p>

            <h1 className="text-5xl font-bold text-cyan-400 mt-2">275</h1>

            <p className="text-slate-500 mt-2">Rank #33,284</p>
          </div>

          <div className="group rounded-3xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 p-6 hover:-translate-y-2 transition duration-300">
            <HiMiniTrophy className="text-3xl text-purple-400" />

            <p className="mt-4 text-slate-400">Total Submissions</p>

            <h1 className="text-5xl font-bold text-purple-400 mt-2">705</h1>

            <p className="text-slate-500 mt-2">Rank #44,112</p>
          </div>

          <div className="group rounded-3xl bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 p-6 hover:-translate-y-2 transition duration-300">
            <div
              className="radial-progress text-warning"
              style={{ "--value": 73 }}
              role="progressbar"
            >
              73%
            </div>

            <p className="mt-4 text-slate-400">Acceptance Rate</p>

            <p className="text-green-400 mt-2">Good Job 🔥</p>
          </div>
        </div>

        {/* PROGRESS SECTION */}

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Problem Progress
          </h2>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm text-slate-300 mb-2">
                <span>Easy</span>
                <span>150 / 200</span>
              </div>

              <progress
                className="progress progress-success w-full"
                value="75"
                max="100"
              ></progress>
            </div>

            <div>
              <div className="flex justify-between text-sm text-slate-300 mb-2">
                <span>Medium</span>
                <span>60 / 150</span>
              </div>

              <progress
                className="progress progress-warning w-full"
                value="40"
                max="100"
              ></progress>
            </div>

            <div>
              <div className="flex justify-between text-sm text-slate-300 mb-2">
                <span>Hard</span>
                <span>10 / 50</span>
              </div>

              <progress
                className="progress progress-error w-full"
                value="20"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
