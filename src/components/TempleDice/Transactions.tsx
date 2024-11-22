import { GoArrowRight, GoArrowSwitch } from "react-icons/go";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardTitle } from "../ui/card";

type Props = {};

function Transactions({}: Props) {
  return (
    <Card className="col-span-12 min-h-[350px] lg:col-span-6">
      <CardTitle className="flex items-center gap-4 px-6 py-8">
        <GoArrowSwitch className="h-6 w-6 rotate-90 " />
        <span className="text-lg font-medium leading-[1.2] text-white">
          Transactions
        </span>
      </CardTitle>
      <CardContent className=" p-0">
        <div className="border-border-card2 flex items-center gap-4 border-b-[1px] p-4">
          <div>
            <Avatar className="h-10 w-10 bg-white">
              <AvatarImage src="/assets/uptrend.svg" />
            </Avatar>
          </div>
          <div className="flex flex-1 flex-col text-[0.875rem]">
            <span className="font-medium">Buy BTC</span>
            <span className="text-text-secondary font-normal">
              11.20.2024 / 09:00 AM
            </span>
          </div>
          <div className="flex flex-col  text-[0.875rem] font-normal">
            <span className=" text-primary-success">+ 0.2105 BTC</span>
            <span className="text-text-secondary text-end">$643.00</span>
          </div>
        </div>
        <div className="border-border-card2 flex items-center gap-4 border-b-[1px] p-4">
          <div>
            <Avatar className="h-10 w-10 bg-white">
              <AvatarImage src="/assets/uptrend.svg" />
            </Avatar>
          </div>
          <div className="flex flex-1 flex-col text-[0.875rem]">
            <span className="font-medium">Buy BTC</span>
            <span className="text-text-secondary font-normal">
              11.20.2024 / 09:00 AM
            </span>
          </div>
          <div className="flex flex-col  text-[0.875rem] font-normal">
            <span className=" text-primary-success">+ 0.2105 BTC</span>
            <span className="text-text-secondary text-end">$643.00</span>
          </div>
        </div>
        <div className="border-border-card2 flex items-center gap-4 border-b-[1px] p-4">
          <div>
            <Avatar className="h-10 w-10 bg-white">
              <AvatarImage src="/assets/downtrend.svg" />
            </Avatar>
          </div>
          <div className="flex flex-1 flex-col text-[0.875rem]">
            <span className="font-medium">Sell BTC</span>
            <span className="text-text-secondary font-normal">
              11.20.2024 / 09:00 AM
            </span>
          </div>
          <div className="flex flex-col  text-[0.875rem] font-normal">
            <span className=" text-primary-error">+ 0.2105 BTC</span>
            <span className="text-text-secondary text-end">$643.00</span>
          </div>
        </div>
        <div className="flex items-center gap-2 p-4">
          <span className="text-[13px]">See all</span>{" "}
          <GoArrowRight className="h-4 w-4" />
        </div>
      </CardContent>
    </Card>
  );
}

export default Transactions;
