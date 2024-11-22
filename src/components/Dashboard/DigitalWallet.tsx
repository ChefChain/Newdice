import { Ellipsis, TrendingUpIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import clsx from "clsx";
import { act, useState } from "react";
import { Switch } from "../ui/switch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { FaCheckCircle } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Props = {};

const data = [
  { value: 56 },
  { value: 61 },
  { value: 64 },
  { value: 60 },
  { value: 63 },
  { value: 61 },
  { value: 60 },
  { value: 68 },
  { value: 66 },
  { value: 64 },
  { value: 77 },
  { value: 60 },
  { value: 65 },
  { value: 51 },
  { value: 72 },
  { value: 80 },
  { value: 74 },
  { value: 67 },
  { value: 77 },
  { value: 83 },
  { value: 94 },
  { value: 95 },
  { value: 89 },
  { value: 100 },
  { value: 94 },
  { value: 104 },
  { value: 101 },
  { value: 105 },
  { value: 104 },
  { value: 103 },
  { value: 107 },
  { value: 120 },
];
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

// DiceIcon component that accepts a value prop
function DiceIcon({
  value,
  color = "currentColor",
}: {
  value: any;
  color: any;
}) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dice background with rounded corners and thicker stroke */}
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
      {/* Dots based on value */}
      {dicePaths[value]}
    </svg>
  );
}

const buttonState = [
  { state: 1, text: "Place Bet", color: "rgba(221 231 238 / 0.08)" },
  { state: 2, text: "Confirm Bet", color: "#0f1012" },
  { state: 3, text: "Bet Confirmed", color: "primary-success" },
  { state: 4, text: "No More Bets", color: "primary-error" },
];

