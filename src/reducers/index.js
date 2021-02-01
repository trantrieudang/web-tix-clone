import { combineReducers } from "redux";
import listMovieReducer from './listMovie';
import listTheaterReducer from './listTheater';
import listMoviePagReducer from './listMoviePagination';
const rootReducer = combineReducers({
     listMovie: listMovieReducer,
     listTheater: listTheaterReducer,
     listMoviePag: listMoviePagReducer,
});

export default rootReducer;
