import React, { ChangeEvent, FC } from "react";
import { DashboardHeaderTypes } from "../../types";

const DashboardHeader: FC<DashboardHeaderTypes> = ({
  setIsLightMode,
  isLightMode,
}: DashboardHeaderTypes): JSX.Element => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    return setIsLightMode(e.target.checked);
  };

  return (
    <div className="flex flex-col w-full mb-4 md:justify-center">
      <div>
        <h1
          className={`text-2xl font-bold ${
            isLightMode ? "text-black" : "text-white"
          }`}
        >
          Social Media Dashboard
        </h1>
        <p
          className={`text-xs  font-semibold ${
            isLightMode ? "text-cardLightTextColor" : "text-textBlue"
          }`}
        >
          Total Followers: 23,004
        </p>
      </div>

      <hr
        className={`md:hidden mt-4 mb-2 opacity-10 border-1 ${
          isLightMode ? "border-black" : "border-white"
        }`}
      />

      <div className="flex items-center justify-between md:justify-end">
        <span
          className={`text-xs  font-semibold md:mr-2 ${
            isLightMode ? "text-cardLightTextColor" : "text-textBlue"
          }`}
        >
          Dark Mode
        </span>

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            name="lightMode"
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={handleChange}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
    </div>
  );
};

export default DashboardHeader;
