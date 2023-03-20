import React from "react";
import { CheckIcon } from "../assets/icons/CheckIcon";

function CopiedButton() {
  return (
    <button className="flex flex-col items-center justify-center w-full h-full">
      <CheckIcon />
      Copied!
    </button>
  );
}

export { CopiedButton };
