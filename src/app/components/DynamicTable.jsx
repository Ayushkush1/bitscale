"use client";

import React, { useState } from "react";

export default function DynamicTable() {
  const [columns, setColumns] = useState([
    {
      header: "Input Column",
      key: "input",
      icon: (
        <svg
          width="22"
          height="24"
          viewBox="0 0 22 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="22"
            height="23"
            transform="translate(0 0.5)"
            fill="black"
          />
          <path
            d="M7.97869 17.5H6.34801L10.0121 7.31818H11.7869L15.451 17.5H13.8203L10.9418 9.16761H10.8622L7.97869 17.5ZM8.25213 13.5128H13.5419V14.8054H8.25213V13.5128Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      header: "Action Column",
      key: "action",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 6h6M4.5 6l7.5 7.5L19.5 6"
          />
        </svg>
      ),
    },
    {
      header: "Enrich Company",
      key: "enrich",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16l9-9 9 9"
          />
        </svg>
      ),
    },
  ]);

  const [rows, setRows] = useState([
    {
      input: "Oct 12, 2024 at 14:08 PM",
      action: (
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.364 5.636a9 9 0 11-12.728 12.728 9 9 0 0112.728-12.728z"
            />
          </svg>
          <span>Bitscale Evaluation - Account relevance</span>
        </div>
      ),
      enrich: (
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16l9-9 9 9"
            />
          </svg>
          <span>Google Evaluation - Relevancy check</span>
        </div>
      ),
    },
    {
      input: "Oct 12, 2024 at 14:08 PM",
      action: (
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.364 5.636a9 9 0 11-12.728 12.728 9 9 0 0112.728-12.728z"
            />
          </svg>
          <span>Bitscale Evaluation - Account relevance</span>
        </div>
      ),
      enrich: (
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 text-yellow-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4m0 4h.01m6.938-2.016A9 9 0 1112.016 5.062a9 9 0 016.938 6.938z"
            />
          </svg>
          <span>Bitscale Evaluation - Account relevance</span>
        </div>
      ),
    },
    {
      input: "Oct 12, 2024 at 14:08 PM",
      action: (
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.293 9.293a1 1 0 011.414 0l1.586 1.586a1 1 0 010 1.414l-7.793 7.793a1 1 0 01-.632.278l-3.543.295a.5.5 0 01-.554-.554l.295-3.543a1 1 0 01.278-.632l7.793-7.793z"
            />
          </svg>
          <a
            href="https://www.linkedin.com/bitscale"
            className="text-blue-500 underline"
          >
            https://www.linkedin.com/bitscale
          </a>
        </div>
      ),
      enrich: (
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16l9-9 9 9"
            />
          </svg>
          <span>Google Evaluation - Relevancy check</span>
        </div>
      ),
    },
    {
      input: "Oct 12, 2024 at 14:08 PM",
      action: (
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.364 5.636a9 9 0 11-12.728 12.728 9 9 0 0112.728-12.728z"
            />
          </svg>
          <span>Bitscale Evaluation - Account relevance</span>
        </div>
      ),
      enrich: (
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 text-yellow-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4m0 4h.01m6.938-2.016A9 9 0 1112.016 5.062a9 9 0 016.938 6.938z"
            />
          </svg>
          <span>Bitscale Evaluation - Account relevance</span>
        </div>
      ),
    },
    {
      input: "Oct 12, 2024 at 14:08 PM",
      action: (
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.364 5.636a9 9 0 11-12.728 12.728 9 9 0 0112.728-12.728z"
            />
          </svg>
          <span>Bitscale Evaluation - Account relevance</span>
        </div>
      ),
      enrich: (
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16l9-9 9 9"
            />
          </svg>
          <span>Google Evaluation - Relevancy check</span>
        </div>
      ),
    },
  ]);

  // Add Row Handler
  const addRow = () => {
    const newRow = {};
    columns.forEach((col) => {
      newRow[col.key] = ""; // Empty cell for the new row
    });
    setRows([...rows, newRow]);
  };

  // Add Column Handler
  const addColumn = () => {
    const newColumnKey = `column${columns.length + 1}`;
    setColumns([
      ...columns,
      { header: `New Column ${columns.length + 1}`, key: newColumnKey },
    ]);

    setRows(
      rows.map((row) => ({
        ...row,
        [newColumnKey]: "", // Empty cell for the new column
      }))
    );
  };

  return (
    <div className="">
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-200">
          {/* Table Header */}
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 px-4 py-2 text-center text-gray-700 font-semibold"></th>
              <th className="border border-gray-200 text-center text-gray-700 font-semibold"></th>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="border border-gray-200 items-center px-4 py-2 text-left text-gray-700 text-md font-semibold"
                >
                  <div className="flex gap-2 items-center">
                    {col.icon}
                    {col.header}
                  </div>
                </th>
              ))}
              {/* Add Column Button */}
              <th className="border border-gray-200 px-4 py-2 text-center bg-gray-100">
                <button
                  onClick={addColumn}
                  className="text-blue-500 underline text-md font-normal hover:text-blue-700"
                >
                  + Add Column
                </button>
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="bg-gray-50">
                {/* Row Index */}
                <td className="border text-sm border-gray-200 text-center text-gray-800">
                  {rowIndex + 1}
                </td>
                {/* Play Button */}
                <td className="border pl-3 border-gray-200 text-center">
                  <button className="w-6 h-6 rounded-full border-2 border-blue-400 flex items-center justify-center text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.5 4.5v15l13-7.5-13-7.5z"
                      />
                    </svg>
                  </button>
                </td>
                {/* Dynamic Columns */}
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className="border text-sm border-gray-200 px-4 py-2 text-left text-gray-800"
                  >
                    {row[col.key]}
                  </td>
                ))}
                {/* Add Column Empty Cell */}
                <td className="border border-gray-200 px-4 py-2 bg-gray-50"></td>
              </tr>
            ))}

            {/* Add Row Button in Input Column */}
            <tr className="bg-gray-50 text-sm">
              <td className="border border-gray-200 px-4 py-2"></td>
              <td className="border border-gray-200 px-4 py-2"></td>
              <td className="border border-gray-200 px-4 py-2 text-center">
                <button
                  onClick={addRow}
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  + Add Row
                </button>
              </td>
              {columns.slice(1).map((_, colIndex) => (
                <td
                  key={`add-row-${colIndex}`}
                  className="border border-gray-200 px-4 py-2 bg-gray-50"
                ></td>
              ))}
              {/* Blank cell for the last column */}
              <td className="border border-gray-200 px-4 py-2 bg-gray-50"></td>
            </tr>

            {/* Empty Rows for Remaining Space */}
            {Array(11)
              .fill(null)
              .map((_, emptyRowIndex) => (
                <tr key={`empty-${emptyRowIndex}`} className="bg-gray-100">
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  {columns.map((_, emptyColIndex) => (
                    <td
                      key={`empty-cell-${emptyColIndex}`}
                      className="border border-gray-200 px-4 py-4"
                    >
                      {/* Empty Cell */}
                    </td>
                  ))}
                  <td className="border border-gray-200 px-4 py-4 bg-gray-100"></td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
