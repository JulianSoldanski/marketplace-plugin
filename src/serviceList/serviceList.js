import React, {useState, useEffect} from 'react';
import Tile from './tile/tile';
import Pagination from './pagination/pagination';
import './serviceList.css';
import {filterObjects} from '../functions';
import { useSelector } from 'react-redux';


/**
 * Represents all Services shown with pagination
 * @param {*} objects represents the data which contains the services 
 * @returns UI Element
 */
const ServiceList = ({objects}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
      
    objects = filterObjects();

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = objects.slice(indexOfFirstItem, indexOfLastItem);
  
    // Change page
    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
    
    const filters = useSelector((state) => state.filters);

    /**
     * Sets back the page to 1 when a filter gets applied or removed
     */
    useEffect(() => {
      setCurrentPage(1);
    }, [filters]);

    return (
      <div className="object-list">
        <div className="tiles-grid">
          {currentItems.map((object, index) => (
            <Tile 
              key={object.id}
              title={object.title}
              description={object.description}
              price={object.price}
              image={object.image}
              buttonLink={object.buttonLink}
              ratingCount={object.ratingCount}
              rating={object.rating}
              certificate={object.certificate}
            />
          ))}
        </div>
        <Pagination 
          itemsPerPage={itemsPerPage} 
          totalItems={objects.length}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    )
}

export default ServiceList;


