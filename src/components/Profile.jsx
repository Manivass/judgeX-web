import {
  FaGithub,
  FaLinkedin,
  FaCheckCircle,
  FaInstagram,
} from "react-icons/fa";
import { MdOutlineEmail, MdLocationOn } from "react-icons/md";
import { HiMiniTrophy } from "react-icons/hi2";
import { RiGraduationCapFill } from "react-icons/ri";

import Editpage from "./EditProfilePage";
import Skills from "./Skills";
import ProfileSkeleton from "../skeleton/ProfileSkeleton";

import { useSelector } from "react-redux";
import { BASE_URL, map } from "../utils/constant";
import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {

  const userDetails = useSelector((store) => store?.user);


  const { id } = useParams();


  const [user, setUser] = useState(null);

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
  const getUserDetails = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/getuser/${id}`, {
        withCredentials: true,
      });

      setUser(res?.data?.user);
    } catch (err) {
      console.log("Get user details error:", err);
    }
  };


  const getQuestionSubmission = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/recentSubmissions/${id}`, {
        withCredentials: true,
      });

      setQuestionSubmission(res?.data?.submissions?.slice(0, 5) || []);
    } catch (err) {
      console.log("Recent submissions error:", err);
    }
  };


  const getQuestionCount = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/questions`, {
        withCredentials: true,
      });

      const questions = res?.data?.questionCount || {};

      setTotalQuestions({
        totaleasy: Number(questions.easyQuestion || 0),
        totalmedium: Number(questions.mediumQuestion || 0),
        totalhard: Number(questions.hardQuestion || 0),
      });
    } catch (err) {
      console.log("Question count error:", err);
    }
  };


  const getSubmissionCount = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/totalSubmissions/${id}`, {
        withCredentials: true,
      });

      const submissionData = res?.data?.submission || {};

      setSubmission({
        totalSubmissions: Number(submissionData.totalSubmissions || 0),
        passedSubmissions: Number(submissionData.passedSubmissions || 0),
      });
    } catch (err) {
      console.log("Submission count error:", err);
    }
  };

  useEffect(() => {
    if (!id) return;

    getUserDetails();
    getQuestionSubmission();
    getQuestionCount();
    getSubmissionCount();
  }, [id]);

  // --------------------------------------------------
  // PROFILE UPDATE
  // --------------------------------------------------

  const handleProfileUpdate = (updatedUser) => {
    /*
      EditProfilePage calls this after the
      profile has been successfully updated.

      This immediately changes the Profile
      component without refreshing the page.
    */

    setUser(updatedUser);
  };

  const percentage =
    submission.totalSubmissions > 0
      ? Math.round(
          (submission.passedSubmissions / submission.totalSubmissions) * 100,
        )
      : 0;

  const joinedDate = user?.createdAt?.slice(0, 10)?.split("-") || [];

  const solvedeasy = Number(user?.solvedProblems?.easy || 0);

  const solvedmedium = Number(user?.solvedProblems?.medium || 0);

  const solvedhard = Number(user?.solvedProblems?.hard || 0);

  const attemptedEasy = Number(user?.attemptedProblems?.easy || 0);

  const attemptedMedium = Number(user?.attemptedProblems?.medium || 0);

  const attemptedHard = Number(user?.attemptedProblems?.hard || 0);

  const totalSolved = solvedeasy + solvedmedium + solvedhard;

  const totalAttempted =
    attemptedEasy + attemptedMedium + attemptedHard + totalSolved;

  const totalQuestionsCount =
    totalQuestions.totaleasy +
    totalQuestions.totalmedium +
    totalQuestions.totalhard;

  const solvedPercentage =
    totalQuestionsCount > 0
      ? Math.floor((totalSolved / totalQuestionsCount) * 100)
      : 0;

  // --------------------------------------------------
  // LOADING
  // --------------------------------------------------

  if (!user) {
    return <ProfileSkeleton />;
  }

  // --------------------------------------------------
  // UI
  // --------------------------------------------------

  return (
    <div className="min-h-screen bg-[#050816] p-6">
      {/* BACKGROUND GLOW */}

      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 h-96 w-96 bg-blue-500/10 blur-[140px]" />

        <div className="absolute bottom-0 left-0 h-96 w-96 bg-purple-500/10 blur-[140px]" />
      </div>

      {/* ================================================= */}
      {/* EDIT PROFILE */}
      {/* ================================================= */}

      {userDetails?._id?.toString() === user?._id?.toString() && (
        <div className="w-6/7 p-4 mx-auto">
          <Editpage onProfileUpdate={handleProfileUpdate} />
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* ================================================= */}
        {/* PROFILE CARD */}
        {/* ================================================= */}

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
          <div className="absolute top-0 right-0 h-40 w-40 bg-blue-500/10 blur-3xl rounded-full" />

          <div className="flex flex-col lg:flex-row justify-between gap-8">
            {/* LEFT */}

            <div className="flex flex-col md:flex-row gap-6">
              {/* PROFILE IMAGE */}

              <div className="avatar">
                <div className="w-32 md:w-35 h-35 rounded-full ring-offset-4 ring-offset-base-100 shadow-[0_0_40px_rgba(59,130,246,0.4)] overflow-hidden">
                  <img
                    src={
                      user?.profilePicture ||
                      "https://cdn-icons-png.flaticon.com/256/9131/9131529.png"
                    }
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* USER INFORMATION */}

              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-3xl font-bold text-white">
                    {user?.firstName} {user?.lastName}
                  </h1>
                </div>

                {/* COLLEGE + LOCATION */}

                <div className="flex gap-4 text-slate-400 flex-wrap">
                  <div className="flex items-center gap-2">
                    <RiGraduationCapFill className="mt-3" />

                    <p className="mt-2 text-slate-400 font-semibold">
                      {user?.college}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <MdLocationOn />

                    <h2 className="text-sm font-semibold">
                      {user?.state}, India
                    </h2>
                  </div>
                </div>

                {/* BIO */}

                <p className="mt-4 text-slate-300">{user?.bio}</p>

                {/* SOCIAL LINKS */}

                <div className="flex gap-4 mt-5 flex-wrap">
                  {user?.githubURL && (
                    <a
                      href={user.githubURL}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-active btn-outline hover:btn-success hover:duration-500"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}

                  {user?.linkedinURL && (
                    <a
                      href={user.linkedinURL}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-active btn-outline hover:btn-success hover:duration-500"
                    >
                      <FaLinkedin />
                      LinkedIn
                    </a>
                  )}

                  {user?.instagramURL && (
                    <a
                      href={user.instagramURL}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-active btn-outline hover:btn-success hover:duration-500"
                    >
                      <FaInstagram />
                      Instagram
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div className="flex flex-col justify-between">
              <div className="space-y-3 mt-6 lg:mt-0">
                {/* EMAIL */}

                <div className="flex items-center gap-3 text-slate-300">
                  <MdOutlineEmail />

                  {user?.contactEmail || user?.email}
                </div>

                {/* JOINED DATE */}

                <div className="flex items-center gap-3 text-slate-300">
                  📅
                  <span className="font-semibold">Joined :</span>
                  {joinedDate.length >= 3
                    ? `${joinedDate[2]} ${map[joinedDate[1]]} ${joinedDate[0]}`
                    : "N/A"}
                </div>

                {/* ROLE */}

                <div className="flex items-center gap-3 text-slate-300">
                  🎯 Role : {user?.role}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* STATS */}
        {/* ================================================= */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 mt-8">
          {/* PROBLEMS SOLVED */}

          <div className="group rounded-3xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 p-6 hover:-translate-y-2 transition duration-300">
            <FaCheckCircle className="text-3xl text-emerald-400" />

            <p className="mt-4 text-slate-400">Problems Solved</p>

            <h1 className="text-5xl font-bold text-emerald-400 mt-2">
              {user?.solvedProblems?.total || totalSolved}
            </h1>

            <p className="text-slate-500 mt-2">Rank #25,543</p>
          </div>

          {/* PROBLEMS ATTEMPTED */}

          <div className="group rounded-3xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 p-6 hover:-translate-y-2 transition duration-300">
            <HiMiniTrophy className="text-3xl text-cyan-400" />

            <p className="mt-4 text-slate-400">Problems Attempted</p>

            <h1 className="text-5xl font-bold text-cyan-400 mt-2">
              {totalAttempted}
            </h1>

            <p className="text-slate-500 mt-2">Rank #33,284</p>
          </div>

          {/* TOTAL SUBMISSIONS */}

          <div className="group rounded-3xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 p-6 hover:-translate-y-2 transition duration-300">
            <HiMiniTrophy className="text-3xl text-purple-400" />

            <p className="mt-4 text-slate-400">Total Submissions</p>

            <h1 className="text-5xl font-bold text-purple-400 mt-2">
              {submission.totalSubmissions}
            </h1>

            <p className="text-slate-500 mt-2">Rank #44,112</p>
          </div>

          {/* ACCEPTANCE RATE */}

          <div className="group rounded-3xl bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 p-6 hover:-translate-y-2 transition duration-300">
            <div
              className="radial-progress text-warning"
              style={{
                "--value": percentage,
              }}
              role="progressbar"
            >
              {percentage}%
            </div>

            <p className="mt-4 text-slate-400">Acceptance Rate</p>

            <p className="text-green-400 mt-2">
              {percentage >= 70 ? "Good Job 🔥" : "Keep Practicing 💪"}
            </p>
          </div>
        </div>

        {/* ================================================= */}
        {/* SKILLS */}
        {/* ================================================= */}

        <Skills user={user} />

        {/* ================================================= */}
        {/* PROBLEM PROGRESS */}
        {/* ================================================= */}

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Problem Progress
          </h2>

          <div className="space-y-6">
            {/* EASY */}

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
              />
            </div>

            {/* MEDIUM */}

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
              />
            </div>

            {/* HARD */}

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
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* ANALYTICS */}
      {/* ================================================= */}

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* TOP CARDS */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* PROBLEMS SOLVED */}

            <div className="card bg-gray-900 shadow-xs shadow-slate-400 border border-slate-700">
              <div className="card-body">
                <h2 className="card-title text-sm text-gray-400">
                  Problems Solved
                </h2>

                <div className="flex justify-center py-4">
                  <div
                    className="radial-progress text-success"
                    style={{
                      "--value": solvedPercentage,
                      "--size": "8rem",
                    }}
                    role="progressbar"
                  >
                    {totalSolved}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-success">Easy</span>

                    <span className="text-white">{solvedeasy}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-warning">Medium</span>

                    <span className="text-white">{solvedmedium}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-error">Hard</span>

                    <span className="text-white">{solvedhard}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SUBMISSION OVERVIEW */}

            <div className="card bg-gray-900 shadow-xs shadow-slate-400 border border-slate-700">
              <div className="card-body">
                <h2 className="card-title text-sm text-gray-400">
                  Submission Overview
                </h2>

                <div className="flex justify-center py-4">
                  <div
                    className="radial-progress text-primary"
                    style={{
                      "--value": percentage,
                      "--size": "8rem",
                    }}
                    role="progressbar"
                  >
                    {percentage}%
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
                      {Math.max(
                        0,
                        submission.totalSubmissions -
                          submission.passedSubmissions,
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ACCEPTANCE RATE */}

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
                  {[45, 65, 40, 30, 70, 60].map((height, index) => (
                    <div
                      key={index}
                      className="w-6 bg-primary rounded-t"
                      style={{
                        height: `${height}%`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* BOTTOM CARDS */}
          {/* ================================================= */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
            {/* RECENT SUBMISSIONS */}

            <div className="card bg-gray-900 shadow-xs shadow-slate-400 border border-slate-700">
              <div className="card-body">
                <div className="flex justify-between">
                  <h2 className="card-title text-sm text-gray-400">
                    Recent Submissions
                  </h2>

                  <Link
                    to={`/submissions/${user?._id}`}
                    className="text-blue-600"
                  >
                    View All
                  </Link>
                </div>

                <div className="space-y-4 mt-2">
                  {questionSubmission?.length > 0 ? (
                    questionSubmission.map((problem, index) => (
                      <div
                        key={problem?._id || index}
                        className="flex justify-between mt-2"
                      >
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
                    ))
                  ) : (
                    <p className="text-slate-500">No recent submissions</p>
                  )}
                </div>
              </div>
            </div>

            {/* ACTIVITY */}

            <div className="card bg-gray-900 shadow-xs shadow-slate-400 border border-slate-700">
              {/* CODING STREAK */}

              <div className="card">
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

              {/* CONTEST */}

              <div className="card">
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
