"use client";
import { Icon } from "@iconify/react";
const TopNav = () => {
  return (
    <div className="flex w-full h-[56px] items-center flex-shrink-0 bg-black px-264 pr-280">
      <div className="flex justify-between items-center w-full">
        {/* icons */}
        <div className="flex justify-between gap-418 pl-[280px]">
          <Icon
            icon="ant-design:facebook-outlined"
            style={{
              color: "white",
              height: "16px",
              width: "16px",
              marginRight: "8px",
              flexShrink: 0,
            }}
          />
          <Icon
            icon="iconoir:linkedin"
            style={{
              color: "white",
              height: "16px",
              width: "16px",
              marginRight: "8px",
              flexShrink: 0,
            }}
          />
          <Icon
            icon="teenyicons:twitter-outline"
            style={{
              color: "white",
              height: "16px",
              width: "16px",
              marginRight: "8px",
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

        <div className=" ">
          <ul className="flex justify-center items-center gap-418 pr-[264px]">
            <li className="text-white pr-2">introduce </li>
            <li className="text-white pr-2">Partner incentives </li>
            <li className="text-white pr-2">Promotion </li>
            <li className="text-white pr-2">Contact </li>
            <li className="text-white">Frequently asked questions </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
