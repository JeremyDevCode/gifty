import React from "react";
import { CopyIcon } from "../assets/icons/CopyIcon";

function CopyButton({ handleClick }) {
  return (
    <button
      className="flex flex-col items-center justify-center w-full h-full"
      onClick={handleClick}
    >
      <CopyIcon />
      Copy
    </button>
  );
}

export { CopyButton };
