import { configureStore } from "@reduxjs/toolkit";
import { pokedeskItemReducer } from "./pokedesk-item-slice";

export const store = configureStore({
    reducer:{
        pokedeskItem:pokedeskItemReducer
    }
})