import type { IComment } from './types';

interface CommentTableProps {
  comments: IComment[];
}
export default function CommentTable({ comments }: CommentTableProps) {
  return (
    <>
      <div className="bg-[#0d1014] rounded-lg shadow-sm p-6">
        {comments.length > 0 ? (
          <>
            <h2 className="text-xl font-bold mb-4">Recent Comments</h2>
            {comments.map((c) => (
              <div key={c.id} className="border-b p-3 text-sm text-gray-600">
                {c.text}
              </div>
            ))}
          </>
        ) : (
          <div className="p-10 text-center text-xl">No comments yet</div>
        )}
      </div>
    </>
  );
}
