import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/store";
import { fetchNineHundredAndNinetyNineNightsClassList } from "@/store/999-nights-classes";
import { fetchNineHundredAndNinetyNineNightsEquipmentList } from "@/store/999-nights-equipments";

export const useNineHundredAndNinetyNineNights = () => {
  const dispatch = useAppDispatch();

  const nineHundredAndNinetyNineNightsClasses = useAppSelector(state => state.nineHundredAndNinetyNineNightsClasses.list);
  const nineHundredAndNinetyNineNightsClassesLoading = useAppSelector(state => state.nineHundredAndNinetyNineNightsClasses.listLoading);
  const nineHundredAndNinetyNineNightsEquipments = useAppSelector(state => state.nineHundredAndNinetyNineNightsEquipments.list);
  const nineHundredAndNinetyNineNightsEquipmentsLoading = useAppSelector(state => state.nineHundredAndNinetyNineNightsEquipments.listLoading);

  useEffect(() => {
    dispatch(fetchNineHundredAndNinetyNineNightsClassList());
    dispatch(fetchNineHundredAndNinetyNineNightsEquipmentList());
  }, [dispatch]);

  return {
    nineHundredAndNinetyNineNightsClasses, nineHundredAndNinetyNineNightsClassesLoading,
    nineHundredAndNinetyNineNightsEquipments, nineHundredAndNinetyNineNightsEquipmentsLoading,
  };
};
