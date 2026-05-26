import { useState } from "react";

import type { ArcListItem } from "@/types/arcs";
import { fetchJson } from "@/utils/api";

export const useArcs = () => {
  const [data, setData] = useState<ArcListItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    setLoading(true);

    try {
      const data = await fetchJson<ArcListItem[]>(import.meta.env.BASE_URL + `data/arcs/index.json`);

      setData(data.sort((a, b) => a.name.localeCompare(b.name)));
    }
    catch (error) {
      console.error("Ошибка при получении списка дуг:", error);
    }
    finally {
      setLoading(false);
    }
  };

  return { data, fetch, loading };
};
