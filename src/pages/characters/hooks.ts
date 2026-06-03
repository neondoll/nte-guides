import { useEffect, useMemo, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/store";
import { fetchArcTypeList } from "@/store/arc-types";
import { fetchCharacterRoleList } from "@/store/character-roles";
import { fetchCharacterList } from "@/store/characters";
import { fetchElementList } from "@/store/elements";
import { fetchRankList } from "@/store/ranks";
import type { ArcTypeId } from "@/types/arc-types";
import type { CharacterRoleId } from "@/types/character-roles";
import type { CharacterListItem } from "@/types/characters";
import type { ElementId } from "@/types/elements";
import type { RankId } from "@/types/ranks";

export const useCharacters = () => {
  const dispatch = useAppDispatch();

  const characters = useAppSelector(state => state.characters.list);
  const charactersLoading = useAppSelector(state => state.characters.listLoading);

  useEffect(() => {
    dispatch(fetchCharacterList());
  }, [dispatch]);

  return { characters, charactersLoading };
};
export const useCharactersFilter = (characters: CharacterListItem[]) => {
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState<{
    arcTypeIds: ArcTypeId[];
    characterRoleIds: CharacterRoleId[];
    elementIds: ElementId[];
    rankIds: RankId[];
  }>({ arcTypeIds: [], characterRoleIds: [], elementIds: [], rankIds: [] });

  const arcTypes = useAppSelector(state => state.arcTypes.list);
  const arcTypesLoading = useAppSelector(state => state.arcTypes.listLoading);
  const characterRoles = useAppSelector(state => state.characterRoles.list);
  const characterRolesLoading = useAppSelector(state => state.characterRoles.listLoading);
  const elements = useAppSelector(state => state.elements.list);
  const elementsLoading = useAppSelector(state => state.elements.listLoading);
  const ranks = useAppSelector(state => state.ranks.list);
  const ranksLoading = useAppSelector(state => state.ranks.listLoading);

  useEffect(() => {
    dispatch(fetchArcTypeList());
    dispatch(fetchCharacterRoleList());
    dispatch(fetchElementList());
    dispatch(fetchRankList());
  }, [dispatch]);

  return {
    arcTypes, arcTypesLoading, characterRoles, characterRolesLoading, elements, elementsLoading, filter,
    filteredCharacters: useMemo(() => {
      let data = characters;

      if (filter.arcTypeIds.length) {
        data = data.filter(item => item.arcTypeId && filter.arcTypeIds.includes(item.arcTypeId));
      }

      if (filter.characterRoleIds.length) {
        data = data.filter(item => item.roleId && filter.characterRoleIds.includes(item.roleId));
      }

      if (filter.elementIds.length) {
        data = data.filter(item => filter.elementIds.includes(item.elementId));
      }

      if (filter.rankIds.length) {
        data = data.filter(item => filter.rankIds.includes(item.rankId));
      }

      return data;
    }, [characters, filter.arcTypeIds, filter.characterRoleIds, filter.elementIds, filter.rankIds]),
    handleFilterChange: setFilter,
    ranks: useMemo(() => {
      return ranks.filter(rank => characters.some(character => character.rankId === rank.id));
    }, [characters, ranks]),
    ranksLoading,
  };
};
