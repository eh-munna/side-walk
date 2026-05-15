import Avatar from '../../components/Avatar';
import Badge from '../../components/Badge';

interface UserProfileProps {
  name: string;
  imgUrl: string;
  altText: string;
  size?: 'sm' | 'md' | 'lg';
  role: string;
  isAdmin?: boolean;
}

export default function UserProfile({
  name,
  imgUrl,
  size,
  role,
  isAdmin,
}: UserProfileProps) {
  return (
    <>
      <div className="flex gap-3 items-center border border-indigo-400 p-2 rounded-sm">
        <div>
          <Avatar imgUrl={imgUrl} altText={`${name}'s avatar`} size={size} />
        </div>
        <div>
          <h1 className="font-bold text-xl">{name}</h1>
          <Badge role={role} isAdmin={isAdmin} />
        </div>
      </div>
    </>
  );
}
