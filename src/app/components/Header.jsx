import React from "react";

export default function Header() {
  return (
    <div className="flex flex-wrap items-center justify-between px-4 py-2 border-b border-gray-200 bg-gray-50">
      {/* Left Side: Back Arrow and File Name */}
      <div className="flex items-center space-x-3">
        <button className="text-gray-500 font-semibold items-center hover:text-black">
          {/* Back Arrow */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.25 7H1.75M1.75 7L7 12.25M1.75 7L7 1.75"
              stroke="#1F2A37"
            />
          </svg>
        </button>
        <span className="text-gray-700 font-medium text-sm md:text-base">
          Name of the file
        </span>
      </div>

      {/* Right Side: Auto Save Toggle and Profile Icon */}
      <div className="flex items-center space-x-6 mt-2 md:mt-0">
        {/* Auto Save Toggle */}
        <div className="flex items-center space-x-2">
          <label
            htmlFor="autosave"
            className="toggle-label block w-12 h-6 bg-green-500 rounded-full cursor-pointer relative"
          >
            <span className="toggle-dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow"></span>
          </label>
          <label className="text-green-700 font-medium text-sm md:text-base">
            Auto Save
          </label>
          <input
            type="checkbox"
            className="toggle-checkbox hidden"
            id="autosave"
          />
        </div>

        {/* Profile Icon */}
        <div>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="32" rx="16" fill="#FEECDC" />
            <path
              d="M9.25 22C11.0018 20.1419 13.3803 19 16 19C18.6197 19 20.9982 20.1419 22.75 22M19.375 12.625C19.375 14.489 17.864 16 16 16C14.136 16 12.625 14.489 12.625 12.625C12.625 10.761 14.136 9.25 16 9.25C17.864 9.25 19.375 10.761 19.375 12.625Z"
              stroke="#D03801"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
