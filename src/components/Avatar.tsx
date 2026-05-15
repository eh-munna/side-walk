interface AvatarProps {
  imgUrl: string;
  altText: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Avatar({ imgUrl, altText, size = 'md' }: AvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <>
      <img
        src={imgUrl}
        alt={altText}
        className={`${sizeClasses[size]} rounded-full object-cover`}
      />
    </>
  );
}
