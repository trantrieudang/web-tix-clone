export const actUserLoginRequest = () => {
     return {
       type: 'USER_LOGIN_REQUEST',
     };
   };
   
   export const actUserLoginSuccess = (data) => {
     return {
       type: 'USER_LOGIN_SUCCESS',
       payload: data,
     };
   };
   
   export const actUserLoginFailed = (err) => {
     return {
       type: 'USER_LOGIN_FAILED',
       payload: err,
     };
   };