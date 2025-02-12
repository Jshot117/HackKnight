import React, { Component } from "react";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

export function CountDownTimer() {
  return (
    <div className="w-full flex flex-col items-center">
      <FlipClockCountdown
        to={new Date("2025-03-07T16:00:00")}
        digitBlockStyle={{
          width: '2.2rem', 
          height: "4rem",
          fontSize: '2rem'
        }}
      />
      <h2 className="text-2xl font-semibold text-blue-700 mt-4">
        UNTIL HACK KNIGHT 2025!
      </h2>
    </div>
  );
}
