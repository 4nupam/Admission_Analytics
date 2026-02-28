import React, { memo, useMemo } from "react";

function MetricCard({ title = "Total Applicants", value = 0 }) {

  const highlightClass = useMemo(() => {
    if (value > 1000) return "border-l-4 border-red-500";
    if (value > 500) return "border-l-4 border-orange-400";
    return "border-l-4 border-blue-500";
  }, [value]);

  return (
    <section
      className={`bg-white rounded-xl shadow-md p-6 transition duration-300 hover:shadow-lg ${highlightClass}`}
    >
      <h3 className="text-gray-500 text-sm font-medium">
        {title}
      </h3>

      <p className="mt-3 text-3xl font-bold text-gray-800">
        {value?.toLocaleString()}
      </p>
    </section>
  );
}

export default memo(MetricCard);