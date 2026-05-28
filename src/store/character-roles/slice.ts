import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { CharacterRole, CharacterRoleListItem } from "@/types/character-roles";
import { fetchJson } from "@/utils/api";

export interface CharacterRolesState {
  details: { [P in CharacterRole["id"]]?: CharacterRole };
  detailsLoading: boolean;
  list: CharacterRoleListItem[];
  listLoading: boolean;
}

const initialState: CharacterRolesState = { details: {}, detailsLoading: false, list: [], listLoading: false };

export const fetchCharacterRole = createAsyncThunk<CharacterRole, CharacterRole["id"]>("characterRoles/fetch", async (characterRoleId, { getState }) => {
  const state = getState() as { characterRoles: CharacterRolesState };
  const stateCharacterRole = state.characterRoles.details[characterRoleId];

  if (stateCharacterRole) {
    console.log(`Роль персонажа c ID "${characterRoleId}" найдена в хранилище`);

    return stateCharacterRole;
  }

  console.log(`Загрузка роли персонажа c ID "${characterRoleId}" с сервера`);

  return await fetchJson<CharacterRole>(`${import.meta.env.BASE_URL}data/character-roles/details/${characterRoleId}.json`);
});
export const fetchCharacterRoleList = createAsyncThunk<CharacterRoleListItem[]>("characterRoles/fetchList", async (_, { getState }) => {
  const state = getState() as { characterRoles: CharacterRolesState };
  const stateList = state.characterRoles.list;

  if (stateList.length) {
    console.log("Список ролей персонажей найден в хранилище");

    return stateList;
  }

  console.log("Загрузка списка ролей персонажей с сервера");

  const list = await fetchJson<CharacterRoleListItem[]>(`${import.meta.env.BASE_URL}data/character-roles/index.json`);

  return list.sort((a, b) => a.name.localeCompare(b.name));
});

export const characterRolesSlice = createSlice({
  name: "characterRoles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchCharacterRole
      .addCase(fetchCharacterRole.pending, (state) => {
        state.detailsLoading = true;
      })
      .addCase(fetchCharacterRole.fulfilled, (state, action) => {
        state.detailsLoading = false;
        state.details[action.payload.id] = action.payload;
      })
      .addCase(fetchCharacterRole.rejected, (state, action) => {
        state.detailsLoading = false;
        console.error(action.error.message ?? `Ошибка загрузки роли персонажа с ID "${action.meta.arg}"`);
      })
      // fetchCharacterRoleList
      .addCase(fetchCharacterRoleList.pending, (state) => {
        state.listLoading = true;
      })
      .addCase(fetchCharacterRoleList.fulfilled, (state, action) => {
        state.listLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchCharacterRoleList.rejected, (state, action) => {
        state.listLoading = false;
        console.error(action.error.message ?? "Ошибка загрузки списка ролей персонажей");
      });
  },
});

export default characterRolesSlice.reducer;
