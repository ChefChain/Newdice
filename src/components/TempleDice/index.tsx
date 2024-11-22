"use client";
import React from "react";
import DigitalWallet from "./DigitalWallet";
import ScrollingBar from "../common/ScrollingBar";
import Transactions from "./Transactions";

const TempleDice: React.FC = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col gap-2 bg-background">
        <div className="h-[30vh] w-full md:h-[50vh] lg:h-[60vh] xl:h-[70vh]">
          <div className="relative h-full w-full">
            <iframe
              src="https://viewer.millicast.com?streamId=eFxcvk/myStreamName"
              allowFullScreen
              className="absolute inset-0 left-0 top-0 h-full w-full"
            ></iframe>
          </div>
        </div>

        <div className="w-full px-2">
          <ScrollingBar />
        </div>

        <div className="grid grid-cols-12 gap-2 p-2">
          <DigitalWallet />
          <Transactions />
        </div>
      </div>
    </>
  );
};

export default TempleDice;
