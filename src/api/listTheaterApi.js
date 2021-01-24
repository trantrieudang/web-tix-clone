import axiosClient from './axiosClient';

const listTheaterApi = {
     getAll: (params) => {
          const url = '/QuanLyRap/LayThongTinHeThongRap';
          return axiosClient.get(url, {params});
     },
     get: (id) => {
          const url = `/QuanLyRap/LayThongTinHeThongRap/${id}`;
          return axiosClient.get(url);
     },
}
export default listTheaterApi;