import React from "react";

export function Banner() {
  return (
    <div className="bg-transparent flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-gray-800 text-center">
        Hack Knight 2025:
      </h1>
      <h2 className="text-4xl font-bold text-red-500 underline underline-offset-4 decoration-4 decoration-pink-500 text-center mt-2">
        The Future Is Now!
      </h2>
      <p className="mt-4 text-lg text-gray-600 text-center">
        Unlocking The Potential Of Tech.
      </p>
      <p className="mt-2 text-2xl font-semibold text-gray-800 text-center">
        February 7th - 9th, 2025
      </p>
    </div>
  );
};
