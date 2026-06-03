import DashboardHeader from '../../components/DashboardHeader';
import Sidebar from '../../components/Sidebar';
import { useDashboardData } from '../../hooks/useDashboardData';
import CommentTable from './CommentTable';
import StatCard from './StatCard';
import VideoTable from './VideoTable';

export default function CreatorDashboard() {
  const { stats, videos, comments, isLoading, error } = useDashboardData();

  if (isLoading)
    return <div className="p-10 text-center text-xl">Loading Dashboard...</div>;
  if (error) return <div className="text-red-500 p-10">{error}</div>;

  return (
    <div className="flex bg-[#0d1014] text-[#3994BC] min-h-screen">
      {/* Sidebar Navigation */}
      <Sidebar />

      <div className="flex-1 p-8">
        {/* Header */}
        <DashboardHeader />

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {stats.map(({ label, value }) => (
            <StatCard key={label} label={label} value={value} />
          ))}
        </div>

        {/* Data Table & Comments - All mashed together */}
        <div className="grid grid-cols-3 gap-8">
          <VideoTable videos={videos} />
          <CommentTable comments={comments} />
        </div>
      </div>
    </div>
  );
}
