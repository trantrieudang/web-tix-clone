import axiosClient from './axiosClient';

const listMoviePaginationApi = {
     getAll: (params) => {
          const url = '/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP02&soTrang=1&soPhanTuTrenTrang=10';
          return axiosClient.get(url, {params});
     },
     get: (id) => {
          const url = `/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP02&soTrang=1&soPhanTuTrenTrang=10/${id}`;
          return axiosClient.get(url);
     },
}
export default listMoviePaginationApi;