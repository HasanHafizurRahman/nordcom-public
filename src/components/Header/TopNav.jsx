"use client";
import NCIcon from "../reusable-components/NCIcon";

const TopNav = () => {
  return (
    <div className="flex w-full h-[46px] justify-between items-center flex-shrink-0 bg-black">
      <div className="flex justify-between items-center w-full">
        {/* Icons */}
        <div className="flex justify-between gap-3 pl-[120px]">
          <NCIcon iconName="ei:sc-facebook" color="white" fontSize="16px" />
          <NCIcon iconName="ri:linkedin-fill" color="white" fontSize="16px" />
          <NCIcon iconName="ri:twitter-line" color="white" fontSize="16px" />
          <NCIcon iconName="ic:outline-mail" color="white" fontSize="16px" />
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
