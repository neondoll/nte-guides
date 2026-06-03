import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/store";
import { fetchCartridgeList } from "@/store/cartridges";

export const useCartridges = () => {
  const dispatch = useAppDispatch();

  const cartridges = useAppSelector(state => state.cartridges.list);
  const cartridgesLoading = useAppSelector(state => state.cartridges.listLoading);

  useEffect(() => {
    dispatch(fetchCartridgeList());
  }, [dispatch]);

  return { cartridges, cartridgesLoading };
};
