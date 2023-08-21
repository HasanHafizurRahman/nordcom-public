"use client";
import { Icon } from "@iconify/react";

const TopNav = () => {
  return (
    <div className="flex w-full h-[46px] justify-between items-center flex-shrink-0 bg-black">
      <div className="flex justify-between items-center w-full">
        {/* Icons */}
        <div className="flex justify-between gap-4 pl-[120px]">
          <Icon
            icon="ant-design:facebook-outlined"
            style={{
              color: "white",
              height: "16px",
              width: "16px",
              flexShrink: 0,
            }}
          />
          <Icon
            icon="iconoir:linkedin"
            style={{
              color: "white",
              height: "16px",
              width: "16px",
              flexShrink: 0,
            }}
          />
          <Icon
            icon="teenyicons:twitter-outline"
            style={{
              color: "white",
              height: "16px",
              width: "16px",
              flexShrink: 0,
            }}
          />
          <Icon
            icon="ic:outline-mail"
            style={{
              color: "white",
              height: "16px",
              width: "16px",
              flexShrink: 0,
            }}
          />
        </div>

        {/* List Items */}
        <ul className="flex gap-4 pr-[100px]">
          <li className="text-white">introduce</li>
          <li className="text-white">Partner incentives</li>
          <li className="text-white">Promotion</li>
          <li className="text-white">Contact</li>
          <li className="text-white">Frequently asked questions</li>
        </ul>
      </div>
    </div>
  );
};

export default TopNav;
