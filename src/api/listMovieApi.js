import axiosClient from './axiosClient';

const listMovieApi = {
     getAll: (params) => {
          const url = '/QuanLyPhim/LayDanhSachPhim?maNhom=GP01';
          return axiosClient.get(url, {params});
     },
     get: (id) => {
          const url = `/QuanLyPhim/LayDanhSachPhim?maNhom=GP01/${id}`;
          return axiosClient.get(url);
     },
}
export default listMovieApi;