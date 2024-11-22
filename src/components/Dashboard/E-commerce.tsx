"use client";
import React from "react";
import { Card, CardContent } from "../ui/card";
import DigitalWallet from "./DigitalWallet";

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-background">
        <div className="h-[70vh] w-full">
          <div className="relative h-full w-full">
            <iframe
              src="https://viewer.millicast.com?streamId=eFxcvk/myStreamName"
              allowFullScreen
              className="absolute inset-0 left-0 top-0 h-full w-full"
            ></iframe>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <DigitalWallet />
          <Card className="col-span-12 rounded-[8px] lg:col-span-7">
            <CardContent className="px-4 py-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-primary-success ">Wallet:</span>
                <span>354$</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ECommerce;
