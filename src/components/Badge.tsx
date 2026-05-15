interface BadgeProps {
  role: string;
  isAdmin?: boolean;
}

export default function Badge({ role, isAdmin = false }: BadgeProps) {
  return (
    <>
      <span
        className={`${isAdmin ? 'text-red-500' : 'text-green-500'} mr-2 tracking-wider font-bold text-sm rounded-full`}
      >
        {role}
      </span>
    </>
  );
}
