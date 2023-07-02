import React, { useState } from "react";
import "./sliderContentGroup.css";
import SliderContentRange from "./sliderContentFields/sliderContentRange";
import SliderContentRadiobox from "./sliderContentFields/sliderContentRadiobox";
import SliderContentSwitch from "./sliderContentFields/sliderContentSwitch";
import SliderContentCheckbox from "./sliderContentFields/SliderContentCheckbox";


/**
 * This represents a Group of filters in the Slider like for example all Checkboxes in "Zahlungsmodell" see data.js 
 * @param {*} title represents the title of the ContentGroup like "Zahlungsmodell"
 * @param {*} type represents the type "radio", "range", "switch", "checkbox"
 * @param {*} fields represents the options set in the ContentGroup like "Subscription" for "Zahlungsmodell"
 * @param {*} dropdown boolean which checks if the contentGroup should be collapsable
 * @param {*} id id of the ContentGroup, needed for receiving the data
 * @returns UI Element
 */
const SliderContentGroup = ({ title, type, fields, dropdown, id  }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    if(dropdown) {
      setIsOpen(!isOpen);
    }
  };

  let arrow = "dashicons dashicons-arrow-down-alt2";
  if(isOpen){
    arrow = "dashicons dashicons-arrow-up-alt2";
  }

  return (
    <div className="sliderContentGroup" id={id}>
      
      <div className="sliderContentGroupTitle" onClick={toggleOpen}>
        {title}{(dropdown) ? (<span class={arrow}></span>): ""}
      </div>
      {(dropdown && isOpen) || !dropdown  ? (
        <div className="sliderContentGroupContent">
          {fields.map((field, index) => {
            switch (type) {
              case "radio":
                return (
                  <SliderContentRadiobox
                    title={title}
                    field={field}
                    index={index}
                  />
                );
              case "range":
                return (
                  <SliderContentRange
                    title={title}
                    field={field}
                    index={index}

                  />
                );
              case "switch":
                return (
                  <SliderContentSwitch
                    title={title}
                    field={field}
                    index={index}
                  />
                );
              case "checkbox":
                return (
                  <SliderContentCheckbox
                    title={title}
                    field={field}
                    index={index}

                  />
                );

              default:
                break;
            }
          })}
        </div>
      ) : null}
    </div>
  );
};

export default SliderContentGroup;
