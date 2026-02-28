import React, { memo } from "react";

function EmptyState({
  title = "No Data Available",
  description = "There is no data to display for the selected filters.",
  actionLabel,
  onAction,
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 px-6 bg-white rounded-xl shadow-sm border border-gray-200">
      
      {/* Icon */}
      <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-gray-100">
        <svg
          className="w-8 h-8 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 14l2 2 4-4M7 7h10M7 11h6m-6 4h4"
          />
        </svg>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-700">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-500 max-w-sm">
        {description}
      </p>

      {/* Optional Action Button */}
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="mt-6 px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}

export default memo(EmptyState);