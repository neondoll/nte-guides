import { useEffect, useMemo } from "react";

import { useAppDispatch, useAppSelector } from "@/store";
import { fetchArcType } from "@/store/arc-types";
import { fetchArc } from "@/store/arcs";
import { fetchRank } from "@/store/ranks";
import type { Arc } from "@/types/arcs";

export const useArc = (id: Arc["id"]) => {
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
