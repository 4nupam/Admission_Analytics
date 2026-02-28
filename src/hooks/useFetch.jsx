import { useEffect, useState, useCallback } from "react";

export default function useFetch(api, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (signal) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(api, { ...options, signal });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  }, [api, options]);

  useEffect(() => {
    if (!api) return;

    const controller = new AbortController();
    fetchData(controller.signal);

    return () => {
      controller.abort(); // cleanup on unmount
    };
  }, [api]);

  return { data, loading, error, refetch: () => fetchData() };
}