import React from "react";
import "./sliderContentFields.css";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Tooltip } from "@mui/material";

/**
 * Represents one option in a ContentGroup as a Checkbox
 * @param {*} field represents information of the field
 * @param {*} index represents index 
 * @returns UI Element
 */

const SliderContentCheckbox = ({ field, index}) => {
      return(
      <div className="sliderContentGroupEntry" key={index}>
                <Tooltip title={field.tooltip} placement="right-start" >
                  <FormControlLabel control={<Checkbox value={field.label} id={field.id} />  }  label={field.label} />
              </Tooltip>

      </div> 
      )   
};

export default SliderContentCheckbox;
