export default function DashboardHeader() {
  return (
    <>
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-indigo-300">
          Creator Analytics
        </h1>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
          <span className="font-semibold">User</span>
        </div>
      </header>
    </>
  );
}
