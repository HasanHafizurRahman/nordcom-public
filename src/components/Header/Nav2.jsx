"use client";
import { Icon } from "@iconify/react";
import { Menu } from "@headlessui/react";

const Nav2 = () => {
  return (
    <div className="flex flex-shrink-0 w-full h-[56px] justify-center items-center bg-white">
      {/* Left Section */}
      <div className="flex items-center space-x-2 pl-4">
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="flex items-center space-x-2 cursor-pointer">
            <Icon
              icon="ant-design:bars-outlined"
              style={{ fontSize: "20px", color: "gray" }}
            />
            Category
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
        <a href="#" className="text-gray-600 hover:text-black">
          Home
        </a>
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="flex items-center space-x-2 cursor-pointer">
            New Product
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
        <a href="#" className="text-gray-600 hover:text-black">
          Promotion
        </a>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 pr-4">
        <a href="#" className="text-gray-600 hover:text-black">
          Track your order
        </a>
        <a href="#" className="text-gray-600 hover:text-black">
          Sign in/Register
        </a>
      </div>
    </div>
  );
};

export default Nav2;
