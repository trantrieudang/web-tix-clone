import axiosClient from './axiosClient';

const listTheaterGroupApi = {
     getAll: (params) => {
          const url = '/QuanLyRap/LayThongTinCumRapTheoHeThong';
          return axiosClient.get(url, {params});
     },
     get: (id) => {
          const url = `/QuanLyRap/LayThongTinCumRapTheoHeThong/${id}`;
          return axiosClient.get(url);
     },
}
export default listTheaterGroupApi;