function DigitalWallet({}: Props) {
  const [diceNumber, setDiceNumber] = useState([1, 2, 3, 6]);
  const [activeButton, setActiveButton] = useState({
    state: 1,
    text: "Place Bet",
    color: "rgba(221 231 238 / 0.08)",
  });

  const handleDiceClick = (index: number) => {
    const newDiceNumber = [...diceNumber];
    newDiceNumber[index] =
      newDiceNumber[index] >= 6 ? 1 : newDiceNumber[index] + 1;
    setDiceNumber(newDiceNumber);
  };

  const handleButtonState = (index: number) => {
    setActiveButton(buttonState[index >= 4 ? 0 : index]);
  };

  return (
    <Card className="col-span-12 min-h-[350px] lg:col-span-5">
      {/* Announcement bar */}
      <Card className="flex gap-2 rounded-bl-none rounded-br-none !border-l-0 !border-r-0 !border-t-0 border-b-[1px]">
        <div className="flex flex-1 items-center px-4 py-2">
          <span className="text-primary-success ">
            This is the announcement bar
          </span>
        </div>
        <div className="rounded-tr-[20px] border-l-[1px] border-border-card bg-[#121314] px-1 py-1">
          <div className="flex flex-col items-center justify-center rounded-tr-[17px]  px-3 py-0.5 font-thin">
            <span className="text-xs">WIN/LOSS</span>
            <div className="flex items-center gap-1 text-primary-success ">
              <TrendingUpIcon strokeWidth={1} />
              <span>34.1%</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Wallet Info */}
      <div className="flex w-full items-start p-4">
        <div className="flex flex-1 flex-wrap gap-2">
          <Card className="flex min-h-[40px] items-center gap-1 rounded-full border border-primary-success px-4 py-3">
            <span className="pl-2 text-xs font-medium leading-none text-primary-success">
              TABLE:
            </span>
            <Select defaultValue="10">
              <SelectTrigger className="flex select-none gap-1 border-none p-0 focus:ring-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="5">$5</SelectItem>
                  <SelectItem value="10">$10</SelectItem>
                  <SelectItem value="25">$25</SelectItem>
                  <SelectItem value="50">$50</SelectItem>
                  <SelectItem value="100">$100</SelectItem>
                  <SelectItem value="200">$200</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Card>
          <Card className="flex min-h-[46px] items-center gap-2 rounded-full border border-primary-success px-4 py-3">
            <span className="text-xs font-medium leading-none text-primary-success">
              POT:
            </span>
            <span className="text-xs leading-none">777$</span>
            {/* <Image src="assets/logo-btc.svg" width={25} height={25} alt="btc" /> */}
          </Card>
          <Card className="flex min-h-[46px] items-center gap-2 rounded-full border border-primary-success px-4 py-3">
            <span className="text-xs font-medium leading-none text-primary-success">
              PROG:
            </span>
            <span className="text-xs">12,777$</span>
            {/* <Image src="assets/logo-btc.svg" width={25} height={25} alt="btc" /> */}
          </Card>
        </div>
        {/* <Button variant="ghost" size="icon">
          <Ellipsis />
        </Button> */}
      </div>

      {/* Chart */}
      {/* <ResponsiveContainer width="100%" height={100}>
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="hsl(var(--success))"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer> */}

      {/* Dice */}
      <div className="m-4 flex h-[70px] items-center justify-center sm:h-[100px] md:h-[100px] lg:h-[80px] xl:h-[100px]">
        <div className="grid h-full w-full max-w-full grid-cols-4  gap-2 sm:gap-5 lg:gap-2.5">
          {[1, 2, 3, 4].map((key, index) => (
            <Card
              key={key}
              className="flex h-[70px] select-none items-center justify-center rounded-md bg-[#121314] p-1.5 md:h-[100px] md:p-2.5 lg:h-[80px] xl:h-[100px]"
              //   className="flex h-[70px] w-[70px] min-w-[70px] select-none items-center justify-center rounded-md bg-transparent p-1.5 md:h-[100px] md:w-[100px] md:min-w-[100px] md:p-2.5 lg:h-[80px] lg:w-[80px] lg:min-w-[80px] xl:h-[100px]  xl:w-[100px] xl:min-w-[100px]"
            >
              <div
                className={clsx(
                  "aspect-1 h-[80%] w-[80%] cursor-pointer sm:h-[90%] sm:w-[90%]",
                  {
                    "text-primary-error": index === 3,
                    "#f0f0f0": index !== 3,
                  },
                )}
                onClick={() => handleDiceClick(index)}
              >
                <DiceIcon
                  value={diceNumber[index]}
                  color={index === 3 ? "hsl(var(--error))" : undefined}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Currency and Trend Info */}
      <div className="m-4 mt-8 flex items-stretch gap-2">
        <Card className="flex items-center justify-center rounded-[8px] bg-transparent p-2">
          <div className="flex flex-1 flex-col items-center justify-center gap-0.5 rounded-[6px] bg-secondary px-5 py-1">
            <span className="text-3xl font-light leading-none tracking-[1px]">
              43
            </span>
            <span className="text-[0.6rem] font-thin leading-none tracking-[1px]">
              PLAYERS
            </span>
          </div>
        </Card>
        <Card
          className={clsx("flex-1 items-stretch rounded-[8px] p-2 ", {
            "animate-blinkBorderSuccess border-[1px] border-primary-success":
              activeButton.state === 3,
            "animate-blinkBorderError border-[1px] border-primary-error":
              activeButton.state === 4,
          })}
        >
          <div className="flex h-full items-center justify-between">
            <div
              className={clsx(
                "flex flex-1 items-center justify-center gap-0.5",
                {
                  "text-primary-success": activeButton.state !== 4,
                  "text-primary-error": activeButton.state === 4,
                },
              )}
            >
              <span className={clsx("text-3xl font-light")}>$</span>
              <span className={clsx("text-3xl font-extrabold")}>10</span>
            </div>
            <Button
              variant="secondary"
              className={clsx(
                "h-full flex-1 rounded-[8px] p-2 text-sm font-semibold uppercase leading-7 hover:bg-secondary",
                activeButton.state >= 3 && `animate-blinkButton`,
                {
                  "text-primary-success": activeButton.state === 1,
                  "bg-[#0f1012] hover:bg-[#0f1012]": activeButton.state === 2,
                  "bg-background-success hover:bg-background-success":
                    activeButton.state === 3,
                  "bg-background-error hover:bg-background-error":
                    activeButton.state === 4,
                },
              )}
              onClick={() => handleButtonState(activeButton.state)}
            >
              {activeButton.text}
              {activeButton.state === 1 && (
                <FaCheckCircle className="h-4 w-4 text-primary-success" />
              )}
            </Button>
          </div>
        </Card>
      </div>

      {/* Bet Controls */}
      <div className="mx-0 mt-6 flex items-center justify-end gap-5 rounded-bl-[20px] rounded-br-[20px] border-t-[1px] border-border-card bg-[#121314] px-4 py-4 md:gap-10 lg:gap-3">
        <div className="flex items-center justify-between gap-3 md:gap-6 lg:gap-3">
          <span className="flex-1 text-sm font-extralight tracking-[0.5px]">
            Progressive
          </span>
          <Switch
            variant="progressive"
            id="progressive"
            text="+.25"
            checked={true}
          />
        </div>
        <div className="flex items-center justify-between gap-3 md:gap-6 lg:gap-3">
          <span className="flex-1 text-sm font-extralight tracking-[0.5px]">
            Auto Bet
          </span>
          <Switch variant="autobet" id="autobet" />
        </div>
      </div>
    </Card>
  );
}

export default DigitalWallet;
