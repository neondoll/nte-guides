import { useEffect, useMemo } from "react";

import { useAppDispatch, useAppSelector } from "@/store";
import { fetchCartridge } from "@/store/cartridges";
import { fetchModuleList } from "@/store/modules";
import type { CartridgeId } from "@/types/cartridges";

export const useCartridge = (id: CartridgeId) => {
  const dispatch = useAppDispatch();

  const cartridgeLoading = useAppSelector(state => state.cartridges.detailsLoading);
  const cartridges = useAppSelector(state => state.cartridges.details);
  const modules = useAppSelector(state => state.modules.list);
  const modulesLoading = useAppSelector(state => state.modules.listLoading);

  const loading = useMemo(() => {
    return cartridgeLoading || modulesLoading;
  }, [cartridgeLoading, modulesLoading]);

  const cartridge = useMemo(() => cartridges[id], [cartridges, id]);
  const requiredModules = useMemo(() => {
    return cartridge?.requiredModuleIds.map(requiredModuleId => modules.find(module => module.id === requiredModuleId)!);
  }, [cartridge, modules]);

  useEffect(() => {
    dispatch(fetchCartridge(id));
    dispatch(fetchModuleList());
  }, [dispatch, id]);

  return { cartridge, loading, requiredModules };
};
