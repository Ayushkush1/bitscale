"use client";

import React, { useState } from "react";

export default function DynamicTable() {
  const [columns, setColumns] = useState([
    { header: "Input Column",  key: "input" },
    { header: "Action Column", key: "action" },
    { header: "Enrich Company", key: "enrich" },
  ]);

  const [rows, setRows] = useState([
    {
      input: "Oct 12, 2024 at 14:08 PM",
      action: "⚠ Bitscale Evaluation - Account relevance",
      enrich: "Bitscale Evaluation - Account relevance",
    },
    {
      input: "Oct 12, 2024 at 14:08 PM",
      action: "⚠ cell data size exceeds limit",
      enrich: "BMW Evaluation - Relevancy check",
    },
    {
      input: "Oct 12, 2024 at 14:08 PM",
      action: (
        <a
          href="https://www.linkedin.com/bitscale"
          className="text-blue-500 underline"
        >
          https://www.linkedin.com/bitscale
        </a>
      ),
      enrich: "Google Evaluation - Lilevancy check",
    },
    {
      input: "Oct 12, 2024 at 14:08 PM",
      action: "⚠ Loading data, Please wait",
      enrich: "Apple Evaluation - Olvancy check",
    },
    {
      input: "Oct 12, 2024 at 14:08 PM",
      action: "⚠ Loading data, Please wait",
      enrich: "Figma Evaluation - Evancy check",
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
              {/* Row Index Header */}
              <th className="border border-gray-200 px-4 py-2 text-center text-gray-700 font-semibold"></th>
              {/* Play Button Header */}
              <th className="border border-gray-200 text-center text-gray-700 font-semibold"></th>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="border border-gray-200 px-4 py-2 text-left text-gray-700 text-md font-semibold"
                >
                  
                  {col.header}
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
