import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "./configUrl";

export const movieService = {
  getRadomMovie: () => {
    return axios({
      method: "GET",
      url: `${BASE_URL}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03`,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },
  getMovieById: (maPhim) => {
    return axios({
      method: "GET",
      url: `${BASE_URL}/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },
};
