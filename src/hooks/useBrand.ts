import { useState, useEffect } from "react";
import { brandService } from "../services/brandService";

export const useBrands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBrands = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await brandService.getBrands();
      setBrands(data);
    } catch (err: any) {
      setError(err.message || "Error loading brands");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  return { brands, loading, error, refetch: fetchBrands };
};
