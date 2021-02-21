// ACTIONS
const ACTIONS = {
    SET_BACKGROUND:  'SET_BACKGROUND',
    SET_LOGO: 'SET_LOGO',
    SET_TITLE: 'SET_TITLE',
    SET_PRODUCTS: 'SET_PRODUCTS',
    CLEAR_FOLDER: 'CLEAR_FOLDER'
};


const initialState = {
    properties_folder: {
        background: null,
        logo: null,
        title: null,
        products: null
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
      default:
        return state;
    }
  };
  
  export default REDUCER_FOLDER;