import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { ArcType } from "@/types/arc-types";
import { fetchJson } from "@/utils/api";

export type ArcTypesState = {
  details: { [P in ArcType["id"]]?: ArcType };
  detailsLoading: boolean;
  list: ArcType[];
  listLoading: boolean;
};

const initialState: ArcTypesState = { details: {}, detailsLoading: false, list: [], listLoading: false };

export const fetchArcType = createAsyncThunk<ArcType, ArcType["id"]>("arcTypes/fetch", async (arcTypeId, { getState }) => {
  const state = getState() as { arcTypes: ArcTypesState };
  const stateArcType = state.arcTypes.details[arcTypeId];

  if (stateArcType) {
    console.log(`Тип дуги c ID "${arcTypeId}" найден в хранилище`);

    return stateArcType;
  }

  console.log(`Загрузка типа дуги c ID "${arcTypeId}" с сервера`);

  return await fetchJson<ArcType>(`${import.meta.env.BASE_URL}data/arc-types/details/${arcTypeId}.json`);
});
export const fetchArcTypeList = createAsyncThunk<ArcType[]>("arcTypes/fetchList", async (_, { getState }) => {
  const state = getState() as { arcTypes: ArcTypesState };
  const stateList = state.arcTypes.list;

  if (stateList.length) {
    console.log("Список типов дуг найден в хранилище");

    return stateList;
  }

  console.log("Загрузка списка типов дуг с сервера");

  const list = await fetchJson<ArcType[]>(`${import.meta.env.BASE_URL}data/arc-types/index.json`);

  return list.sort((a, b) => a.name.localeCompare(b.name));
});

export const arcTypesSlice = createSlice({
  name: "arcTypes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchArcType
      .addCase(fetchArcType.pending, (state) => {
        state.detailsLoading = true;
      })
      .addCase(fetchArcType.fulfilled, (state, action) => {
        state.detailsLoading = false;
        state.details[action.payload.id] = action.payload;
      })
      .addCase(fetchArcType.rejected, (state, action) => {
        state.detailsLoading = false;
        console.error(action.error.message ?? `Ошибка загрузки типа дуги с ID "${action.meta.arg}"`);
      })
      // fetchArcTypeList
      .addCase(fetchArcTypeList.pending, (state) => {
        state.listLoading = true;
      })
      .addCase(fetchArcTypeList.fulfilled, (state, action) => {
        state.listLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchArcTypeList.rejected, (state, action) => {
        state.listLoading = false;
        console.error(action.error.message ?? "Ошибка загрузки списка типов дуг");
      });
  },
});

export default arcTypesSlice.reducer;
