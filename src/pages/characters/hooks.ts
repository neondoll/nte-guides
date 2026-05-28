import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/store";
import { fetchCharacterList } from "@/store/characters";

export const useCharacters = () => {
  const dispatch = useAppDispatch();

  const characters = useAppSelector(state => state.characters.list);
  const loading = useAppSelector(state => state.characters.listLoading);

  useEffect(() => {
    dispatch(fetchCharacterList());
  }, [dispatch]);

  return { characters, loading };
};
