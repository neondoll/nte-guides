import { useState } from "react";

import type { Cartridge } from "@/types/cartridges";
import { fetchJson } from "@/utils/api";

export const useCartridge = (id: Cartridge["id"]) => {
  const [data, setData] = useState<Cartridge>();
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    setLoading(true);

    try {
      const data = await fetchJson<Cartridge>(import.meta.env.BASE_URL + `data/cartridges/details/${id}.json`);

      setData(data);
    }
    catch (error) {
      console.error(`Ошибка при получении картриджа с ID '${id}':`, error);
    }
    finally {
      setLoading(false);
    }
  };

  return { data, fetch, loading };
};
