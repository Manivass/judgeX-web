import axios from "axios";
import { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { BsQuestionSquare } from "react-icons/bs";
import { BiArea } from "react-icons/bi";
import { BASE_URL } from "../../utils/constant";
import StatsSkeleton from "./StatsSkeleton";
import { useSelector } from "react-redux";

const StatsCard = () => {
  const stats = useSelector((store) => store?.stats);
  return (
    <div className="rounded-3xl border   border-slate-700 bg-[#111827] p-6 shadow-xl w-full ">
      {stats ? (
        <div className="rounded-3xl  grid grid-cols-3 gap-4  bg-[#111827]  shadow-xl w-full ">
          <div className="flex  border border-gray-600 bg-slate-700/40 p-4 items-center justify-between rounded-2xl">
            {/* Left */}
            <div>
              <p className="text-slate-400 text-sm font-medium">Total Users</p>

              <h2 className="text-4xl font-bold text-white mt-3">
                {stats?.totalUser}
              </h2>
            </div>

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-blue-500/10">
              <FaUsers className="text-3xl text-blue-400" />
            </div>
          </div>
          <div className="flex  border border-gray-600 bg-slate-700/40 p-4 items-center justify-between rounded-2xl">
            {/* Left */}
            <div>
              <p className="text-slate-400 text-sm font-medium">Questions</p>

              <h2 className="text-4xl font-bold text-white mt-3">
                {stats?.totalQuestions}
              </h2>
            </div>

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-blue-500/10">
              <BsQuestionSquare className="text-6xl text-blue-300" />
            </div>
          </div>
          <div className="flex  border border-gray-600 bg-slate-700/40 p-4 items-center justify-between rounded-2xl">
            {/* Left */}
            <div>
              <p className="text-slate-400 text-sm font-medium">Submissions</p>

              <h2 className="text-4xl font-bold text-white mt-3">
                {stats?.submissions}
              </h2>
            </div>

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-blue-500/10">
              <BiArea className="text-4xl text-blue-300" />
            </div>
          </div>
        </div>
      ) : (
        <StatsSkeleton />
      )}
    </div>
  );
};

export default StatsCard;
