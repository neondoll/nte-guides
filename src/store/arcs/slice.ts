import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { Arc, ArcListItem } from "@/types/arcs";
import { fetchJson } from "@/utils/api";

export interface ArcsState {
  details: { [P in Arc["id"]]?: Arc };
  detailsLoading: boolean;
  list: ArcListItem[];
  listLoading: boolean;
}

const initialState: ArcsState = { details: {}, detailsLoading: false, list: [], listLoading: false };

export const fetchArc = createAsyncThunk<Arc, Arc["id"]>("arcs/fetch", async (arcId, { getState }) => {
  const state = getState() as { arcs: ArcsState };
  const stateArc = state.arcs.details[arcId];

  if (stateArc) {
    console.log(`Дуга c ID "${arcId}" найдена в хранилище`);

    return stateArc;
  }

  console.log(`Загрузка дуги c ID "${arcId}" с сервера`);

  return await fetchJson<Arc>(`${import.meta.env.BASE_URL}data/arcs/details/${arcId}.json`);
});
export const fetchArcList = createAsyncThunk<ArcListItem[]>("arcs/fetchList", async (_, { getState }) => {
  const state = getState() as { arcs: ArcsState };
  const stateList = state.arcs.list;

  if (stateList.length) {
    console.log("Список дуг найден в хранилище");

    return stateList;
  }

  console.log("Загрузка списка дуг с сервера");

  const list = await fetchJson<ArcListItem[]>(`${import.meta.env.BASE_URL}data/arcs/index.json`);

  return list.sort((a, b) => a.name.localeCompare(b.name));
});

export const arcsSlice = createSlice({
  name: "arcs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchArc
      .addCase(fetchArc.pending, (state) => {
        state.detailsLoading = true;
      })
      .addCase(fetchArc.fulfilled, (state, action) => {
        state.detailsLoading = false;
        state.details[action.payload.id] = action.payload;
      })
      .addCase(fetchArc.rejected, (state, action) => {
        state.detailsLoading = false;
        console.error(action.error.message ?? `Ошибка загрузки дуги с ID "${action.meta.arg}"`);
      })
      // fetchArcList
      .addCase(fetchArcList.pending, (state) => {
        state.listLoading = true;
      })
      .addCase(fetchArcList.fulfilled, (state, action) => {
        state.listLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchArcList.rejected, (state, action) => {
        state.listLoading = false;
        console.error(action.error.message ?? "Ошибка загрузки списка дуг");
      });
  },
});

export default arcsSlice.reducer;
