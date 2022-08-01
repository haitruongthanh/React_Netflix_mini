import { useEffect } from "react";
import { useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import { movieService } from "../../services/movieService";
import _ from "lodash";
import "./home.scss";

const Home = () => {
  const [randomList, setRandomList] = useState([]);

  useEffect(() => {
    movieService
      .getRadomMovie()
      .then((res) => {
        let listArray = _.chunk(res.data.content, 12);
        setRandomList(listArray);
        // console.log("listArray", listArray);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div className="home">
      <Navbar />
      <Featured />
      {randomList.map((listData, i) => {
        return <List data={listData} key={i} />;
      })}
    </div>
  );
};

export default Home;
