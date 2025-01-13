import React from "react";
import Sidebar from "./Sidebar";
import DynamicTable from "./DynamicTable";

export default function SubHeader() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        {/*SubHeader */}
        <div className="flex items-center space-x-6 px-4 py-6 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center ">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-md lg:px-10 lg:py-2 pl-10 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m2.1-6.6a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between flex-1">
            <div className="flex items-center space-x-8">
              <button className="text-gray-700 flex items-center gap-2 text-sm">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5H13M1 9H13M4.2 1H9.8C10.9201 1 11.4802 1 11.908 1.21799C12.2843 1.40973 12.5903 1.71569 12.782 2.09202C13 2.51984 13 3.0799 13 4.2V9.8C13 10.9201 13 11.4802 12.782 11.908C12.5903 12.2843 12.2843 12.5903 11.908 12.782C11.4802 13 10.9201 13 9.8 13H4.2C3.07989 13 2.51984 13 2.09202 12.782C1.71569 12.5903 1.40973 12.2843 1.21799 11.908C1 11.4802 1 10.9201 1 9.8V4.2C1 3.07989 1 2.51984 1.21799 2.09202C1.40973 1.71569 1.71569 1.40973 2.09202 1.21799C2.51984 1 3.0799 1 4.2 1Z"
                    stroke="#1F2A37"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                1/1 Row
              </button>
              <button className="text-gray-700 flex items-center gap-2 text-sm">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 1V13M9 1V13M4.2 1H9.8C10.9201 1 11.4802 1 11.908 1.21799C12.2843 1.40973 12.5903 1.71569 12.782 2.09202C13 2.51984 13 3.0799 13 4.2V9.8C13 10.9201 13 11.4802 12.782 11.908C12.5903 12.2843 12.2843 12.5903 11.908 12.782C11.4802 13 10.9201 13 9.8 13H4.2C3.07989 13 2.51984 13 2.09202 12.782C1.71569 12.5903 1.40973 12.2843 1.21799 11.908C1 11.4802 1 10.9201 1 9.8V4.2C1 3.07989 1 2.51984 1.21799 2.09202C1.40973 1.71569 1.71569 1.40973 2.09202 1.21799C2.51984 1 3.0799 1 4.2 1Z"
                    stroke="#1F2A37"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                3/3 Column
              </button>
              <button className="text-gray-700 flex items-center gap-2 text-sm">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.25728 2.77791C1.75306 2.21437 1.50094 1.93259 1.49143 1.69312C1.48317 1.48509 1.57257 1.28515 1.73311 1.15259C1.91791 1 2.29601 1 3.05221 1H12.9475C13.7037 1 14.0818 1 14.2666 1.15259C14.4271 1.28515 14.5165 1.48509 14.5083 1.69312C14.4988 1.93259 14.2466 2.21437 13.7424 2.77791L9.93826 7.02962C9.83775 7.14196 9.78749 7.19813 9.75166 7.26205C9.71987 7.31875 9.69655 7.37978 9.68244 7.44323C9.66652 7.51476 9.66652 7.59013 9.66652 7.74087V11.3056C9.66652 11.436 9.66652 11.5011 9.64549 11.5575C9.62691 11.6073 9.59669 11.6519 9.55735 11.6877C9.51283 11.7281 9.45231 11.7524 9.33126 11.8008L7.06459 12.7074C6.81956 12.8054 6.69705 12.8545 6.5987 12.834C6.51269 12.8161 6.43722 12.765 6.38869 12.6918C6.33318 12.6081 6.33318 12.4762 6.33318 12.2122V7.74087C6.33318 7.59013 6.33318 7.51476 6.31726 7.44323C6.30315 7.37978 6.27983 7.31875 6.24804 7.26205C6.21221 7.19813 6.16195 7.14196 6.06144 7.02962L2.25728 2.77791Z"
                    stroke="#1F2A37"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                0 Filter
              </button>
              <button className="text-gray-700 flex items-center gap-2 text-sm">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3333 1.66666V12.3333M10.3333 12.3333L7.66667 9.66666M10.3333 12.3333L13 9.66666M3.66667 12.3333V1.66666M3.66667 1.66666L1 4.33332M3.66667 1.66666L6.33333 4.33332"
                    stroke="#1F2A37"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Sort
              </button>
            </div>
            <div className="flex items-center pr-4 space-x-8">
              <button className="bg-gray-900 text-white flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.00004 14.6667V11.3333M3.00004 4.66668V1.33334M1.33337 3.00001H4.66671M1.33337 13H4.66671M8.66671 2.00001L7.51059 5.00592C7.32258 5.49474 7.22858 5.73915 7.08239 5.94473C6.95283 6.12694 6.79364 6.28614 6.61143 6.4157C6.40585 6.56188 6.16143 6.65588 5.67261 6.84389L2.66671 8.00001L5.67262 9.15613C6.16144 9.34414 6.40585 9.43814 6.61143 9.58432C6.79364 9.71388 6.95283 9.87308 7.08239 10.0553C7.22858 10.2609 7.32258 10.5053 7.51059 10.9941L8.66671 14L9.82283 10.9941C10.0108 10.5053 10.1048 10.2609 10.251 10.0553C10.3806 9.87308 10.5398 9.71388 10.722 9.58432C10.9276 9.43814 11.172 9.34414 11.6608 9.15613L14.6667 8.00001L11.6608 6.84389C11.172 6.65588 10.9276 6.56188 10.722 6.4157C10.5398 6.28614 10.3806 6.12694 10.251 5.94473C10.1048 5.73915 10.0108 5.49474 9.82283 5.00592L8.66671 2.00001Z"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Enrich
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.4425 10.1325L10.565 13.1175M10.5575 4.8825L5.4425 7.8675M14.75 3.75C14.75 4.99264 13.7426 6 12.5 6C11.2574 6 10.25 4.99264 10.25 3.75C10.25 2.50736 11.2574 1.5 12.5 1.5C13.7426 1.5 14.75 2.50736 14.75 3.75ZM5.75 9C5.75 10.2426 4.74264 11.25 3.5 11.25C2.25736 11.25 1.25 10.2426 1.25 9C1.25 7.75736 2.25736 6.75 3.5 6.75C4.74264 6.75 5.75 7.75736 5.75 9ZM14.75 14.25C14.75 15.4926 13.7426 16.5 12.5 16.5C11.2574 16.5 10.25 15.4926 10.25 14.25C10.25 13.0074 11.2574 12 12.5 12C13.7426 12 14.75 13.0074 14.75 14.25Z"
                    stroke="#1F2A37"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.75 10.25V13.25C14.75 13.6478 14.592 14.0294 14.3107 14.3107C14.0294 14.592 13.6478 14.75 13.25 14.75H2.75C2.35218 14.75 1.97064 14.592 1.68934 14.3107C1.40804 14.0294 1.25 13.6478 1.25 13.25V10.25M4.25 6.5L8 10.25M8 10.25L11.75 6.5M8 10.25V1.25"
                    stroke="#1F2A37"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.75 1.25H10.25M1.25 3.5H14.75M13.25 3.5L12.724 11.3895C12.6451 12.5732 12.6057 13.165 12.35 13.6138C12.1249 14.0088 11.7854 14.3265 11.3762 14.5248C10.9115 14.75 10.3183 14.75 9.13201 14.75H6.86799C5.68168 14.75 5.08852 14.75 4.62375 14.5248C4.21457 14.3265 3.87507 14.0088 3.64999 13.6138C3.39433 13.165 3.35488 12.5732 3.27596 11.3895L2.75 3.5M6.5 6.875V10.625M9.5 6.875V10.625"
                    stroke="#E02424"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <DynamicTable />
      </div>
    </div>
  );
}
