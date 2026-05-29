import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { ArcGuide, ArcGuideListItem } from "@/types/arcs-guide";
import { fetchJson } from "@/utils/api";

export interface ArcsGuideState {
  details: { [P in ArcGuide["id"]]?: ArcGuide };
  detailsLoading: boolean;
  list: ArcGuideListItem[];
  listLoading: boolean;
}

const initialState: ArcsGuideState = { details: {}, detailsLoading: false, list: [], listLoading: false };

export const fetchArcGuide = createAsyncThunk<ArcGuide, ArcGuide["id"]>("arcsGuide/fetch", async (arcId, { getState }) => {
  const state = getState() as { arcsGuide: ArcsGuideState };
  const stateArcGuide = state.arcsGuide.details[arcId];

  if (stateArcGuide) {
    console.log(`Руководство по дуге c ID "${arcId}" найдено в хранилище`);

    return stateArcGuide;
  }

  console.log(`Загрузка руководства по дуге c ID "${arcId}" с сервера`);

  return await fetchJson<ArcGuide>(`${import.meta.env.BASE_URL}data/arcs-guide/details/${arcId}.json`);
});
export const fetchArcGuideList = createAsyncThunk<ArcGuideListItem[]>("arcsGuide/fetchList", async (_, { getState }) => {
  const state = getState() as { arcsGuide: ArcsGuideState };
  const stateList = state.arcsGuide.list;

  if (stateList.length) {
    console.log("Список руководств по дугам найден в хранилище");

    return stateList;
  }

  console.log("Загрузка списка руководств по дугам с сервера");

  return await fetchJson<ArcGuide[]>(`${import.meta.env.BASE_URL}data/arcs-guide/index.json`);
});

export const arcsGuideSlice = createSlice({
  name: "arcsGuide",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchArcGuide
      .addCase(fetchArcGuide.pending, (state) => {
        state.detailsLoading = true;
      })
      .addCase(fetchArcGuide.fulfilled, (state, action) => {
        state.detailsLoading = false;
        state.details[action.payload.id] = action.payload;
      })
      .addCase(fetchArcGuide.rejected, (state, action) => {
        state.detailsLoading = false;
        console.error(action.error.message ?? `Ошибка загрузки руководства по дуге с ID "${action.meta.arg}"`);
      })
      // fetchArcGuideList
      .addCase(fetchArcGuideList.pending, (state) => {
        state.listLoading = true;
      })
      .addCase(fetchArcGuideList.fulfilled, (state, action) => {
        state.listLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchArcGuideList.rejected, (state, action) => {
        state.listLoading = false;
        console.error(action.error.message ?? "Ошибка загрузки списка руководств по дугам");
      });
  },
});

export default arcsGuideSlice.reducer;
