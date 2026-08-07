import DashboardHeader from "./DashboardHeader.jsx";
import StatsCard from "./StatsCard.jsx";
import QuickActions from "./QuickActions.jsx";
import RecentProblems from "./RecentProblems.jsx";
import RecentSubmission from "./RecentSubmission.jsx";
import PlatformStatus from "./PlatformStatus.jsx";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#050816] p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <DashboardHeader />

        <StatsCard />

        <QuickActions />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <RecentProblems />

          <RecentSubmission />
        </div>

        <PlatformStatus />
      </div>
    </div>
  );
};

export default Dashboard;
