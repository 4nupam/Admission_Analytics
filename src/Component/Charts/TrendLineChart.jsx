import React, { memo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import EmptyState from "../EmptyState";

function TrendLineChart({ data = [] }) {
  if (!data || data.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 h-[350px] flex items-center justify-center">
        <EmptyState
          title="No Trend Data"
          description="Try adjusting the date filter."
        />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 h-[350px]">

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="date"
            tickFormatter={(value) =>
              new Date(value).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
              })
            }
          />

          <YAxis />

          <Tooltip
            labelFormatter={(value) =>
              new Date(value).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })
            }
          />

          <Line
            type="monotone"
            dataKey="count"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default memo(TrendLineChart);