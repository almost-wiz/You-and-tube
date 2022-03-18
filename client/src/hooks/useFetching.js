import { useState } from "react";

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const fetching = async (...args) => {
    try {
      setIsLoading(true);
      await callback(...args);
      setError("");
      setSuccess(true);
    } catch (e) {
      setSuccess(false);
      setError(e?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error, success];
};
