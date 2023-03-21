import React, { useState } from "react";
import { CopiedButton } from "./CopiedButton";
import { CopyButton } from "./CopyButton";

function Gif({ gif }) {
  const [check, setCheck] = useState(false);

  function copyImage(source) {
    navigator.clipboard
      .writeText(source)
      .then(() => {
        setCheck(true);
        setTimeout(() => {
          setCheck(false);
        }, 1500);
      })
      .catch((e) => {
        alert("Cannot copy gif to clipboard");
        console.log(e);
      });
  }

  return (
    <div
      key={gif.id}
      className="flex items-center justify-center relative w-full mb-5 group/details"
    >
      <img
        onClick={() => copyImage(gif?.images?.downsized?.url)}
        className="w-full rounded-md object-cover"
        src={gif?.images?.downsized?.url}
        alt={gif?.title}
      />

      <div className="hidden absolute w-full h-full bg-[#0A0A0A80] group-hover/details:flex">
        {!check && (
          <CopyButton
            handleClick={() => copyImage(gif?.images?.downsized?.url)}
          />
        )}
        {check && <CopiedButton />}
      </div>
    </div>
  );
}

export { Gif };
