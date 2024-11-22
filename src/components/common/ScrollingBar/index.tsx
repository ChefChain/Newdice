"use client";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";

const dicePaths: any = {
  1: <circle cx="10" cy="10" r="1.5" fill="currentColor" />,
  2: (
    <>
      <circle cx="6" cy="6" r="1.5" fill="currentColor" />
      <circle cx="14" cy="14" r="1.5" fill="currentColor" />
    </>
  ),
  3: (
    <>
      <circle cx="5" cy="5" r="1.5" fill="currentColor" />
      <circle cx="10" cy="10" r="1.5" fill="currentColor" />
      <circle cx="15" cy="15" r="1.5" fill="currentColor" />
    </>
  ),
  4: (
    <>
      <circle cx="6" cy="6" r="1.5" fill="currentColor" />
      <circle cx="14" cy="6" r="1.5" fill="currentColor" />
      <circle cx="6" cy="14" r="1.5" fill="currentColor" />
      <circle cx="14" cy="14" r="1.5" fill="currentColor" />
    </>
  ),
  5: (
    <>
      <circle cx="6" cy="6" r="1.5" fill="currentColor" />
      <circle cx="14" cy="6" r="1.5" fill="currentColor" />
      <circle cx="10" cy="10" r="1.5" fill="currentColor" />
      <circle cx="6" cy="14" r="1.5" fill="currentColor" />
      <circle cx="14" cy="14" r="1.5" fill="currentColor" />
    </>
  ),
  6: (
    <>
      <circle cx="6" cy="6" r="1.5" fill="currentColor" />
      <circle cx="14" cy="6" r="1.5" fill="currentColor" />
      <circle cx="6" cy="10" r="1.5" fill="currentColor" />
      <circle cx="14" cy="10" r="1.5" fill="currentColor" />
      <circle cx="6" cy="14" r="1.5" fill="currentColor" />
      <circle cx="14" cy="14" r="1.5" fill="currentColor" />
    </>
  ),
};

function DiceIcon({ value = 1, color = "currentColor" }) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="18"
        height="18"
        rx="4"
        ry="4"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
      {dicePaths[value]}
    </svg>
  );
}

function ScrollingBar() {
  const scrollingBarRef = useRef(null);
  const [winners, setWinners] = useState<any[]>([
    {
      name: "JerinMoo456",
      dice: [
        { value: 1, win: true },
        { value: 2, win: false },
        { value: 4, win: true },
        { value: 6, win: false },
      ],
    },
  ]);
  const [newWinner, setNewWinner] = useState<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const winner = {
        name: `Player${Math.floor(Math.random() * 100)}`,
        dice: [
          { value: 1, win: true },
          { value: 2, win: false },
          { value: 4, win: true },
          { value: 6, win: false },
        ],
      };
      setNewWinner(winner);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (newWinner) {
      setWinners((prev: any) => {
        const updatedBets = [...prev, newWinner];
        if (prev.length > 20) {
          updatedBets.shift();
        }
        return updatedBets;
      });
      setNewWinner(null);
    }
  }, [newWinner]);

  // scroll effect, commented it due to bugs
  useEffect(() => {
    const scrollingBar = document.querySelector(".scrolling-bar");
    if (scrollingBar) {
      scrollingBar.scrollTo({
        left: scrollingBar.scrollWidth,
        behavior: "smooth",
      });
    }
  }, [winners]);

  return (
    <div className="scrolling-bar m-2" ref={scrollingBarRef}>
      {winners?.map((bet) => (
        <div key={bet.name} className="bet">
          <div className="flex items-center gap-2">
            <span className="flex-1">{bet.name}</span>
            <span className="flex items-center gap-2">
              {bet?.dice?.map((dice: any) => (
                <div
                  className={clsx("w-4", {
                    "text-success": dice.win,
                  })}
                  key={dice.value}
                >
                  <DiceIcon
                    value={dice.value}
                    color={dice.win ? "hsl(var(--success))" : undefined}
                  />
                </div>
              ))}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ScrollingBar;
