import './categoryFilter.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectCategory } from '../redux/filterSlice'
import { Tooltip } from "@mui/material";


const categoryFilter = ({filterObjects}) => {

  const category = useSelector(state => state.filters.selectedCategory[0].value);
  const dispatch = useDispatch();


  return (

      <div className='categoryFilter_row'>
        {filterObjects.map((object)  => (

          <Tooltip title={object.tooltip} >
            <div 
              id={object.div_id} 
              className={`categoryFilter_col ${
                  category === object.name ? 'selected' : ''
                }`
              } 
              key={object.name} 
              onClick={() => dispatch(selectCategory( object.name))}
             >
                <img 
                  src={object.imageUrl} 
                  key={object.id} 
                  alt="" 
                  className="categoryFilter_image" 
                />
                <div 
                  className="categoryFilter_text" 
                  key={object.id}
                  >
                    {object.name}
                </div>
            </div>
            </Tooltip>
          )

        )
        }
      </div>
  );
};

export default categoryFilter;


