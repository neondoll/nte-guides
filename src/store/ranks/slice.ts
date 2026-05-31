import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { Rank } from "@/types/ranks";
import { fetchJson } from "@/utils/api";

export interface RanksState {
  details: { [P in Rank["id"]]?: Rank };
  detailsLoading: boolean;
  list: Rank[];
  listLoading: boolean;
}

const initialState: RanksState = { details: {}, detailsLoading: false, list: [], listLoading: false };

export const fetchRank = createAsyncThunk<Rank, Rank["id"]>("ranks/fetch", async (rankId, { getState }) => {
  const state = getState() as { ranks: RanksState };
  const stateRank = state.ranks.details[rankId];

  if (stateRank) {
    console.log(`Ранг c ID "${rankId}" найден в хранилище`);

    return stateRank;
  }

  console.log(`Загрузка ранга c ID "${rankId}" с сервера`);

  return await fetchJson<Rank>(`${import.meta.env.BASE_URL}data/ranks/details/${rankId}.json`);
});
export const fetchRankList = createAsyncThunk<Rank[]>("ranks/fetchList", async (_, { getState }) => {
  const state = getState() as { ranks: RanksState };
  const stateList = state.ranks.list;

  if (stateList.length) {
    console.log("Список рангов найден в хранилище");

    return stateList;
  }

  console.log("Загрузка списка рангов с сервера");

  const list = await fetchJson<Rank[]>(`${import.meta.env.BASE_URL}data/ranks/index.json`);

  return list.sort((a, b) => a.name.localeCompare(b.name));
});

export const ranksSlice = createSlice({
  name: "ranks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchRank
      .addCase(fetchRank.pending, (state) => {
        state.detailsLoading = true;
      })
      .addCase(fetchRank.fulfilled, (state, action) => {
        state.detailsLoading = false;
        state.details[action.payload.id] = action.payload;
      })
      .addCase(fetchRank.rejected, (state, action) => {
        state.detailsLoading = false;
        console.error(action.error.message ?? `Ошибка загрузки ранга с ID "${action.meta.arg}"`);
      })
      // fetchRankList
      .addCase(fetchRankList.pending, (state) => {
        state.listLoading = true;
      })
      .addCase(fetchRankList.fulfilled, (state, action) => {
        state.listLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchRankList.rejected, (state, action) => {
        state.listLoading = false;
        console.error(action.error.message ?? "Ошибка загрузки списка рангов");
      });
  },
});

export default ranksSlice.reducer;
