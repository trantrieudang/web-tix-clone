export const actListMovieRequest = () => {
     return {
       type: 'LIST_MOVIE_REQUEST',
     };
   };
   
   export const actListMovieSuccess = (data) => {
     return {
       type: 'LIST_MOVIE_SUCCESS',
       payload: data,
     };
   };
   
   export const actListMovieFailed = (err) => {
     return {
       type: 'LIST_MOVIE_FAILED',
       payload: err,
     };
   };