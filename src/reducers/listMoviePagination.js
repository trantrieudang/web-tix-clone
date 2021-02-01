let initialState = {
     loading: false,
     data: null,
     err: null,
   };


const listMoviePagReducer = (state = initialState, action) => {
     switch (action.type) {
          case 'LIST_MOVIE_PAG_REQUEST':
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
          case 'LIST_MOVIE_PAG_SUCCESS':
            state.loading = false;
            state.data = action.payload;
            state.err = null;
            return { ...state };
      
          case 'LIST_MOVIE_PAG_FAILED':
            state.loading = false;
            state.data = null;
            state.err = action.payload;
            return { ...state };
      
          default:
            return { ...state };
        }

};
export default listMoviePagReducer;