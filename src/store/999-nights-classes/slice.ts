import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { NineHundredAndNinetyNineNightsClass } from "@/types/999-nights-classes";
import { fetchJson } from "@/utils/api";

export type NineHundredAndNinetyNineNightsClassesState = {
  details: { [P in NineHundredAndNinetyNineNightsClass["id"]]?: NineHundredAndNinetyNineNightsClass };
  detailsLoading: boolean;
  list: NineHundredAndNinetyNineNightsClass[];
  listLoading: boolean;
};

const initialState: NineHundredAndNinetyNineNightsClassesState = {
  details: {},
  detailsLoading: false,
  list: [],
  listLoading: false,
};

export const fetchNineHundredAndNinetyNineNightsClass = createAsyncThunk<NineHundredAndNinetyNineNightsClass, NineHundredAndNinetyNineNightsClass["id"]>("nineHundredAndNinetyNineNightsClasses/fetch", async (nineHundredAndNinetyNineNightsClassId, { getState }) => {
  const state = getState() as {
    nineHundredAndNinetyNineNightsClasses: NineHundredAndNinetyNineNightsClassesState;
  };
  const stateNineHundredAndNinetyNineNightsClass = state.nineHundredAndNinetyNineNightsClasses.details[nineHundredAndNinetyNineNightsClassId];

  if (stateNineHundredAndNinetyNineNightsClass) {
    console.log(`Класс 999 ночей c ID "${nineHundredAndNinetyNineNightsClassId}" найден в хранилище`);

    return stateNineHundredAndNinetyNineNightsClass;
  }

  console.log(`Загрузка класса 999 ночей c ID "${nineHundredAndNinetyNineNightsClassId}" с сервера`);

  return await fetchJson<NineHundredAndNinetyNineNightsClass>(`${import.meta.env.BASE_URL}data/999-nights-classes/details/${nineHundredAndNinetyNineNightsClassId}.json`);
});
export const fetchNineHundredAndNinetyNineNightsClassList = createAsyncThunk<NineHundredAndNinetyNineNightsClass[]>("nineHundredAndNinetyNineNightsClasses/fetchList", async (_, { getState }) => {
  const state = getState() as {
    nineHundredAndNinetyNineNightsClasses: NineHundredAndNinetyNineNightsClassesState;
  };
  const stateList = state.nineHundredAndNinetyNineNightsClasses.list;

  if (stateList.length) {
    console.log("Список классов 999 ночей найден в хранилище");

    return stateList;
  }

  console.log("Загрузка списка классов 999 ночей с сервера");

  const list = await fetchJson<NineHundredAndNinetyNineNightsClass[]>(`${import.meta.env.BASE_URL}data/999-nights-classes/index.json`);

  return list.sort((a, b) => a.name.localeCompare(b.name));
});

export const nineHundredAndNinetyNineNightsClassesSlice = createSlice({
  name: "nineHundredAndNinetyNineNightsClasses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchNineHundredAndNinetyNineNightsClass
      .addCase(fetchNineHundredAndNinetyNineNightsClass.pending, (state) => {
        state.detailsLoading = true;
      })
      .addCase(fetchNineHundredAndNinetyNineNightsClass.fulfilled, (state, action) => {
        state.detailsLoading = false;
        state.details[action.payload.id] = action.payload;
      })
      .addCase(fetchNineHundredAndNinetyNineNightsClass.rejected, (state, action) => {
        state.detailsLoading = false;
        console.error(action.error.message ?? `Ошибка загрузки класса 999 ночей с ID "${action.meta.arg}"`);
      })
      // fetchNineHundredAndNinetyNineNightsClassList
      .addCase(fetchNineHundredAndNinetyNineNightsClassList.pending, (state) => {
        state.listLoading = true;
      })
      .addCase(fetchNineHundredAndNinetyNineNightsClassList.fulfilled, (state, action) => {
        state.listLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchNineHundredAndNinetyNineNightsClassList.rejected, (state, action) => {
        state.listLoading = false;
        console.error(action.error.message ?? "Ошибка загрузки списка классов 999 ночей");
      });
  },
});

export default nineHundredAndNinetyNineNightsClassesSlice.reducer;
