import React, { useState } from '../node_modules/react';
import { render } from '../node_modules/react-dom';
import ServiceList from './serviceList/ServiceList';
import CategoryFilter from './categoryFilter/categoryFilter';
import Slider from './slider/Slider';
import FilterList from './filterList/FilterList';
import store from './redux/store.js';
import { Provider } from 'react-redux'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { categories, filterGroups, marketplaceData } from './data.js';

import './global.css';

//Adds all Font Awesome Icons
library.add(fas);



/**
 * Connects all Components
 * @returns Marketplace UI
 */
const App = () => {
  const [objects, setObjects] = useState(marketplaceData);
  const [filterObjects, setFilterObjects] = useState(categories);

  return (
    <div>
      <CategoryFilter filterObjects={filterObjects}  />
      <div className = "filter_flex">
      <FilterList  />
      <Slider sliderContentGroups={filterGroups} />
      </div>
      <ServiceList objects={objects} />
    </div>
  );
};

render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('marketplace-root')
);

