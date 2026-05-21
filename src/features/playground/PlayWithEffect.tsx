import { useEffect, useState } from 'react';

export default function PlayWithEffect() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(function calculateWindowWidth() {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener(`resize`, handleResize);

    return () => {
      window.removeEventListener(`resize`, handleResize);
    };
  }, []);

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">Play with Effect</h1>
        <p>
          This is a simple example of how to use the useEffect hook in React.
        </p>
        <button
          className="mt-6 rounded-md border px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500 hover:text-white shadow-sm sm:rounded-lg sm:text-base cursor-pointer"
          onClick={() => console.log('Effect ran!')}
        >
          Run Effect
        </button>
      </div>

      <div className="mt-6 border border-slate-700 p-4 rounded-lg shadow-sm sm:rounded-lg w-full">
        <h2 className="text-xl">Here window width will be displayed below</h2>

        <div
          className={`px-2 py-4 border border-indigo-400 rounded-md w-[${window.innerWidth}px]`}
        >
          <p className="text-lg">Window Width: {windowWidth}px</p>
        </div>
      </div>
    </>
  );
}
