import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  onError: null,
  isPending: false,
  selectedItem: null,
  item: null,
  filteredItems: [],
};

export const pokedeskItemSlice = createSlice({
  initialState,
  name: 'pokedeskItem',
  reducers: {
    removeItem: (state, action) => {
      state.items.results = state.items.results.filter(
        (item) => item.name !== action.payload.name
      );
    },
    load: (state, action) => ({ ...state, items: action.payload.items }),
    isPending: (state, action) => ({
      ...state,
      isPending: action.payload.isPending,
    }),
    onError: (state, action) => ({ ...state, onError: action.payload.error }),
    onSelect: (state, action) => ({
      ...state,
      selectedItem: action.payload.selectedItem,
    }),
    onResponseItems: (state, action) => ({
      ...state,
      items: action.payload.items,
      filteredItems: action.payload.items,
    }),
    onResponseItem: (state, action) => ({
      ...state,
      item: action.payload.item,
    }),
    onSearch: (state, action) => {
      state.filteredItems.results = state.items.results.filter((item) =>
        item.name.includes(action.payload.filter)
      );
    },
  },
});

export const pokedeskItemActions = pokedeskItemSlice.actions;
export const pokedeskItemReducer = pokedeskItemSlice.reducer;
