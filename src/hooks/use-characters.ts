import { useState } from "react";

import type { CharacterListItem } from "@/types/characters";
import { fetchJson } from "@/utils/api";

export const useCharacters = () => {
  const [data, setData] = useState<CharacterListItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    setLoading(true);

    try {
      const data = await fetchJson<CharacterListItem[]>(import.meta.env.BASE_URL + `data/characters/index.json`);

      setData(data.sort((a, b) => a.name.localeCompare(b.name)));
    }
    catch (error) {
      console.error("Ошибка при получении списка персонажей:", error);
    }
    finally {
      setLoading(false);
    }
  };

  return { data, fetch, loading };
};
