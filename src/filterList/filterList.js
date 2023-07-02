import './filterList.css';
import React from "react";

import { useSelector, useDispatch } from 'react-redux';

import { deleteFilter } from '../redux/filterSlice'

const FilterList = () => {
  const filterValues = useSelector(state => state.filters);
  const filterNames = Object.keys(filterValues)
  .flatMap(key => filterValues[key]
    .filter(item => item.name !== null)
    .map(item => ({ name: key, value: item })))
  .filter(entry => entry.value.name != null);

  const dispatch = useDispatch();

  return (
    <div className='filterList'>
      {filterNames.map((filter, index) => (
          <div key={index} className="filterList_entry_div">
            {filter.value.name}
            <span 
              className="filterList_entry_delete dashicons dashicons-no-alt" 
              onClick={() => dispatch(deleteFilter({ filterKey : filter.name, filterType: filter.value.type ,optionName : filter.value.name }))}
              >
            </span>
          </div>
        ))}
    </div>
  );
}

export default FilterList;
