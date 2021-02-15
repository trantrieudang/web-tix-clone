import { combineReducers } from "redux";
import listMovieReducer from './listMovie';
import listTheaterReducer from './listTheater';
import listMoviePagReducer from './listMoviePagination';
import userReducer from '../containers/AdminTemplate/AuthPage/components/userSlice';
const rootReducer = combineReducers({
     listMovie: listMovieReducer,
     listTheater: listTheaterReducer,
     listMoviePag: listMoviePagReducer,
     user: userReducer,
});

export default rootReducer;
