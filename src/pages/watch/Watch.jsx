import "./watch.scss";
import { ArrowBackIosOutlined } from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { movieService } from "../../services/movieService";

const Watch = () => {
  let param = useParams();

  const [movie, setMovie] = useState({});
  console.log("movie", movie);
  useEffect(() => {
    movieService
      .getMovieById(param.id)
      .then((res) => {
        setMovie(res.data.content);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [param.id]);

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackIosOutlined />
          Home
        </div>
      </Link>
      <iframe
        width="100%"
        height="100%"
        src={movie.trailer}
        title={movie.tenPhim}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Watch;
