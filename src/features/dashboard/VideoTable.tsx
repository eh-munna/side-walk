import type { IVideo } from './types';

interface VideoTableProps {
  videos: IVideo[];
}

export default function VideoTable({ videos }: VideoTableProps) {
  return (
    <>
      <div className="col-span-2 bg-[#0d1014] rounded-lg shadow-sm p-6">
        {videos.length > 0 ? (
          <>
            <h2 className="text-xl font-bold mb-4">Recent Videos</h2>
            {videos.map((v) => (
              <div
                key={v.id}
                className="border-b p-3 flex justify-between items-center text-sm text-sky-400"
              >
                <span>{v.title}</span>
                <span className="text-lg font-bold">{v.views}</span>
              </div>
            ))}
          </>
        ) : (
          <div className="p-10 text-center text-xl">No videos yet</div>
        )}
      </div>
    </>
  );
}
