export const actListMoviePagRequest = () => {
     return {
       type: 'LIST_MOVIE_PAG_REQUEST',
     };
   };
   
   export const actListMoviePagSuccess = (data) => {
     return {
       type: 'LIST_MOVIE_PAG_SUCCESS',
       payload: data,
     };
   };
   
   export const actListMoviePagFailed = (err) => {
     return {
       type: 'LIST_MOVIE_PAG_FAILED',
       payload: err,
     };
   };