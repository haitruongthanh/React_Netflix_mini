import "./listItem.scss";
import {
  ThumbUpAltOutlined,
  ThumbDownAltOutlined,
  PlayArrow,
  Add,
} from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const ListItem = ({ index, movie }) => {
  // console.log("movie", movie);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link to={{ pathname: `/watch/${movie.maPhim}` }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <img src={movie.hinhAnh} alt="" />
        {isHovered && (
          <>
            {/* <video src={trailer} autoPlay={true} loop /> */}
            <iframe
              width="100%"
              height="100%"
              src={`${movie.trailer}?autoplay=1&mute=1`}
              title={movie.tenPhim}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownAltOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>1 hour 14 minute</span>
                <span className="limit">16+</span>
                <span>1999</span>
              </div>
              <div className="desc">{movie.moTa}</div>
              <div className="genre">Action</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListItem;
