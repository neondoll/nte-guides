import { useEffect, useMemo, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/store";
import { fetchArcTypeList } from "@/store/arc-types";
import { fetchArcList } from "@/store/arcs";
import { fetchRankList } from "@/store/ranks";
import type { ArcTypeId } from "@/types/arc-types";
import type { ArcListItem } from "@/types/arcs";
import type { RankId } from "@/types/ranks";
import type { Stat } from "@/types/stats";

export const useArcs = () => {
  const dispatch = useAppDispatch();

  const arcs = useAppSelector(state => state.arcs.list);
  const arcsLoading = useAppSelector(state => state.arcs.listLoading);

  useEffect(() => {
    dispatch(fetchArcList());
  }, [dispatch]);

  return { arcs, arcsLoading };
};
export const useArcsFilter = (arcs: ArcListItem[]) => {
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState<{
    arcTypeIds: ArcTypeId[];
    rankIds: RankId[];
    subStats: Stat[];
  }>({ arcTypeIds: [], rankIds: [], subStats: [] });

  const arcTypes = useAppSelector(state => state.arcTypes.list);
  const arcTypesLoading = useAppSelector(state => state.arcTypes.listLoading);
  const ranks = useAppSelector(state => state.ranks.list);
  const ranksLoading = useAppSelector(state => state.ranks.listLoading);

  useEffect(() => {
    dispatch(fetchArcTypeList());
    dispatch(fetchRankList());
  }, [dispatch]);

  return {
    arcTypes, arcTypesLoading, filter,
    filteredArcs: useMemo(() => {
      let data = arcs;

      if (filter.arcTypeIds.length) {
        data = data.filter(item => filter.arcTypeIds.includes(item.typeId));
      }

      if (filter.rankIds.length) {
        data = data.filter(item => filter.rankIds.includes(item.rankId));
      }

      if (filter.subStats.length) {
        data = data.filter(item => filter.subStats.includes(item.subStat));
      }

      return data;
    }, [arcs, filter.arcTypeIds, filter.rankIds, filter.subStats]),
    handleFilterChange: setFilter,
    ranks, ranksLoading,
    subStats: useMemo(() => {
      const items: Stat[] = [];

      arcs.forEach((arc) => {
        if (!items.includes(arc.subStat)) {
          items.push(arc.subStat);
        }
      });

      return items.sort((a, b) => a.localeCompare(b));
    }, [arcs]),
  };
};
