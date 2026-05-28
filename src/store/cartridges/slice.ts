import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { Cartridge, CartridgeListItem } from "@/types/cartridges";
import { fetchJson } from "@/utils/api";

export interface CartridgesState {
  details: { [P in Cartridge["id"]]?: Cartridge };
  detailsLoading: boolean;
  list: CartridgeListItem[];
  listLoading: boolean;
}

const initialState: CartridgesState = { details: {}, detailsLoading: false, list: [], listLoading: false };

export const fetchCartridge = createAsyncThunk<Cartridge, Cartridge["id"]>("cartridges/fetch", async (cartridgeId, { getState }) => {
  const state = getState() as { cartridges: CartridgesState };
  const stateCartridge = state.cartridges.details[cartridgeId];

  if (stateCartridge) {
    console.log(`Картридж c ID "${cartridgeId}" найден в хранилище`);

    return stateCartridge;
  }

  console.log(`Загрузка картриджа c ID "${cartridgeId}" с сервера`);

  return await fetchJson<Cartridge>(`${import.meta.env.BASE_URL}data/cartridges/details/${cartridgeId}.json`);
});
export const fetchCartridgeList = createAsyncThunk<CartridgeListItem[]>("cartridges/fetchList", async (_, { getState }) => {
  const state = getState() as { cartridges: CartridgesState };
  const stateList = state.cartridges.list;

  if (stateList.length) {
    console.log("Список картриджей найден в хранилище");

    return stateList;
  }

  console.log("Загрузка списка картриджей с сервера");

  const list = await fetchJson<CartridgeListItem[]>(`${import.meta.env.BASE_URL}data/cartridges/index.json`);

  return list.sort((a, b) => a.name.localeCompare(b.name));
});

export const cartridgesSlice = createSlice({
  name: "cartridges",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchCartridge
      .addCase(fetchCartridge.pending, (state) => {
        state.detailsLoading = true;
      })
      .addCase(fetchCartridge.fulfilled, (state, action) => {
        state.detailsLoading = false;
        state.details[action.payload.id] = action.payload;
      })
      .addCase(fetchCartridge.rejected, (state, action) => {
        state.detailsLoading = false;
        console.error(action.error.message ?? `Ошибка загрузки картриджа с ID "${action.meta.arg}"`);
      })
      // fetchCartridgeList
      .addCase(fetchCartridgeList.pending, (state) => {
        state.listLoading = true;
      })
      .addCase(fetchCartridgeList.fulfilled, (state, action) => {
        state.listLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchCartridgeList.rejected, (state, action) => {
        state.listLoading = false;
        console.error(action.error.message ?? "Ошибка загрузки списка картриджей");
      });
  },
});

export default cartridgesSlice.reducer;
