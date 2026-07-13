import { NineHundredAndNinetyNineNightsClassIds } from "@/enums/999-nights-classes";

export type NineHundredAndNinetyNineNightsClass = {
  id: NineHundredAndNinetyNineNightsClassId;
  name: string;
  image: string;
};
export type NineHundredAndNinetyNineNightsClassId = typeof NineHundredAndNinetyNineNightsClassIds[keyof typeof NineHundredAndNinetyNineNightsClassIds];
