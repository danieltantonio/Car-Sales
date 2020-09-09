export const ADD_PRICE = 'ADD_PRICE';

export const addPrice = (price) => {
    console.log('ACTION ADD_PRICE', price);
    return {
        type: ADD_PRICE,
        payload: price
    }
};