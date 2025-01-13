import React from "react";

export default function Sidebar() {
  return (
    <div className="w-16 bg-gray-50 border-r border-gray-200 flex flex-col items-center justify-between py-4 pb-16 space-y-8">
      <div className="flex flex-col items-center space-y-6">
        {/* Grid Icon */}
        <button className="text-gray-500 hover:text-black">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7L19 7M7 1L7 19M5.8 1H14.2C15.8802 1 16.7202 1 17.362 1.32698C17.9265 1.6146 18.3854 2.07354 18.673 2.63803C19 3.27976 19 4.11984 19 5.8V14.2C19 15.8802 19 16.7202 18.673 17.362C18.3854 17.9265 17.9265 18.3854 17.362 18.673C16.7202 19 15.8802 19 14.2 19H5.8C4.11984 19 3.27976 19 2.63803 18.673C2.07354 18.3854 1.6146 17.9265 1.32698 17.362C1 16.7202 1 15.8802 1 14.2V5.8C1 4.11984 1 3.27976 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.27976 1 4.11984 1 5.8 1Z"
              stroke="#1F2A37"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Puzzle Icon */}
        <button className="text-gray-500 hover:text-black">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 3.5C6.5 2.11929 7.61929 1 9 1C10.3807 1 11.5 2.11929 11.5 3.5V5H12.5C13.8978 5 14.5967 5 15.1481 5.22836C15.8831 5.53284 16.4672 6.11687 16.7716 6.85195C17 7.40326 17 8.10218 17 9.5H18.5C19.8807 9.5 21 10.6193 21 12C21 13.3807 19.8807 14.5 18.5 14.5H17V16.2C17 17.8802 17 18.7202 16.673 19.362C16.3854 19.9265 15.9265 20.3854 15.362 20.673C14.7202 21 13.8802 21 12.2 21H11.5V19.25C11.5 18.0074 10.4926 17 9.25 17C8.00736 17 7 18.0074 7 19.25V21H5.8C4.11984 21 3.27976 21 2.63803 20.673C2.07354 20.3854 1.6146 19.9265 1.32698 19.362C1 18.7202 1 17.8802 1 16.2V14.5H2.5C3.88071 14.5 5 13.3807 5 12C5 10.6193 3.88071 9.5 2.5 9.5H1C1 8.10218 1 7.40326 1.22836 6.85195C1.53284 6.11687 2.11687 5.53284 2.85195 5.22836C3.40326 5 4.10218 5 5.5 5H6.5V3.5Z"
              stroke="#1F2A37"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Link Icon */}
        <button className="text-gray-500 hover:text-black">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
              stroke="#1F2A37"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 21C17.866 21 21 17.866 21 14C21 10.134 17.866 7 14 7C10.134 7 7 10.134 7 14C7 17.866 10.134 21 14 21Z"
              stroke="#1F2A37"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col items-center space-y-6">
        {/* Card Icon */}
        <button className="text-gray-500 hover:text-black">
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 6H1M10 10H5M1 4.2L1 11.8C1 12.9201 1 13.4802 1.21799 13.908C1.40973 14.2843 1.71569 14.5903 2.09202 14.782C2.51984 15 3.07989 15 4.2 15L17.8 15C18.9201 15 19.4802 15 19.908 14.782C20.2843 14.5903 20.5903 14.2843 20.782 13.908C21 13.4802 21 12.9201 21 11.8V4.2C21 3.0799 21 2.51984 20.782 2.09202C20.5903 1.7157 20.2843 1.40974 19.908 1.21799C19.4802 1 18.9201 1 17.8 1L4.2 1C3.0799 1 2.51984 1 2.09202 1.21799C1.7157 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.07989 1 4.2Z"
              stroke="#1F2A37"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Custom Icon */}
        <button className="hover:text-pink-700">
          <svg
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1755 3.22225C12.1766 1.99445 9.67307 1 6.58832 1C3.50357 1 1.00224 1.99557 1 3.22225M1 3.22225C1 4.45004 3.50133 5.44449 6.58832 5.44449C9.6753 5.44449 12.1766 4.45004 12.1766 3.22225L12.1766 11.8445M1 3.22225V16.5556C1.00112 17.7834 3.50245 18.7779 6.58832 18.7779C8.08487 18.7779 9.43612 18.5412 10.4387 18.1601M1.00112 7.66672C1.00112 8.89451 3.50245 9.88896 6.58944 9.88896C9.67643 9.88896 12.1778 8.89451 12.1778 7.66672M10.5057 13.6946C9.4976 14.0891 8.11505 14.3335 6.58832 14.3335C3.50245 14.3335 1.00112 13.3391 1.00112 12.1113M18.5272 12.4646C20.4909 14.4169 20.4909 17.5836 18.5272 19.5358C16.5635 21.4881 13.3781 21.4881 11.4144 19.5358C9.45065 17.5836 9.45065 14.4169 11.4144 12.4646C13.3781 10.5124 16.5635 10.5124 18.5272 12.4646Z"
              stroke="#99154B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
