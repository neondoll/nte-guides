import { useState } from "react";

import type { CharacterRoleListItem } from "@/types/character-roles";
import { fetchJson } from "@/utils/api";

export const useCharacterRoles = () => {
  const [data, setData] = useState<CharacterRoleListItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    setLoading(true);

    try {
      const data = await fetchJson<CharacterRoleListItem[]>(import.meta.env.BASE_URL + `data/character-roles/index.json`);

      setData(data.sort((a, b) => a.name.localeCompare(b.name)));
    }
    catch (error) {
      console.error("Ошибка при получении списка ролей персонажей:", error);
    }
    finally {
      setLoading(false);
    }
  };

  return { data, fetch, loading };
};
