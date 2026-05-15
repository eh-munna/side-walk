import UserProfile from '../profile/UserProfile';
export default function PlayWithReact() {
  return (
    <div className="flex flex-wrap gap-3">
      <UserProfile
        name={`Just User`}
        imgUrl="https://ui-avatars.com/api/?name=Elon+Musk&background=random"
        altText=""
        role="User"
      />
      <UserProfile
        name={`Just Admin`}
        imgUrl="https://ui-avatars.com/api/?name=Admin+Musk&background=random"
        altText=""
        role="Admin"
        isAdmin={true}
      />
      <UserProfile
        name={`Just User`}
        imgUrl="https://ui-avatars.com/api/?name=John+Doe&background=random"
        altText=""
        role="User"
      />
    </div>
  );
}
