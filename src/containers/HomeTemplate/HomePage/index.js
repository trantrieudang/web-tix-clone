import React, { useEffect } from "react";
import Carousel from "./components/Carousel";
import Searchbar from "./components/Searchbar";
import Filmlist from './components/Filmlist';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import listMovieApi from "../../../api/listMovieApi";
import listTheaterApi from '../../../api/listTheaterApi';
import listMoviePaginationApi from "../../../api/listMoviePagination";
import {
  actListMovieSuccess,
  actListMovieFailed,
  actListMovieRequest,
} from "../../../actions/listMovie";

import {
  actListTheaterRequest,
  actListTheaterSuccess,
  actListTheaterFailed,
} from "../../../actions/listTheater";

import {
  actListMoviePagSuccess,
  actListMoviePagFailed,
  actListMoviePagRequest,
} from "../../../actions/listMoviePagination.js";

import Showtime from './components/Showtime';
import News from "./components/News";
import App from "./components/Application";
import Footer from "./components/Footer";

function HomePage(props) {
  const listMovie = useSelector(
    (state) => ({
      loading: state.listMovie.loading,
      data: state.listMovie.data,
    }),
    shallowEqual
  );

  const listTheater = useSelector(
    (state) => ({
      loading: state.listTheater.loading,
      data: state.listTheater.data,
    }),
    shallowEqual
  );


  const listMoviePag = useSelector(
    
    (state) => ({
      loading: state.listMoviePag.loading,
      data: state.listMoviePag.data,
    }),
    
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchListMovie = async () => {
      const action = actListMovieRequest();
      dispatch(action);
      try {
        const response = await listMovieApi.getAll();
        const action = actListMovieSuccess(response);
        dispatch(action);
      } catch (error) {
        const action = actListMovieFailed(error);
        dispatch(action);
      }
    };
    const fetchListMoviePag = async () => {
      const action = actListMoviePagRequest();
      dispatch(action);
      try {
        const response = await listMoviePaginationApi.getAll();
        const action = actListMoviePagSuccess(response);
        dispatch(action);
      } catch (error) {
        const action = actListMoviePagFailed(error);
        dispatch(action);
      }
      
    };
    const fetchListTheater = async () => {
      const action = actListTheaterRequest();
      dispatch(action);
      try {
        const response = await listTheaterApi.getAll();
        const action = actListTheaterSuccess(response);
        dispatch(action);
      } catch (error) {
        const action = actListTheaterFailed(error);
        dispatch(action);
      }
    };
    fetchListMovie();
    fetchListTheater();
    fetchListMoviePag();
  }, [dispatch]);
 
  return (
    
    <div>
      <Carousel />
      <Searchbar listMovie={listMovie.data} listTheater={listTheater.data}/>
      <Filmlist listMovie={listMovie.data}
                listMoviePag={listMoviePag.data}
       />
       <Showtime listTheater={listTheater.data} listMovie={listMovie.data} />
       <News />
       <App />
       <Footer />
    </div>
  );
}

export default HomePage;
