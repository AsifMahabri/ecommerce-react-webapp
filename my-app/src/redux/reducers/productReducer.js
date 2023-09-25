import { ActionTypes } from "../constants/action-types"

const initialState = {
    products:[
        {},

    ],
};
export const productReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload};

        default:
            return state;

    }
};

export const selectedProductReducer = (state = {}, {type,payload}) => {
    switch(type){
        case ActionTypes.SELECTED_PRODUCT:
        return{...state,...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
        return{};
        default:
            return state;
    }
};

export const addToCartReducer = (state = initialState, {type,payload}) => {
    switch(type){
        case ActionTypes.ADD_TO_CART:
            return {...state,products : [...state.products,payload]};
            default:
                return state;
    }
};

export const favouriteProductReducer = (state = initialState, {type, payload})=>{
    switch(type){
        case ActionTypes.FAVOURITE_PRODUCT:
            return{...state,products : [...state.products,payload]};
            default:
            return state;
    }
};

export const addCategoryReducer = (state={Category:""},{type, payload}) =>{
    switch(type){
        case ActionTypes.ADD_CATEGORY:
            return{...state,Category:payload}
            default:
                return state;
    }
}