import { useState } from "react";

import type { ArcTypeListItem } from "@/types/arc-types";
import { fetchJson } from "@/utils/api";

export const useArcTypes = () => {
  const [data, setData] = useState<ArcTypeListItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    setLoading(true);

    try {
      const data = await fetchJson<ArcTypeListItem[]>(import.meta.env.BASE_URL + `data/arc-types/index.json`);

      setData(data.sort((a, b) => a.name.localeCompare(b.name)));
    }
    catch (error) {
      console.error("Ошибка при получении списка типов дуг:", error);
    }
    finally {
      setLoading(false);
    }
  };

  return { data, fetch, loading };
};
