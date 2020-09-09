export const ADD_PRICE = 'ADD_PRICE';
export const DEL_PRICE = 'DEL_PRICE'

export const addPrice = (price) => {
    console.log('ACTION ADD_PRICE', price);
    return {
        type: ADD_PRICE,
        payload: price
    }
};

export const rmPrice = (price) => {
    console.log('ACTION DEL_PRICE', price);
    return {
        type: DEL_PRICE,
        payload: price
    }
};