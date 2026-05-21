import { useState, type ChangeEvent } from 'react';

interface User {
  firstName: string;
  lastName: string;
  role: string;
}

export default function PlayWithState() {
  const [count, setCount] = useState<number>(0);

  const [user, setUser] = useState<User>({
    firstName: 'John',
    lastName: 'Doe',
    role: 'Admin',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

    // setUser({
    //     ...user,

    // }
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <p>You clicked the button {count} times</p>

        <button
          className="w-1/3 rounded-md px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-500 hover:text-white [&.active]:bg-blue-600 border border-blue-700 shadow-sm shadow-blue-500/40"
          onClick={() => setCount(count + 1)}
        >
          Click me!
        </button>
      </div>

      <div className="border border-indigo-500 p-3 mt-6">
        <h2 className="text-2xl">User Profile</h2>
        <p className="mt-4">
          {user.firstName} {user.lastName}
        </p>
        <p>{user.role}</p>
        <input
          onChange={handleChange}
          className="mt-6 rounded-md p-2 w-full border border-amber-500"
          name="firstName"
          value={user.firstName}
          placeholder="First Name"
          type="text"
        />
      </div>
    </>
  );
}
