import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { VideoSource } from "@/types/video-sources";
import { fetchJson } from "@/utils/api";

export interface VideoSourcesState {
  details: { [P in VideoSource["id"]]?: VideoSource };
  detailsLoading: boolean;
  list: VideoSource[];
  listLoading: boolean;
}

const initialState: VideoSourcesState = { details: {}, detailsLoading: false, list: [], listLoading: false };

export const fetchVideoSource = createAsyncThunk<VideoSource, VideoSource["id"]>("videoSources/fetch", async (videoSourceId, { getState }) => {
  const state = getState() as { videoSources: VideoSourcesState };
  const stateVideoSource = state.videoSources.details[videoSourceId];

  if (stateVideoSource) {
    console.log(`Видео-источник c ID "${videoSourceId}" найден в хранилище`);

    return stateVideoSource;
  }

  console.log(`Загрузка видео-источника c ID "${videoSourceId}" с сервера`);

  return await fetchJson<VideoSource>(`${import.meta.env.BASE_URL}data/video-sources/details/${videoSourceId}.json`);
});
export const fetchVideoSourceList = createAsyncThunk<VideoSource[]>("videoSources/fetchList", async (_, { getState }) => {
  const state = getState() as { videoSources: VideoSourcesState };
  const stateList = state.videoSources.list;

  if (stateList.length) {
    console.log("Список видео-источников найден в хранилище");

    return stateList;
  }

  console.log("Загрузка списка видео-источников с сервера");

  const list = await fetchJson<VideoSource[]>(`${import.meta.env.BASE_URL}data/video-sources/index.json`);

  return list.sort((a, b) => {
    const aDateTime = new Date(a.date).getTime();
    const bDateTime = new Date(b.date).getTime();

    return aDateTime === bDateTime ? a.title.localeCompare(b.title) : bDateTime - aDateTime;
  });
});

export const videoSourcesSlice = createSlice({
  name: "videoSources",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchVideoSource
      .addCase(fetchVideoSource.pending, (state) => {
        state.detailsLoading = true;
      })
      .addCase(fetchVideoSource.fulfilled, (state, action) => {
        state.detailsLoading = false;
        state.details[action.payload.id] = action.payload;
      })
      .addCase(fetchVideoSource.rejected, (state, action) => {
        state.detailsLoading = false;
        console.error(action.error.message ?? `Ошибка загрузки видео-источника с ID "${action.meta.arg}"`);
      })
      // fetchVideoSourceList
      .addCase(fetchVideoSourceList.pending, (state) => {
        state.listLoading = true;
      })
      .addCase(fetchVideoSourceList.fulfilled, (state, action) => {
        state.listLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchVideoSourceList.rejected, (state, action) => {
        state.listLoading = false;
        console.error(action.error.message ?? "Ошибка загрузки списка видео-источников");
      });
  },
});

export default videoSourcesSlice.reducer;
