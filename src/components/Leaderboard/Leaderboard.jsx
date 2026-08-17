import Podium from "./Podium";
import LeaderboardTable from "./LeaderboardTable";
import LeaderboardHeader from "./LeaderboardHead";
import CurrentUserCard from "./CurrentUserCard";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/constant";
import ManageUsers from "../AdminDashboard/UserTable";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const getLeaderBoard = async () => {
    try {
      const res = await axios.get(BASE_URL + "/leaderboard", {
        withCredentials: true,
      });
      setLeaderboard(res?.data?.leaderboard);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getLeaderBoard();
  }, []);
  return (
    <div className="min-h-screen bg-[#050816] py-10 px-6">
      <LeaderboardHeader />
      <Podium leaderboard={leaderboard.slice(0, 3)} />
      <CurrentUserCard leaderboard={leaderboard} />
      <SearchBar />
      <ManageUsers />
    </div>
  );
};

export default Leaderboard;
