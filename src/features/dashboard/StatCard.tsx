import type { StatCardProps } from './types';

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <>
      <div className="bg-[#0d1014] p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-gray-500 text-sm font-medium">{label}</h3>
        <p className="text-3xl font-bold mt-2">{value}</p>
      </div>
    </>
  );
}
