"use client";
import { Icon } from "@iconify/react";
import { Menu } from "@headlessui/react";

const Nav2 = () => {
  return (
    <div className="flex flex-shrink-0 w-full h-[46px] justify-between items-center bg-white shadow-md">
      {/* Left Section */}
      <div className="flex items-center space-x-2 pl-[115px]">
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="flex items-center space-x-4 cursor-pointer">
            <Icon
              icon="ant-design:bars-outlined"
              style={{ fontSize: "20px", color: "black" }}
            />
            <p className="pr-4">Category</p>
            <Icon
              icon="ant-design:down-outlined"
              style={{ fontSize: "16px", color: "gray" }}
            />
          </Menu.Button>
          <Menu.Items className="absolute left-0 mt-2 bg-white border rounded-md shadow-lg">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`block px-4 py-2 ${active ? "bg-gray-100" : ""}`}
                >
                  Option 1
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`block px-4 py-2 ${active ? "bg-gray-100" : ""}`}
                >
                  Option 2
                </a>
              )}
            </Menu.Item>
            {/* Add more menu items here */}
          </Menu.Items>
        </Menu>
      </div>

      {/* Middle Section */}
      <div className="flex items-center space-x-4">
        <a href="#" className="text-black">
          Home
        </a>
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="flex items-center space-x-2 cursor-pointer">
            <p>New Product</p>
            <Icon
              icon="ant-design:down-outlined"
              style={{ fontSize: "16px", color: "gray" }}
            />
          </Menu.Button>
          <Menu.Items className="absolute left-0 mt-2 bg-white border rounded-md shadow-lg">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`block px-4 py-2 ${active ? "bg-gray-100" : ""}`}
                >
                  Option 1
                </a>
              )}
            </Menu.Item>
            {/* Add more menu items here */}
          </Menu.Items>
        </Menu>
        <a href="#" className="text-black">
          Promotion{" "}
          <span className="text-white bg-nordcomAccent text-xs border rounded-xl p-1">
            HOT
          </span>
        </a>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 pr-20">
        <Icon icon="iconoir:delivery-truck" style={{ fontSize: "20px" }} />
        <a href="#" className="text-black">
          Track your order
        </a>
        <Icon
          icon="material-symbols:person-outline"
          style={{ fontSize: "20px" }}
        />
        <a href="#" className="text-black">
          Sign in/Register
        </a>
      </div>
    </div>
  );
};

export default Nav2;
