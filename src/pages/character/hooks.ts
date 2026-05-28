import { useEffect, useMemo } from "react";

import { useAppDispatch, useAppSelector } from "@/store";
import { fetchArcType } from "@/store/arc-types";
import { fetchCharacterRole } from "@/store/character-roles";
import { fetchCharacter } from "@/store/characters";
import { fetchElement } from "@/store/elements";
import { fetchRank } from "@/store/ranks";
import type { Character } from "@/types/characters";

export const useCharacter = (id: Character["id"]) => {
  const dispatch = useAppDispatch();

  const arcTypeLoading = useAppSelector(state => state.arcTypes.detailsLoading);
  const arcTypes = useAppSelector(state => state.arcTypes.details);
  const characterLoading = useAppSelector(state => state.characters.detailsLoading);
  const characterRoleLoading = useAppSelector(state => state.characterRoles.detailsLoading);
  const characterRoles = useAppSelector(state => state.characterRoles.details);
  const characters = useAppSelector(state => state.characters.details);
  const elementLoading = useAppSelector(state => state.elements.detailsLoading);
  const elements = useAppSelector(state => state.elements.details);
  const rankLoading = useAppSelector(state => state.ranks.detailsLoading);
  const ranks = useAppSelector(state => state.ranks.details);

  const loading = useMemo(() => {
    return arcTypeLoading || characterLoading || characterRoleLoading || elementLoading || rankLoading;
  }, [arcTypeLoading, characterLoading, characterRoleLoading, elementLoading, rankLoading]);

  const character = useMemo(() => characters[id], [characters, id]);
  const arcType = useMemo(() => character?.arcTypeId ? arcTypes[character.arcTypeId] : undefined, [arcTypes, character]);
  const characterRole = useMemo(() => character?.roleId ? characterRoles[character.roleId] : undefined, [character, characterRoles]);
  const element = useMemo(() => character?.elementId ? elements[character.elementId] : undefined, [character, elements]);
  const rank = useMemo(() => character?.rankId ? ranks[character.rankId] : undefined, [character, ranks]);

  useEffect(() => {
    dispatch(fetchCharacter(id));
  }, [dispatch, id]);
  useEffect(() => {
    if (character) {
      dispatch(fetchElement(character.elementId));
      dispatch(fetchRank(character.rankId));

      if (character.arcTypeId) {
        dispatch(fetchArcType(character.arcTypeId));
      }

      if (character.roleId) {
        dispatch(fetchCharacterRole(character.roleId));
      }
    }
  }, [character, dispatch]);

  return { arcType, character, characterRole, element, loading, rank };
};
