import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { CharacterBuildGuide, CharacterBuildGuideListItem } from "@/types/characters-build-guide";
import { fetchJson } from "@/utils/api";

export interface CharactersBuildGuideState {
  details: { [P in CharacterBuildGuide["id"]]?: CharacterBuildGuide };
  detailsLoading: boolean;
  list: CharacterBuildGuideListItem[];
  listLoading: boolean;
}

const initialState: CharactersBuildGuideState = { details: {}, detailsLoading: false, list: [], listLoading: false };

export const fetchCharacterBuildGuide = createAsyncThunk<CharacterBuildGuide, CharacterBuildGuide["id"]>("charactersBuildGuide/fetch", async (characterId, { getState }) => {
  const state = getState() as { charactersBuildGuide: CharactersBuildGuideState };
  const stateCharacterBuildGuide = state.charactersBuildGuide.details[characterId];

  if (stateCharacterBuildGuide) {
    console.log(`Руководство по сборке персонажа c ID "${characterId}" найдено в хранилище`);

    return stateCharacterBuildGuide;
  }

  console.log(`Загрузка руководства по сборке персонажа c ID "${characterId}" с сервера`);

  return await fetchJson<CharacterBuildGuide>(`${import.meta.env.BASE_URL}data/characters-build-guide/details/${characterId}.json`);
});
export const fetchCharacterBuildGuideList = createAsyncThunk<CharacterBuildGuideListItem[]>("charactersBuildGuide/fetchList", async (_, { getState }) => {
  const state = getState() as { charactersBuildGuide: CharactersBuildGuideState };
  const stateList = state.charactersBuildGuide.list;

  if (stateList.length) {
    console.log("Список руководств по сборке персонажей найден в хранилище");

    return stateList;
  }

  console.log("Загрузка списка руководств по сборке персонажей с сервера");

  return await fetchJson<CharacterBuildGuide[]>(`${import.meta.env.BASE_URL}data/characters-build-guide/index.json`);
});

export const charactersBuildGuideSlice = createSlice({
  name: "charactersBuildGuide",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchCharacterBuildGuide
      .addCase(fetchCharacterBuildGuide.pending, (state) => {
        state.detailsLoading = true;
      })
      .addCase(fetchCharacterBuildGuide.fulfilled, (state, action) => {
        state.detailsLoading = false;
        state.details[action.payload.id] = action.payload;
      })
      .addCase(fetchCharacterBuildGuide.rejected, (state, action) => {
        state.detailsLoading = false;
        console.error(action.error.message ?? `Ошибка загрузки руководства по сборке персонажа с ID "${action.meta.arg}"`);
      })
      // fetchCharacterBuildGuideList
      .addCase(fetchCharacterBuildGuideList.pending, (state) => {
        state.listLoading = true;
      })
      .addCase(fetchCharacterBuildGuideList.fulfilled, (state, action) => {
        state.listLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchCharacterBuildGuideList.rejected, (state, action) => {
        state.listLoading = false;
        console.error(action.error.message ?? "Ошибка загрузки списка руководств по сборке персонажей");
      });
  },
});

export default charactersBuildGuideSlice.reducer;
