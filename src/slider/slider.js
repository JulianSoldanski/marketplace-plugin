import React, { useState } from "react";
import './slider.css';
import SliderContentGroup from  './sliderContent/sliderContentGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import { resetAll, setFilter } from '../redux/filterSlice';
import { getCurrentFilter, filterObjects} from '../functions';



/**
 * Represents a Slider Component, which allows to filter Data
 * @param {*} sliderContentGroups Fields in the slider
 * @returns UI Component
 */
const Slider = ({sliderContentGroups}) => {
  const [isOpen, setIsOpen] = useState(false);
 
  const dispatch = useDispatch();
  const tempObjectCount = filterObjects().length;

  /**
   * Sends action to addFilters set by Slider to the Reducer
   */
  const addFilter = () => {
   
    const filter = getCurrentFilter();
    dispatch(setFilter(filter));
    handleClose();

  }

  const currentFilters = useSelector(state => state.filters);

  /**
   * Opens the Slider
   */
  const handleOpen = () => {
    setIsOpen(true);
    document.body.classList.add('no-scroll');

    setActiveFilters(currentFilters);
  }

  /**
   * Closes the Slider
   */
  const handleClose = () => {
    setIsOpen(false);
    document.body.classList.remove('no-scroll');
  }

  /**
   * Sends Action to reset all Filters to default to the Reducer
   */
  const resetFilter = () => {
    dispatch(resetAll());
  }

  return (
      <div>
      <div className={`slider_bg ${isOpen ? "open" : ""}`} onClick={handleClose}></div>
      <button className='open_slider_button' onClick={handleOpen}>
        <span className="desktop_only">Filtern & Sortieren</span> 
        <span class="dashicons dashicons-filter"></span>
      </button>
      <div className={`slider ${isOpen ? "open" : ""}`}>
        <div className="slider_header"><div className="slider_title">Filtern & Sortieren</div> <FontAwesomeIcon onClick={handleClose} className="slider_close_button" icon="fa-solid fa-xmark" /></div>
        <div className="slider_content">
          {sliderContentGroups.map((group, index) => (
            <SliderContentGroup key={index} title={group.title} id={group.id} dropdown={group.dropdown} type={group.type} fields={group.fields} />
          ))}
        </div>

        <div className="slider_filter_button_div">
          <button className="slider_filter_button" onClick={addFilter}>
            <span>Filter anwenden</span> 
            <span className="dashicons dashicons-arrow-right-alt2"></span>
          </button> 
          <div>
            {tempObjectCount} <FontAwesomeIcon icon="fa-solid fa-layer-group" />
          </div>
        </div>
        <div className="slider_footer"><span className="slider_filter_reset_text" onClick={resetFilter}>Filter zurücksetzen</span><FontAwesomeIcon icon="fa-solid fa-trash-can" /> </div>
      </div>
    </div>
  );
};



export default Slider;


function setActiveFilters(currentFilters) {
  const sortByNameGroup = document.querySelectorAll('input[name="Sortieren nach"]');
  const isAnyChecked = Array.from(sortByNameGroup).some((input) => input.checked);

  if (!isAnyChecked) {
    document.querySelector('input[value=title]').checked = true;
  }

  //This needs to be continued
}
