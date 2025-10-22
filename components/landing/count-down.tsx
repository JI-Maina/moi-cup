"use client";

import React from "react";

// Countdown Timer Component
export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    const tournamentDate = new Date("November 11, 2025 08:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = tournamentDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-8">
      {/* <p className="text-white text-lg font-semibold mb-4 font-montserrat">
        Tournament Starts In:
      </p> */}
      <div className="flex gap-4 justify-start">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 min-w-[70px] border border-white/30">
              <div className="text-2xl md:text-3xl font-bold text-white font-montserrat">
                {value.toString().padStart(2, "0")}
              </div>
              <div className="text-xs md:text-sm text-[#F58220] font-semibold uppercase tracking-wide mt-1 font-lato">
                {unit}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
