import { useSelector } from "react-redux";
import { marketplaceData, filterGroups } from "./data.js";


/**
 * Filters Data 
 * @returns Filtered Data
 */

export const filterObjects = () => {
  const filters = useSelector((state) => state.filters);

  //marketplaceData is all Data
  let objects = marketplaceData;

  objects = filterCategory(filters, objects);
 
  objects = sortData(filters, objects);

  // Die Filtergruppen anwenden (z. B. "Tags" und "Typ")
  filterGroups.forEach((filterGroup) => {
    if(filterGroup.type == "checkbox" || filterGroup.type=="range"){
     objects = objects.filter((object) =>
        filterContentGroup(object, filterGroup, filters)
      );
    }
  });

  return objects;
};

/**
 * Filters Data according to filters set in the slider
 * @param {*} object represents the current Data
 * @param {*} filterGroup contains information of the ContentGroup
 * @param {*} filters represents the filters Set
 * @returns Array which contain the services filtered by the ContentGroup
 */
const filterContentGroup = (object, filterGroup, filters) => {
  const filterValues = filters[filterGroup.id];

  // Überprüfen, ob das Objekt die Filtergruppe besteht
  if (filterGroup.type === "checkbox") {
    const appliedFilters = filterValues.filter((filter) => filter.value !== null);
    // Wenn keine Filter angewendet werden, gibt das Objekt die Filtergruppe durch
    if (appliedFilters.length === 0) {
      return true;
    }
    const objectTags = object[filterGroup.id];
    for (let i = 0; i < appliedFilters.length; i++) {
      if (objectTags.indexOf(appliedFilters[i].name) !== -1) {
        return true;
      }
    }
  } else if (filterGroup.type === "range") {
    const appliedFilters = filterValues.filter((filter) => filter.value !== null);
    // Wenn keine Filter angewendet werden, gibt das Objekt die Filtergruppe durch
    if (appliedFilters.length === 0) {
      return true;
    }
    const objectValue = object[filterGroup.id];
    const min = appliedFilters[0].value.min;
    const max = appliedFilters[0].value.max;

    return objectValue >= min && objectValue <= max;
  }

  return false;
};

/**
 * Sorts the Data according to filters set in the slider
 * @param {*} filters represents the filters set
 * @param {*} objects Array which contains the services
 * @returns Array which contain the services sorted
 */
const sortData = (filters, objects)=> {
  const sortby = filters.sortby[0].value;
  const sortorder = filters.sortorder[0].value;

    objects = objects.slice().sort((a, b) => {
      const valueA = a[sortby];
      const valueB = b[sortby];
      if (valueA < valueB) {
        return sortorder ? 1 : -1;
      }
      if (valueA > valueB) {
        return sortorder ? -1 : 1;
      }
      return 0;
    });
  return objects;
}

/**
 * Filters Data according to filters set in the category filter
 * @param {*} filters represents the filters Set
 * @param {*} objects Array which contains the services
 * @returns Array which contain the services filtered by Category
 */
const filterCategory = (filters, objects) =>{
  const category = filters.selectedCategory[0].value;
  if (category) {
    objects = objects.filter((object) => object.category === category);
  }
  return objects;
}


/**
 * Gets current Filters set in the Slider when clicking on "Filter anwenden"
 * @returns Array of all Filters set
 */
export const getCurrentFilter = () => {
  let filter = {};

  if(document.querySelector("input[name='Sortieren nach']")){
    filter["sortby"] = [
      {
        name:
          "Sortieren nach: " +
          document.querySelector('input[name="Sortieren nach"]:checked + label')
            .textContent,
        value: document.querySelector('input[name="Sortieren nach"]:checked').value,
        type:"radio"
      },
    ];
    filter["sortorder"] = [
      {
        name: "Aufsteigend Sortieren",
        value: document.getElementById("sortieren").checked,
        type:"switch"
      },
    ];
  }


  filterGroups.forEach((contentGroup)=>{
      if(contentGroup.type=="checkbox"){
        if(document.querySelector("#"+contentGroup.id+" input")){
          filter[contentGroup.id] = getCheckboxInput(contentGroup);
          }
      }
      if(contentGroup.type=="range"){
        if(document.querySelector('#'+contentGroup.id+' input')){
          filter[contentGroup.id] = getRangeInput(contentGroup);
        }
      }
    } 
  )

  return filter;
}

/**
 * Gets the value of all Checkboxes checked in a ContentGroup 
 * @param {*} state contains information of the ContentGroup
 * @returns Array with all Checkboxes checked in a ContentGroup
 */
function getCheckboxInput(state){
  const inputs = document.querySelectorAll('#'+state.id+' input');
  let tagsArr = []
  inputs.forEach((input) => {
    if (input.checked) {
      tagsArr.push( { name: input.value, value: 1,  type:state.type});
    }
  });
  return tagsArr;
}

/**
 * Gets the value of a Range ContentGroup Field
 * @param {*} state 
 * @returns Array with all Ranges in a ContentGroup
 */
function getRangeInput(state){
  const min = document.querySelector('#'+state.id+' input[data-index="0"]').value;
  const max = document.querySelector('#'+state.id+' input[data-index="1"]').value;

  return [{ name: state.id+ ": "+min + " - "+max , value: {min: min, max: max },  type:state.type }];
}