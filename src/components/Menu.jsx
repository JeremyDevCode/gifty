import React from "react";
import { GithubIcon } from "../assets/icons/GithubIcon";
import { MessageIcon } from "../assets/icons/MessageIcon";

function Menu() {
  return (
    <ul className="flex gap-5">
      <li>
        <a href="mailto:jeremydevcode@gmail.com">
          <MessageIcon />
        </a>
      </li>
      <li>
        <a href="https://github.com/JeremyDevCode/gifty" target="_blank">
          <GithubIcon />
        </a>
      </li>
    </ul>
  );
}

export { Menu };
