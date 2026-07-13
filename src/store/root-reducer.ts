import { combineReducers } from "@reduxjs/toolkit";

import { nineHundredAndNinetyNineNightsClassesReducer } from "./999-nights-classes";
import { nineHundredAndNinetyNineNightsEquipmentsReducer } from "./999-nights-equipments";
import { arcTypesReducer } from "./arc-types";
import { arcsReducer } from "./arcs";
import { arcsGuideReducer } from "./arcs-guide";
import { cartridgesReducer } from "./cartridges";
import { characterRolesReducer } from "./character-roles";
import { charactersReducer } from "./characters";
import { charactersBuildGuideReducer } from "./characters-build-guide";
import { elementsReducer } from "./elements";
import { modulesReducer } from "./modules";
import { ranksReducer } from "./ranks";
import { videoSourcesReducer } from "./video-sources";

const rootReducer = combineReducers({
  arcTypes: arcTypesReducer,
  arcs: arcsReducer,
  arcsGuide: arcsGuideReducer,
  cartridges: cartridgesReducer,
  characterRoles: characterRolesReducer,
  characters: charactersReducer,
  charactersBuildGuide: charactersBuildGuideReducer,
  elements: elementsReducer,
  modules: modulesReducer,
  nineHundredAndNinetyNineNightsClasses: nineHundredAndNinetyNineNightsClassesReducer,
  nineHundredAndNinetyNineNightsEquipments: nineHundredAndNinetyNineNightsEquipmentsReducer,
  ranks: ranksReducer,
  videoSources: videoSourcesReducer,
});

export default rootReducer;
