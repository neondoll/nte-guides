import { useState } from "react";

import type { Character } from "@/types/characters";
import { fetchJson } from "@/utils/api";

export const useCharacter = (id: Character["id"]) => {
  const [data, setData] = useState<Character>();
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    setLoading(true);

    try {
      const data = await fetchJson<Character>(import.meta.env.BASE_URL + `data/characters/details/${id}.json`);

      setData(data);
    }
    catch (error) {
      console.error(`Ошибка при получении персонажа с ID '${id}':`, error);
    }
    finally {
      setLoading(false);
    }
  };

  return { data, fetch, loading };
};
