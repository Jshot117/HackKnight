import React from "react";
import Countdown from "react-countdown";

export function CountDownTimer() {
  return (
    <div className="flex flex-col items-center">
      <Countdown
        date={new Date("2025-02-11T16:00:00")}
        renderer={({ days, hours, minutes, seconds }) => (
          <div className="flex space-x-4">
            <div className="bg-blue-300 text-white text-center rounded-lg p-4 shadow-md">
              <div className="text-3xl font-bold">{days}</div>
              <div className="uppercase text-sm">Days</div>
            </div>
            <div className="bg-blue-300 text-white text-center rounded-lg p-4 shadow-md">
              <div className="text-3xl font-bold">{hours}</div>
              <div className="uppercase text-sm">Hours</div>
            </div>
            <div className="bg-blue-300 text-white text-center rounded-lg p-4 shadow-md">
              <div className="text-3xl font-bold">{minutes}</div>
              <div className="uppercase text-sm">Minutes</div>
            </div>
            <div className="bg-blue-300 text-white text-center rounded-lg p-4 shadow-md">
              <div className="text-3xl font-bold">{seconds}</div>
              <div className="uppercase text-sm">Seconds</div>
            </div>
          </div>
        )}
      />
      <h2 className="text-2xl font-semibold text-blue-700 mt-4">
        UNTIL HACK KNIGHT 2025!
      </h2>
    </div>
  );
};

