import { useState } from "react";

import type { RankListItem } from "@/types/ranks";
import { fetchJson } from "@/utils/api";

export const useRanks = () => {
  const [data, setData] = useState<RankListItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    setLoading(true);

    try {
      const data = await fetchJson<RankListItem[]>(import.meta.env.BASE_URL + `data/ranks/index.json`);

      setData(data.sort((a, b) => a.name.localeCompare(b.name)));
    }
    catch (error) {
      console.error("Ошибка при получении списка рангов:", error);
    }
    finally {
      setLoading(false);
    }
  };

  return { data, fetch, loading };
};
