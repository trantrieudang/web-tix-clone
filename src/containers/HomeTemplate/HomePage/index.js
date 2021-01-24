import React, { useEffect } from "react";
import Carousel from "./components/Carousel";
import Searchbar from "./components/Searchbar";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import listMovieApi from "../../../api/listMovieApi";
import listTheaterApi from '../../../api/listTheaterApi';

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
  }, [dispatch]);
 
  return (
    
    <div>
      <Carousel />
      <Searchbar listMovie={listMovie.data} listTheater={listTheater.data}/>
    </div>
  );
}

export default HomePage;
