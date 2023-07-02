import { configureStore} from '@reduxjs/toolkit';
import filterReducer from './filterSlice'


// Create the store with the default state
export default configureStore({
  reducer: {
    filters: filterReducer
  }
});


