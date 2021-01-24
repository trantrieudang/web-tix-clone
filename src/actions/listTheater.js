export const actListTheaterRequest = () => {
     return {
       type: 'LIST_THEATER_REQUEST',
     };
   };
   
   export const actListTheaterSuccess = (data) => {
     return {
       type: 'LIST_THEATER_SUCCESS',
       payload: data,
     };
   };
   
   export const actListTheaterFailed = (err) => {
     return {
       type: 'LIST_THEATER_FAILED',
       payload: err,
     };
   };