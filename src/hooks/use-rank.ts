import { useState } from "react";

import type { Rank } from "@/types/ranks";
import { fetchJson } from "@/utils/api";

export const useRank = (id: Rank["id"]) => {
  const [data, setData] = useState<Rank>();
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    setLoading(true);

    try {
      const data = await fetchJson<Rank>(import.meta.env.BASE_URL + `data/ranks/details/${id}.json`);

      setData(data);
    }
    catch (error) {
      console.error(`Ошибка при получении rank с ID '${id}':`, error);
    }
    finally {
      setLoading(false);
    }
  };

  return { data, fetch, loading };
};
