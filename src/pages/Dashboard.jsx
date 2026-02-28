import { useMemo, useState, lazy, Suspense } from "react";
import MetricCard from "../Component/Card/MetricCard";
import useFetch from "../hooks/useFetch";
import api from "../api/analytics";
import Loader from "../Component/Loader";
import EmptyState from "../Component/EmptyState";

// Lazy Load Charts (Code Splitting)
const ProgramBarChart = lazy(() =>
  import("../Component/Charts/ProgramBarChart")
);
const TrendLineChart = lazy(() =>
  import("../Component/Charts/TrendLineChart")
);

export default function Dashboard() {
  const { data, loading, error, refetch } = useFetch(api);

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  // Memoized filtered trends
  const filteredTrends = useMemo(() => {
    if (!data?.trends) return [];
    if (!from || !to) return data.trends;

    return data.trends.filter(
      (item) => item.date >= from && item.date <= to
    );
  }, [data?.trends, from, to]);

  
  if (loading) {
    return (
      <div className="page-center">
        <Loader />
      </div>
    );
  }

  
  if (error) {
    return (
      <div className="page-center p-6">
        <EmptyState
          title="Something went wrong"
          description="Unable to fetch analytics data."
          actionLabel="Retry"
          onAction={refetch}
        />
      </div>
    );
  }

  
  if (!data) {
    return (
      <div className="page-center p-6">
        <EmptyState />
      </div>
    );
  }

  return (
    <div className="page-container">
      
      {/* Header */}
      <div className="dashboard-header">
        <h1 className="page-title">
          Admission Analytics Dashboard
        </h1>

        <button
          onClick={refetch}
          className="btn-primary"
        >
          Refresh
        </button>
      </div>

      {/* Date Filter */}
      <div className="filter-container">
        <input
          type="date"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="input-date"
        />
        <input
          type="date"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="input-date"
        />
      </div>

      {/* Metric Cards */}
      <div className="metrics-grid">
        <MetricCard
          title="Total Applicants"
          value={data.totalApplicants}
        />
        <MetricCard
          title="Verified Applicants"
          value={data.verifiedApplicants}
        />
        <MetricCard
          title="Rejected Applicants"
          value={data.rejectedApplicants}
        />
      </div>

      {/* Charts */}
      <div className="charts-grid">

        {/* Program Chart */}
        <div className="chart-card">
          <h2 className="chart-title">
            Applications Per Program
          </h2>

          {data.programApplications?.length === 0 ? (
            <EmptyState
              title="No Program Data"
              description="No applications found."
            />
          ) : (
            <Suspense fallback={<Loader />}>
              <ProgramBarChart data={data.programApplications} />
            </Suspense>
          )}
        </div>

        {/* Trend Chart */}
        <div className="chart-card">
          <h2 className="chart-title">
            Application Trends
          </h2>

          {filteredTrends?.length === 0 ? (
            <EmptyState
              title="No Trend Data"
              description="Try adjusting date range."
            />
          ) : (
            <Suspense fallback={<Loader />}>
              <TrendLineChart data={filteredTrends} />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
}