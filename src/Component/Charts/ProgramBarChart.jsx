import React, { memo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import EmptyState from "../EmptyState";

function ProgramBarChart({ data = [] }) {
  if (!data || data.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 h-[350px] flex items-center justify-center">
        <EmptyState
          title="No Program Data"
          description="No applications available for programs."
        />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 h-[350px]">
      

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          
          <XAxis
            dataKey="program"
            angle={-20}
            textAnchor="end"
            interval={0}
          />
          
          <YAxis />
          
          <Tooltip />
          
          <Bar
            dataKey="count"
            fill="#2563eb"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default memo(ProgramBarChart);