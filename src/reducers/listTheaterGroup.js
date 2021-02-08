let initialState = {
     loading: false,
     data: null,
     err: null,
   };


const listTheaterGroupReducer = (state = initialState, action) => {
     switch (action.type) {
          case 'LIST_THEATER_GROUP_REQUEST':
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
          case 'LIST_THEATER_GROUP_SUCCESS':
            state.loading = false;
            state.data = action.payload;
            state.err = null;
            return { ...state };
      
          case 'LIST_THEATER_GROUP_FAILED':
            state.loading = false;
            state.data = null;
            state.err = action.payload;
            return { ...state };
      
          default:
            return { ...state };
        }

};
export default listTheaterGroupReducer;