import { useEffect, useMemo } from "react";

import { useAppDispatch, useAppSelector } from "@/store";
import { fetchCartridgeList } from "@/store/cartridges";
import { fetchModuleList } from "@/store/modules";

export const useCartridges = () => {
  const dispatch = useAppDispatch();

  const cartridges = useAppSelector(state => state.cartridges.list);
  const cartridgesLoading = useAppSelector(state => state.cartridges.listLoading);
  const modules = useAppSelector(state => state.modules.list);
  const modulesLoading = useAppSelector(state => state.modules.listLoading);

  const loading = useMemo(() => {
    return cartridgesLoading || modulesLoading;
  }, [cartridgesLoading, modulesLoading]);

  useEffect(() => {
    dispatch(fetchCartridgeList());
    dispatch(fetchModuleList());
  }, [dispatch]);

  return { cartridges, loading, modules };
};
