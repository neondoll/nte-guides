import { useState } from "react";

import type { CartridgeListItem } from "@/types/cartridges";
import { fetchJson } from "@/utils/api";

export const useCartridges = () => {
  const [data, setData] = useState<CartridgeListItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    setLoading(true);

    try {
      const data = await fetchJson<CartridgeListItem[]>(import.meta.env.BASE_URL + `data/cartridges/index.json`);

      setData(data.sort((a, b) => a.name.localeCompare(b.name)));
    }
    catch (error) {
      console.error("Ошибка при получении списка картриджей:", error);
    }
    finally {
      setLoading(false);
    }
  };

  return { data, fetch, loading };
};
