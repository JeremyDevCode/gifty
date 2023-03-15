import React from "react";
import { GithubIcon } from "../assets/icons/GithubIcon";
import { MessageIcon } from "../assets/icons/MessageIcon";

function Menu() {
  return (
    <ul className="flex gap-5">
      <li>
        <MessageIcon />
      </li>
      <li>
        <GithubIcon />
      </li>
    </ul>
  );
}

export { Menu };
