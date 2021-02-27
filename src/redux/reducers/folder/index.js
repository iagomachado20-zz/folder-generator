// ACTIONS
export const ACTIONS = {
    SET_BACKGROUND:  'SET_BACKGROUND',
    SET_LOGO: 'SET_LOGO',
    SET_TITLE: 'SET_TITLE',
    SET_PRODUCTS: 'SET_PRODUCTS',
    CLEAR_FOLDER: 'CLEAR_FOLDER'
};

export const setProducts = (products) => ({
    type: ACTIONS.SET_PRODUCTS,
    payload: products
});

const initialState = {
    properties_folder: {
        background: null,
        logo: null,
        title: null,
        products: []
    }
};

const REDUCER_FOLDER = (state = initialState, action) => {
    switch (action.type) {
      case ACTIONS.SET_BACKGROUND:
        return {
          ...state,
          properties_folder: {
            background: action.payload
          }
        };
    case ACTIONS.SET_PRODUCTS:
        return {
            ...state,
            properties_folder: {
                products: action.payload
            }
        };    
      default:
        return state;
    }
  };
  
  export default REDUCER_FOLDER;