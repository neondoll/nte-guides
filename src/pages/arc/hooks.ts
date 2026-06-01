import { useEffect, useMemo } from "react";

import { useAppDispatch, useAppSelector } from "@/store";
import { fetchArcType } from "@/store/arc-types";
import { fetchArc } from "@/store/arcs";
import { fetchArcGuide, fetchArcGuideList } from "@/store/arcs-guide";
import { fetchCharacterList } from "@/store/characters";
import { fetchRank } from "@/store/ranks";
import { fetchVideoSourceList } from "@/store/video-sources";
import type { ArcId } from "@/types/arcs";

export const useArc = (id: ArcId) => {
  const dispatch = useAppDispatch();

  const arcLoading = useAppSelector(state => state.arcs.detailsLoading);
  const arcTypeLoading = useAppSelector(state => state.arcTypes.detailsLoading);
  const arcTypes = useAppSelector(state => state.arcTypes.details);
  const arcs = useAppSelector(state => state.arcs.details);
  const rankLoading = useAppSelector(state => state.ranks.detailsLoading);
  const ranks = useAppSelector(state => state.ranks.details);

  const loading = useMemo(() => {
    return arcLoading || arcTypeLoading || rankLoading;
  }, [arcLoading, arcTypeLoading, rankLoading]);

  const arc = useMemo(() => arcs[id], [arcs, id]);
  const rank = useMemo(() => arc?.rankId ? ranks[arc.rankId] : undefined, [arc, ranks]);
  const type = useMemo(() => arc?.typeId ? arcTypes[arc.typeId] : undefined, [arc, arcTypes]);

  useEffect(() => {
    dispatch(fetchArc(id));
  }, [dispatch, id]);
  useEffect(() => {
    if (arc) {
      dispatch(fetchArcType(arc.typeId));
      dispatch(fetchRank(arc.rankId));
    }
  }, [arc, dispatch]);

  return { arc, loading, rank, type };
};
export const useArcGuide = (id: ArcId) => {
  const dispatch = useAppDispatch();

  const arcsGuideDetails = useAppSelector(state => state.arcsGuide.details);
  const arcsGuideDetailsLoading = useAppSelector(state => state.arcsGuide.detailsLoading);
  const arcsGuideList = useAppSelector(state => state.arcsGuide.list);
  const arcsGuideListLoading = useAppSelector(state => state.arcsGuide.listLoading);

  const arcGuide = useMemo(() => arcsGuideDetails[id], [arcsGuideDetails, id]);
  const loading = useMemo(() => {
    return arcsGuideDetailsLoading || arcsGuideListLoading;
  }, [arcsGuideDetailsLoading, arcsGuideListLoading]);

  useEffect(() => {
    dispatch(fetchArcGuideList());
  }, [dispatch]);
  useEffect(() => {
    if (arcsGuideList.findIndex(item => item.id === id) !== -1) {
      dispatch(fetchArcGuide(id));
      dispatch(fetchCharacterList());
      dispatch(fetchVideoSourceList());
    }
  }, [arcsGuideList, dispatch, id]);

  return { arcGuide, loading };
};
