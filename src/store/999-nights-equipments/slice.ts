import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { NineHundredAndNinetyNineNightsEquipment } from "@/types/999-nights-equipments";
import { fetchJson } from "@/utils/api";

export type NineHundredAndNinetyNineNightsEquipmentsState = {
  details: { [P in NineHundredAndNinetyNineNightsEquipment["id"]]?: NineHundredAndNinetyNineNightsEquipment };
  detailsLoading: boolean;
  list: NineHundredAndNinetyNineNightsEquipment[];
  listLoading: boolean;
};

const initialState: NineHundredAndNinetyNineNightsEquipmentsState = {
  details: {},
  detailsLoading: false,
  list: [],
  listLoading: false,
};

export const fetchNineHundredAndNinetyNineNightsEquipment = createAsyncThunk<NineHundredAndNinetyNineNightsEquipment, NineHundredAndNinetyNineNightsEquipment["id"]>("nineHundredAndNinetyNineNightsEquipments/fetch", async (nineHundredAndNinetyNineNightsEquipmentId, { getState }) => {
  const state = getState() as {
    nineHundredAndNinetyNineNightsEquipments: NineHundredAndNinetyNineNightsEquipmentsState;
  };
  const stateNineHundredAndNinetyNineNightsEquipment = state.nineHundredAndNinetyNineNightsEquipments.details[nineHundredAndNinetyNineNightsEquipmentId];

  if (stateNineHundredAndNinetyNineNightsEquipment) {
    console.log(`Экипировка 999 ночей c ID "${nineHundredAndNinetyNineNightsEquipmentId}" найдена в хранилище`);

    return stateNineHundredAndNinetyNineNightsEquipment;
  }

  console.log(`Загрузка экипировки 999 ночей c ID "${nineHundredAndNinetyNineNightsEquipmentId}" с сервера`);

  return await fetchJson<NineHundredAndNinetyNineNightsEquipment>(`${import.meta.env.BASE_URL}data/999-nights-equipments/details/${nineHundredAndNinetyNineNightsEquipmentId}.json`);
});
export const fetchNineHundredAndNinetyNineNightsEquipmentList = createAsyncThunk<NineHundredAndNinetyNineNightsEquipment[]>("nineHundredAndNinetyNineNightsEquipments/fetchList", async (_, { getState }) => {
  const state = getState() as {
    nineHundredAndNinetyNineNightsEquipments: NineHundredAndNinetyNineNightsEquipmentsState;
  };
  const stateList = state.nineHundredAndNinetyNineNightsEquipments.list;

  if (stateList.length) {
    console.log("Список экипировки 999 ночей найден в хранилище");

    return stateList;
  }

  console.log("Загрузка списка экипировки 999 ночей с сервера");

  const list = await fetchJson<NineHundredAndNinetyNineNightsEquipment[]>(`${import.meta.env.BASE_URL}data/999-nights-equipments/index.json`);

  return list.sort((a, b) => a.name.localeCompare(b.name));
});

export const nineHundredAndNinetyNineNightsEquipmentsSlice = createSlice({
  name: "nineHundredAndNinetyNineNightsEquipments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchNineHundredAndNinetyNineNightsEquipment
      .addCase(fetchNineHundredAndNinetyNineNightsEquipment.pending, (state) => {
        state.detailsLoading = true;
      })
      .addCase(fetchNineHundredAndNinetyNineNightsEquipment.fulfilled, (state, action) => {
        state.detailsLoading = false;
        state.details[action.payload.id] = action.payload;
      })
      .addCase(fetchNineHundredAndNinetyNineNightsEquipment.rejected, (state, action) => {
        state.detailsLoading = false;
        console.error(action.error.message ?? `Ошибка загрузки экипировки 999 ночей с ID "${action.meta.arg}"`);
      })
      // fetchNineHundredAndNinetyNineNightsEquipmentList
      .addCase(fetchNineHundredAndNinetyNineNightsEquipmentList.pending, (state) => {
        state.listLoading = true;
      })
      .addCase(fetchNineHundredAndNinetyNineNightsEquipmentList.fulfilled, (state, action) => {
        state.listLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchNineHundredAndNinetyNineNightsEquipmentList.rejected, (state, action) => {
        state.listLoading = false;
        console.error(action.error.message ?? "Ошибка загрузки списка экипировки 999 ночей");
      });
  },
});

export default nineHundredAndNinetyNineNightsEquipmentsSlice.reducer;
