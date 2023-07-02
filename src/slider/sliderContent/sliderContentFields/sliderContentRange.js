//https://mui.com/material-ui/react-slider/

import React from "react";
import "./sliderContentFields.css";

import Slider from '@mui/material/Slider';

import { Tooltip } from "@mui/material";



/**
 * Represents one option in a ContentGroup as a Range
 * @param {*} field represents information of the field
 * @param {*} index represents index 
 * @returns UI Element
 */

const SliderContentRange = ({field, index }) => {
    const [value, setValue] = React.useState([field.min, field.max]);

  
      

    const handleChange = (event, newValue) => {
        setValue(newValue);

      };
    return(
        <div className="sliderContentGroupEntry" key={index}>
          <Tooltip title={field.tooltip} >
            <Slider
              valueLabelDisplay="auto"
              value={value}
              min={field.min}
              max={field.max}
              step={field.steps}
              onChange={handleChange}
              id = {field.id}
            />   
          </Tooltip>
            <div className="filter_flex">
                <div>Von {value[0]} {field.unit}</div><div>Bis {value[1]} {field.unit}</div>
            </div>
       
        </div>
    );
};

export default SliderContentRange;
