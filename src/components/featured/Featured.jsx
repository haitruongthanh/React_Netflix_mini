import "./featured.scss";
import { PlayArrow, InfoOutlined } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { movieService } from "../../services/movieService";
import _ from "lodash";
import { Link } from "react-router-dom";

const ranMovie = {
  biDanh: "end-game-1",
  dangChieu: null,
  danhGia: 10,
  hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/end-game-1_gp02.jpg",
  hot: null,
  maNhom: "GP02",
  maPhim: 7102,
  moTa: "End Game Avenger",
  ngayKhoiChieu: "2021-07-06T02:36:04.077",
  sapChieu: null,
  tenPhim: "End Game 1",
  trailer: 'https://www.youtube.com/embed/TcMBFSGVi1c"',
};

const Featured = () => {
  const [ramdomMovie, setRamdomMovie] = useState([ranMovie]);

  const [play, setPlay] = useState(false);

  useEffect(() => {
    movieService
      .getRadomMovie()
      .then((res) => {
        let ran = _.sampleSize(res.data.content, 1);
        setRamdomMovie(ran);
        // console.log("ran", ran);
        setTimeout(() => {
          setPlay(true);
        }, 3000);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div className="featured">
      {!play && <img src={ramdomMovie[0].hinhAnh} alt="" />}
      {play && (
        <iframe
          width="100%"
          height="100%"
          src={`${ramdomMovie[0].trailer}?autoplay=1&mute=1`}
          title={ramdomMovie[0].tenPhim}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      )}
      <div className="info">
        <h2>{ramdomMovie[0].tenPhim}</h2>
        <span className="desc">{ramdomMovie[0].moTa}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <Link to={{ pathname: `/watch/${ramdomMovie[0].maPhim}` }}>
              <span>Play</span>
            </Link>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
