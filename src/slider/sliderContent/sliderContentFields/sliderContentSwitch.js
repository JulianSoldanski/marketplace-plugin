//https://mui.com/material-ui/react-slider/

import React from "react";
import "./sliderContentFields.css";

import Switch from '@mui/material/Switch';




/**
 * Represents one option in a ContentGroup as a Switch
 * @param {*} field represents information of the field
 * @param {*} index represents index 
 * @returns UI Element
 */


const SliderContentSwitch = ({ field, index}) => {

    return(
        <div className="sliderContentGroupEntry" key={index}>
         
            <div className="sliderContentSwitchFlex">
                <div>{field.unchecked} </div><Switch id={field.id} size="big" /><div> {field.checked}</div>
            </div>
       
        </div>
    );
};

export default SliderContentSwitch;
