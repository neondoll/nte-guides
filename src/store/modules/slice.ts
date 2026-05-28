import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { Module } from "@/types/modules";
import { fetchJson } from "@/utils/api";

export interface ModulesState {
  details: { [P in Module["id"]]?: Module };
  detailsLoading: boolean;
  list: Module[];
  listLoading: boolean;
}

const initialState: ModulesState = { details: {}, detailsLoading: false, list: [], listLoading: false };

export const fetchModule = createAsyncThunk<Module, Module["id"]>("modules/fetch", async (moduleId, { getState }) => {
  const state = getState() as { modules: ModulesState };
  const stateModule = state.modules.details[moduleId];

  if (stateModule) {
    console.log(`Модуль c ID "${moduleId}" найден в хранилище`);

    return stateModule;
  }

  console.log(`Загрузка модуля c ID "${moduleId}" с сервера`);

  return await fetchJson<Module>(`${import.meta.env.BASE_URL}data/modules/details/${moduleId}.json`);
});
export const fetchModuleList = createAsyncThunk<Module[]>("modules/fetchList", async (_, { getState }) => {
  const state = getState() as { modules: ModulesState };
  const stateList = state.modules.list;

  if (stateList.length) {
    console.log("Список модулей найден в хранилище");

    return stateList;
  }

  console.log("Загрузка списка модулей с сервера");

  return await fetchJson<Module[]>(`${import.meta.env.BASE_URL}data/modules/index.json`);
});

export const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchModule
      .addCase(fetchModule.pending, (state) => {
        state.detailsLoading = true;
      })
      .addCase(fetchModule.fulfilled, (state, action) => {
        state.detailsLoading = false;
        state.details[action.payload.id] = action.payload;
      })
      .addCase(fetchModule.rejected, (state, action) => {
        state.detailsLoading = false;
        console.error(action.error.message ?? `Ошибка загрузки модуля с ID "${action.meta.arg}"`);
      })
      // fetchModuleList
      .addCase(fetchModuleList.pending, (state) => {
        state.listLoading = true;
      })
      .addCase(fetchModuleList.fulfilled, (state, action) => {
        state.listLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchModuleList.rejected, (state, action) => {
        state.listLoading = false;
        console.error(action.error.message ?? "Ошибка загрузки списка модулей");
      });
  },
});

export default modulesSlice.reducer;
