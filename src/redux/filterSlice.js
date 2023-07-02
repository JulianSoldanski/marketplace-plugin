import { createSlice } from "@reduxjs/toolkit";
import {filterGroups, categories} from "../data.js";

/**
 *  Default State
 *  Represents all Filters available
 */

const initialState = {};
filterGroups.forEach((group) => {
  initialState[group.id] =  [{
    name: null,
    type: group.type,
    value: null,
  }];
});

initialState.selectedCategory = [{
  name: null,
  type: "radiobox",
  value: null,
}];


/**
 * Functions to update the Filter State 
 */
const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    /**
     * Sets all Filter Options set in the Slider
     * @param {*} state current state
     * @param {*} filter new filters
     */
    setFilter(state, filter) {
      Object.keys(filter.payload).forEach((key) => {
        state[key] = filter.payload[key].map((item, index) => {
          return {
            name: item.name,
            value: item.value,
            type: item.type
          };
        });
      });
    },
    /**
     * Removes all Filter
     * @param {*} state current state
     */
    resetAll: (state) => {
      Object.keys(state).forEach((key) => {
        state[key] = initialState[key].map((item) => ({
          name: item.name,
          value: item.value,
        }));
      });
    },
    /**
     * Deletes one Filter option
     * @param {*} state current state
     * @param {*} action contains filterkey=contentGroup.name filterType=contentGroup.type optionName=contentGroup.fields[i].name
     */
    deleteFilter: (state, action) => {
      const { filterKey, filterType, optionName } = action.payload;
      if (filterType !== "checkbox") {
        state[filterKey] = initialState[filterKey].map((item) => ({
          name: item.name,
          value: item.value,
          type: item.type,
        }));
      } else {
        state[filterKey] = state[filterKey].filter(
          (item) => item.name !== optionName
        );
      }
    },
    
    /**
     * Adds the Category Filter
     * @param {} state current state
     * @param {*} action contains the name of the category
     */
    selectCategory: (state, action) => {
      state.selectedCategory = state.selectedCategory.map(() => ({
        name: action.payload,
        value: action.payload,
      }));
    },
  },
});

export const { setFilter, resetAll, deleteFilter, selectCategory } = filterSlice.actions;
export default filterSlice.reducer;
