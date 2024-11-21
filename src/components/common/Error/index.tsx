import React from "react";

function Error({ msg }: { msg: string }) {
  return <p className="font-medium text-red-500">{msg}</p>;
}

export default Error;
