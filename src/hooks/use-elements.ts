import { useState } from "react";

import type { ElementListItem } from "@/types/elements";
import { fetchJson } from "@/utils/api";

export const useElements = () => {
  const [data, setData] = useState<ElementListItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    setLoading(true);

    try {
      const data = await fetchJson<ElementListItem[]>(import.meta.env.BASE_URL + `data/elements/index.json`);

      setData(data.sort((a, b) => a.name.localeCompare(b.name)));
    }
    catch (error) {
      console.error("Ошибка при получении списка элементов:", error);
    }
    finally {
      setLoading(false);
    }
  };

  return { data, fetch, loading };
};
