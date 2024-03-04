"use client";

import { useState } from "react";

export default function Page() {
  const [clicked, setClicked] = useState(false);
  console.log(clicked);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div
      className={`mt-24 ml-24 p-2 hover:border-red-300 ${
        clicked ? "border-red-300" : "border-transparent"
      } border-dashed border-4 w-fit`}
      onClick={handleClick}
    >
      <div className="w-20 h-32 bg-slate-300 flex justify-center items-center cursor-pointer">
        01
      </div>
    </div>
  );
}
