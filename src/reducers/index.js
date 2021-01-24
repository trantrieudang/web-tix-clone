import { combineReducers } from "redux";
import listMovieReducer from './listMovie';
import listTheaterReducer from './listTheater';

const rootReducer = combineReducers({
     listMovie: listMovieReducer,
     listTheater: listTheaterReducer,
});

export default rootReducer;
