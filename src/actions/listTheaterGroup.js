export const actListTheaterGroupRequest = () => {
     return {
       type: 'LIST_THEATER_REQUEST',
     };
   };
   
   export const actListTheaterGroupSuccess = (data) => {
     return {
       type: 'LIST_THEATER_SUCCESS',
       payload: data,
     };
   };
   
   export const actListTheaterGroupFailed = (err) => {
     return {
       type: 'LIST_THEATER_FAILED',
       payload: err,
     };
   };