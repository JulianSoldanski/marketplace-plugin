import React from "react";
import "./sliderContentFields.css";


/**
 * Represents one option in a ContentGroup as a Radiobutton
 * @param {*} field represents information of the field
 * @param {*} index represents index 
 * @returns UI Element
 */
const SliderContentRadiobox = ({title, field, index}) => 
{

  return(
      <div className="sliderContentGroupEntry" key={index}>
        <input type="radio" name={title} value ={field.value} id={field.id} data-label={field.label}  />
        <label for={field.id} className="sliderContentRadiobox" name={title}>{field.label}</label>
      </div>    
      
  )
};

export default SliderContentRadiobox;
