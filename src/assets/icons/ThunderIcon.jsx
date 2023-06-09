import React from "react";

function ThunderIcon() {
  return (
    <svg
      width="21"
      height="26"
      viewBox="0 0 21 26"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          x1="15.313%"
          y1="100%"
          x2="84.687%"
          y2="0%"
          id="artists"
        >
          <stop stopColor="#E646B6" offset="0%"></stop>
          <stop stopColor="#FF6666" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        d="M3.9 23.67c-.636-.46-.798-1.112-.485-1.958l2.36-7.256H1.308a1.34 1.34 0 01-1.126-.614c-.244-.379-.244-.998 0-1.377L7.334.613C7.547.233 7.974 0 8.46 0h10.226c.457 0 .883.234 1.126.613.244.38.213.876-.03 1.255l-4.991 7.649h3.201c.548 0 1.004.32 1.217.788.183.467.061.992-.304 1.343L6.25 23.493c-.274.263-1.396.866-2.35.177zm-.88-11.117h3.886c.426 0 1.007-.053 1.285.525.222.324.222.74 0 1.25l-2.094 6.026a.2.2 0 00.33.207l8.8-8.797a.2.2 0 00-.142-.341h-1.61 0c-.457 0-.963.13-1.405-.468-.442-.598-.243-1.174 0-1.554l5.115-7.419a.2.2 0 00-.164-.313l-7.67-.001a.3.3 0 00-.258.146L2.85 12.25a.2.2 0 00.172.303z"
        transform="translate(1 1)"
        fill="url(#artists)"
        fillRule="nonzero"
        stroke="url(#b)"
        strokeWidth=".1"
      ></path>
    </svg>
  );
}

export default ThunderIcon;
