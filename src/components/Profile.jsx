import { FaGithub, FaLinkedin, FaCheckCircle } from "react-icons/fa";
import { MdOutlineEmail, MdLocationOn } from "react-icons/md";
import { HiMiniTrophy } from "react-icons/hi2";
import Editpage from "./EditProfilePage";
import { useSelector } from "react-redux";
import { map } from "../utils/constant";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
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
  joinedDate = joinedDate?.slice(0, 10)?.split("-") || [];

  let easy = userDetails?.data?.user?.solvedProblems?.easy;
  let medium = userDetails?.data?.user?.solvedProblems?.medium;
  let hard = userDetails?.data?.user?.solvedProblems?.hard;

  let submissionEasy = userDetails?.data?.user?.totalSubmissions?.easy;
  let submissionMedium = userDetails?.data?.user?.totalSubmissions?.medium;
  let submissionHard = userDetails?.data?.user?.totalSubmissions?.hard;

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
                <div className=" flex gap-4 text-slate-400">
                  <div className="flex items-center gap-2  ">
                    <RiGraduationCapFill className=" my-auto  mt-3" />
                    <p className="mt-2 text-slate-400 font-semibold">
                      {userDetails?.data?.user?.college}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mt-2 ">
                    <MdLocationOn />
                    <h2 className="text-sm font-semibold">
                      {userDetails?.data?.user?.state},India
                    </h2>
                  </div>
                </div>

                <p className="mt-4 text-slate-300">
                  {userDetails?.data?.user?.bio}
                </p>

                <div className="flex gap-4 mt-5">
                  <a
                    href={userDetails?.data?.user?.githubURL}
                    className="btn  btn-active btn-outline hover:btn-success hover:duration-500"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                  <a
                    href={userDetails?.data?.user?.linkedinURL}
                    className="btn  btn-active btn-outline hover:btn-success hover:duration-500"
                  >
                    <FaLinkedin />
                    LinkedIn
                  </a>
                  <a
                    href={userDetails?.data?.user?.instagramURL}
                    className="btn  btn-active btn-outline hover:btn-success hover:duration-500 "
                  >
                    <FaInstagram />
                    Instagram
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

            <h1 className="text-5xl font-bold text-emerald-400 mt-2">
              {userDetails?.data?.user?.solvedProblems?.total}
            </h1>

            <p className="text-slate-500 mt-2">Rank #25,543</p>
          </div>
          <div className="group rounded-3xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 p-6 hover:-translate-y-2 transition duration-300">
            <HiMiniTrophy className="text-3xl text-cyan-400" />

            <p className="mt-4 text-slate-400">Problems Attempted</p>

            <h1 className="text-5xl font-bold text-cyan-400 mt-2">
              {submissionEasy + submissionMedium + submissionHard}
            </h1>

            <p className="text-slate-500 mt-2">Rank #33,284</p>
          </div>

          <div className="group rounded-3xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 p-6 hover:-translate-y-2 transition duration-300">
            <HiMiniTrophy className="text-3xl text-purple-400" />

            <p className="mt-4 text-slate-400">Total Submissions</p>

            <h1 className="text-5xl font-bold text-purple-400 mt-2">
              {userDetails?.data?.user?.totalSubmissions?.total}
            </h1>

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
                <span>{easy} / 200</span>
              </div>

              <progress
                className="progress progress-success w-full"
                value={easy}
                max="200"
              ></progress>
            </div>
            <div>
              <div className="flex justify-between text-sm text-slate-300 mb-2">
                <span>Medium</span>
                <span>{medium} / 150</span>
              </div>

              <progress
                className="progress progress-warning w-full"
                value={medium}
                max="100"
              ></progress>
            </div>

            <div>
              <div className="flex justify-between text-sm text-slate-300 mb-2">
                <span>Hard</span>
                <span>{hard} / 50</span>
              </div>

              <progress
                className="progress progress-error w-full"
                value={hard}
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Top Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Problems Solved */}
            <div className="card bg-gray-900 shadow-xs shadow-slate-400 border border-slate-700">
              <div className="card-body">
                <h2 className="card-title text-sm text-gray-400">
                  Problems Solved
                </h2>

                <div className="flex justify-center py-4">
                  <div
                    className="radial-progress text-success"
                    style={{
                      "--value": 56,
                      "--size": "8rem",
                    }}
                    role="progressbar"
                  >
                    120
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-success">Easy</span>
                    <span className="text-white">{easy}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-warning">Medium</span>
                    <span className="text-white"> {medium}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-error">Hard</span>
                    <span className="text-white">{hard}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Submission Overview */}
            <div className="card bg-gray-900 shadow-xs shadow-slate-400 border border-slate-700">
              <div className="card-body">
                <h2 className="card-title text-sm text-gray-400">
                  Submission Overview
                </h2>

                <div className="flex justify-center py-4">
                  <div
                    className="radial-progress text-primary"
                    style={{
                      "--value": 71,
                      "--size": "8rem",
                    }}
                    role="progressbar"
                  >
                    705
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-success">Accepted</span>
                    <span className="text-white">500</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-error">Wrong Answer</span>
                    <span className="text-white">150</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-warning">Runtime Error</span>
                    <span className="text-white">40</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Acceptance Rate */}
            <div className="card bg-gray-900 shadow-xs shadow-slate-400 border border-slate-700">
              <div className="card-body">
                <div className="flex justify-between items-center">
                  <h2 className="card-title text-sm text-gray-400">
                    Acceptance Rate
                  </h2>

                  <select className="select select-xs bg-gray-200">
                    <option>6 Months</option>
                  </select>
                </div>

                <div className="flex items-end justify-between h-48 mt-6">
                  {[45, 65, 40, 30, 70, 60].map((h, i) => (
                    <div
                      key={i}
                      className="w-6 bg-primary rounded-t"
                      style={{ height: `${h}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
            {/* Recent Submissions */}
            <div className="card bg-gray-900 shadow-xs shadow-slate-400 border border-slate-700">
              <div className="card-body">
                <h2 className="card-title text-sm text-gray-400">
                  Recent Submissions
                </h2>

                <div className="space-y-4 mt-2">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-white">Two Sum</p>
                      <div className="badge badge-success badge-sm">Easy</div>
                    </div>

                    <span className="text-success">Accepted</span>
                  </div>

                  <div className="flex justify-between">
                    <div>
                      <p className="text-white">Merge Intervals</p>
                      <div className="badge badge-warning badge-sm">Medium</div>
                    </div>

                    <span className="text-success">Accepted</span>
                  </div>

                  <div className="flex justify-between">
                    <div>
                      <p className="text-white">Regular Expression Matching</p>
                      <div className="badge badge-error badge-sm">Hard</div>
                    </div>

                    <span className="text-error">Wrong Answer</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity Calendar */}
            <div className="card bg-gray-900 shadow-xs shadow-slate-400 border border-slate-700">
              <div className="card ">
                <div className="card-body">
                  <h2 className="card-title text-sm text-gray-400">
                    Coding Streak
                  </h2>

                  <div className="stats stats-vertical lg:stats-horizontal shadow bg-gray-200">
                    <div className="stat">
                      <div className="stat-title">Current Streak</div>
                      <div className="stat-value text-success">21</div>
                      <div className="stat-desc">Days</div>
                    </div>

                    <div className="stat">
                      <div className="stat-title">Best Streak</div>
                      <div className="stat-value text-primary">48</div>
                      <div className="stat-desc">Days</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card ">
                <div className="card-body">
                  <h2 className="card-title text-sm text-gray-400">
                    Contest Performance
                  </h2>

                  <div className="stats stats-vertical lg:stats-horizontal shadow bg-gray-200">
                    <div className="stat">
                      <div className="stat-title">Rating</div>
                      <div className="stat-value text-primary">1650</div>
                    </div>

                    <div className="stat">
                      <div className="stat-title">Rank</div>
                      <div className="stat-value text-success">#1243</div>
                    </div>
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

export default Profile;
