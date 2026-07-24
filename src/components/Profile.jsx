import { FaGithub, FaLinkedin, FaCheckCircle } from "react-icons/fa";
import { MdOutlineEmail, MdLocationOn } from "react-icons/md";
import { HiMiniTrophy } from "react-icons/hi2";
import Editpage from "./EditProfilePage";
import { useSelector } from "react-redux";
import { BASE_URL, map } from "../utils/constant";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import { Link } from "react-router";
import axios from "axios";
import QuestionSkeleton from "./QuestionsSkeleton";
const Profile = () => {
  const userDetails = useSelector((store) => store?.user);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const [totalQuestions, setTotalQuestions] = useState({
    totaleasy: 0,
    totalmedium: 0,
    totalhard: 0,
  });

  const [submission, setSubmission] = useState({
    totalSubmissions: 0,
    passedSubmissions: 0,
  });
  const [questionSubmission, setQuestionSubmission] = useState([]);

  const getQuestionSubmission = async () => {
    try {
      const res = await axios.get(BASE_URL + `/recentSubmissions/${id}`, {
        withCredentials: true,
      });
      setQuestionSubmission(res?.data?.submissions);
    } catch (err) {
      console.log(err);
    }
  };

  const getQuestionCount = async () => {
    try {
      const res = await axios.get(BASE_URL + "/questions", {
        withCredentials: true,
      });
      let questions = res?.data?.questionCount;

      setTotalQuestions({
        totaleasy: Number(questions.easyQuestion),
        totalmedium: Number(questions.mediumQuestion),
        totalhard: Number(questions.hardQuestion),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getUserDetails = async () => {
    try {
      const res = await axios.get(BASE_URL + `/getuser/${id}`, {
        withCredentials: true,
      });
      setUser(res?.data?.user);
    } catch (err) {
      console.log(err);
    }
  };
  const getSubmissionCount = async () => {
    try {
      const res = await axios.get(BASE_URL + "/totalSubmissions", {
        withCredentials: true,
      });
      let submission = res?.data?.submission;

      setSubmission({
        totalSubmissions: Number(submission.totalSubmissions),
        passedSubmissions: Number(submission.passedSubmissions),
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserDetails();
    getQuestionSubmission();
  }, [id]);
  useEffect(() => {
    getQuestionCount();
    getSubmissionCount();
  }, []);

  let joinedDate = user?.createdAt;
  joinedDate = joinedDate?.slice(0, 10)?.split("-") || [];

  let solvedeasy = Number(user?.solvedProblems?.easy);
  let solvedmedium = Number(user?.solvedProblems?.medium);
  let solvedhard = Number(user?.solvedProblems?.hard);

  let attemptedEasy = Number(user?.attemptedProblems?.easy);
  let attemptedMedium = Number(user?.attemptedProblems?.medium);
  let attemptedHard = Number(user?.attemptedProblems?.hard);
  if (!user) return <QuestionSkeleton />;
  return (
    <div className="min-h-screen bg-[#050816] p-6">
      {/* Background Glow */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-0 h-96 w-96 bg-blue-500/20 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-96 w-96 bg-purple-500/20 blur-[140px]" />
      </div>
      {userDetails?._id?.toString() === user?._id?.toString() && (
        <div className="drawer drawer-end   w-6/7 p-4  mx-auto">
          <Editpage />
        </div>
      )}
      <div className="max-w-7xl mx-auto">
        {/* PROFILE CARD */}

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
          <div className="absolute top-0 right-0 h-40 w-40 bg-blue-500/10 blur-3xl rounded-full"></div>
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            {/* LEFT */}

            <div className="flex flex-col md:flex-row gap-6">
              <div className="avatar">
                <div className="w-32 md:w-35 h-35 rounded-full  ring-offset-4 ring-offset-base-100 shadow-[0_0_40px_rgba(59,130,246,0.4)]">
                  <img src={user?.profilePicture} alt="" />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-3xl font-bold text-white">
                    {user?.firstName} {user?.lastName}
                  </h1>
                </div>
                <div className=" flex gap-4 text-slate-400">
                  <div className="flex items-center gap-2  ">
                    <RiGraduationCapFill className=" my-auto  mt-3" />
                    <p className="mt-2 text-slate-400 font-semibold">
                      {user?.college}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mt-2 ">
                    <MdLocationOn />
                    <h2 className="text-sm font-semibold">
                      {user?.state},India
                    </h2>
                  </div>
                </div>

                <p className="mt-4 text-slate-300">{user?.bio}</p>

                <div className="flex gap-4 mt-5">
                  <a
                    href={user?.githubURL}
                    className="btn  btn-active btn-outline hover:btn-success hover:duration-500"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                  <a
                    href={user?.linkedinURL}
                    className="btn  btn-active btn-outline hover:btn-success hover:duration-500"
                  >
                    <FaLinkedin />
                    LinkedIn
                  </a>
                  <a
                    href={user?.instagramURL}
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
                  {user?.email}
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
                  🎯 Role : {user?.role}
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
              {user?.solvedProblems?.total}
            </h1>

            <p className="text-slate-500 mt-2">Rank #25,543</p>
          </div>
          <div className="group rounded-3xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 p-6 hover:-translate-y-2 transition duration-300">
            <HiMiniTrophy className="text-3xl text-cyan-400" />

            <p className="mt-4 text-slate-400">Problems Attempted</p>

            <h1 className="text-5xl font-bold text-cyan-400 mt-2">
              {attemptedEasy +
                attemptedMedium +
                attemptedHard +
                solvedeasy +
                solvedmedium +
                solvedhard}
            </h1>

            <p className="text-slate-500 mt-2">Rank #33,284</p>
          </div>

          <div className="group rounded-3xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 p-6 hover:-translate-y-2 transition duration-300">
            <HiMiniTrophy className="text-3xl text-purple-400" />

            <p className="mt-4 text-slate-400">Total Submissions</p>

            <h1 className="text-5xl font-bold text-purple-400 mt-2">
              {user?.totalSubmissions?.total}
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
                <span>
                  {solvedeasy} / {totalQuestions.totaleasy}
                </span>
              </div>

              <progress
                className="progress progress-success w-full"
                value={solvedeasy}
                max={totalQuestions.totaleasy}
              ></progress>
            </div>
            <div>
              <div className="flex justify-between text-sm text-slate-300 mb-2">
                <span>Medium</span>
                <span>
                  {solvedmedium} / {totalQuestions.totalmedium}
                </span>
              </div>

              <progress
                className="progress progress-warning w-full"
                value={solvedmedium}
                max={totalQuestions.totalmedium}
              ></progress>
            </div>

            <div>
              <div className="flex justify-between text-sm text-slate-300 mb-2">
                <span>Hard</span>
                <span>
                  {solvedhard} / {totalQuestions.totalhard}
                </span>
              </div>

              <progress
                className="progress progress-error w-full"
                value={solvedhard}
                max={totalQuestions.totalhard}
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
                      "--value":
                        Math.floor(
                          (solvedeasy + solvedmedium + solvedhard) /
                            (totalQuestions.totaleasy +
                              totalQuestions.totalmedium +
                              totalQuestions.totalhard),
                        ) * 100,
                      "--size": "8rem",
                    }}
                    role="progressbar"
                  >
                    {solvedeasy + solvedhard + solvedmedium}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-success">Easy</span>
                    <span className="text-white">{solvedeasy}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-warning">Medium</span>
                    <span className="text-white"> {solvedmedium}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-error">Hard</span>
                    <span className="text-white">{solvedhard}</span>
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
                      "--value": Math.floor(
                        (submission.passedSubmissions /
                          submission.totalSubmissions) *
                          100,
                      ),
                      "--size": "8rem",
                    }}
                    role="progressbar"
                  >
                    {Math.floor(
                      (submission.passedSubmissions /
                        submission.totalSubmissions) *
                        100,
                    )}
                    %
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-success">Accepted</span>
                    <span className="text-white">
                      {submission.passedSubmissions}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-error">Wrong Answer</span>
                    <span className="text-white">
                      {submission.totalSubmissions -
                        submission.passedSubmissions}
                    </span>
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
                <div className="flex justify-between">
                  <h2 className="card-title text-sm text-gray-400">
                    Recent Submissions
                  </h2>
                  <Link to={`/submissions/${id}`} className="text-blue-600">
                    View All
                  </Link>
                </div>

                <div className="space-y-4 mt-2">
                  {questionSubmission?.length > 0 &&
                    questionSubmission?.map((problem, idx) => (
                      <div key={idx} className="flex justify-between mt-2">
                        <Link
                          className="text-white"
                          to={`/submissionDetails/${problem?._id}`}
                        >
                          {problem?.problemId?.title}
                        </Link>

                        <div
                          className={`badge ${
                            problem?.problemId?.difficulty === "easy"
                              ? "badge-success"
                              : problem?.problemId?.difficulty === "medium"
                                ? "badge-warning"
                                : "badge-error"
                          }`}
                        >
                          {problem?.problemId?.difficulty}
                        </div>
                      </div>
                    ))}
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
