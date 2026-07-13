import {
  NineHundredAndNinetyNineNightsEquipmentIds,
  NineHundredAndNinetyNineNightsEquipmentTypeIds,
} from "@/enums/999-nights-equipments";
import type { NineHundredAndNinetyNineNightsClassId } from "@/types/999-nights-classes";
import type { Stat } from "@/types/stats";

export type NineHundredAndNinetyNineNightsEquipment = {
  id: NineHundredAndNinetyNineNightsEquipmentId;
  name: string;
  typeId: NineHundredAndNinetyNineNightsEquipmentTypeId;
  rarity: "epic" | "legendary";
  classId?: NineHundredAndNinetyNineNightsClassId;
  baseStat?: Stat;
  effects: Array<{ title: string; text: string }>;
  image?: string;
};
export type NineHundredAndNinetyNineNightsEquipmentId = typeof NineHundredAndNinetyNineNightsEquipmentIds[keyof typeof NineHundredAndNinetyNineNightsEquipmentIds];
export type NineHundredAndNinetyNineNightsEquipmentTypeId = typeof NineHundredAndNinetyNineNightsEquipmentTypeIds[keyof typeof NineHundredAndNinetyNineNightsEquipmentTypeIds];
