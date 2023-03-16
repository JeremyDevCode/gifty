import React from "react";

function Footer() {
  return (
    <div className="w-full h-[200px] flex items-center justify-center">
      <div className="h-full flex items-end mb-10">
        <button className="w-[200px] h-[80px] bg-[#FFFFFF] text-[#0A0A0A] rounded-full hover:bg-[#F3F3F3] hover:translate-y-[-5px] transition-all">
          Need support?
        </button>
      </div>
    </div>
  );
}

export { Footer };
