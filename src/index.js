import {configureStore} from '@reduxjs/toolkit';
import categoryReducer from './store/category/categorySlice.js';
import productReducer from './store/product/ptoductslice.js'


export const store = configureStore({
    reducer:{
        category: categoryReducer,
        product:productReducer, 
}
});