import { useEffect, useMemo } from "react";

import { useAppDispatch, useAppSelector } from "@/store";
import { fetchArcTypeList } from "@/store/arc-types";
import { fetchArcList } from "@/store/arcs";

export const useArcs = () => {
  const dispatch = useAppDispatch();

  const arcTypes = useAppSelector(state => state.arcTypes.list);
  const arcTypesLoading = useAppSelector(state => state.arcTypes.listLoading);
  const arcs = useAppSelector(state => state.arcs.list);
  const arcsLoading = useAppSelector(state => state.arcs.listLoading);

  const loading = useMemo(() => arcTypesLoading || arcsLoading, [arcTypesLoading, arcsLoading]);

  useEffect(() => {
    dispatch(fetchArcList());
    dispatch(fetchArcTypeList());
  }, [dispatch]);

  return { arcTypes, arcs, loading };
};
