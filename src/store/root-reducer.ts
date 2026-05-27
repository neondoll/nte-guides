import { combineReducers } from "@reduxjs/toolkit";

import { arcTypesReducer } from "./arc-types";
import { arcsReducer } from "./arcs";
import { cartridgesReducer } from "./cartridges";
import { characterRolesReducer } from "./character-roles";
import { charactersReducer } from "./characters";
import { elementsReducer } from "./elements";
import { modulesReducer } from "./modules";
import { ranksReducer } from "./ranks";

const rootReducer = combineReducers({
  arcTypes: arcTypesReducer,
  arcs: arcsReducer,
  cartridges: cartridgesReducer,
  characterRoles: characterRolesReducer,
  characters: charactersReducer,
  elements: elementsReducer,
  modules: modulesReducer,
  ranks: ranksReducer,
});

export default rootReducer;
