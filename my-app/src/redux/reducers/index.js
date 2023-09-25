import {combineReducers} from 'redux';
import { addToCartReducer, productReducer, selectedProductReducer, favouriteProductReducer, addCategoryReducer } from './productReducer';

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    cartproduct: addToCartReducer,
    favouriteproduct:favouriteProductReducer,
    addcategory: addCategoryReducer

});

export default reducers;