import { useState } from "react";

import type { Module } from "@/types/modules";
import { fetchJson } from "@/utils/api";

export const useModules = () => {
  const [data, setData] = useState<Module[]>([]);
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    setLoading(true);

    try {
      const data = await fetchJson<Module[]>(import.meta.env.BASE_URL + `data/modules/index.json`);

      setData(data);
    }
    catch (error) {
      console.error("Ошибка при получении списка модулей:", error);
    }
    finally {
      setLoading(false);
    }
  };

  return { data, fetch, loading };
};
