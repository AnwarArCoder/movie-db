import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const DetailsPostContent = () => {
  const params = useParams();

  const [moviesDetails, setMoviesDetails] = useState([]);

  // Get Movies Details Page By Axios
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getMoviesDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=930d1425f0d4cfde946e81f0ce829c02&language=ar`
    );

    setMoviesDetails(res.data);
  };

  useEffect(() => {
    getMoviesDetails();
  }, [getMoviesDetails]);

  return (
    <div className="details-post-content">
      <div className="row">
        <div className="col-md-4">
          <div
            className="img-box"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500${moviesDetails.poster_path})`,
            }}
          ></div>
        </div>
        <div className="col-md-8">
          <div className="text-box">
            <h2>{moviesDetails.release_date}</h2>
            <h3>{moviesDetails.title}</h3>
            <ul>
              <li>
                عدد التقيمات : <span>{moviesDetails.vote_count}</span>
              </li>
              <li>
                التقييم: <span>{moviesDetails.vote_average}</span>
              </li>
              <li>
                الاسم الاصلي : <span>{moviesDetails.original_title}</span>
              </li>
              <li>
                اللغه : <span>{moviesDetails.original_language}</span>
              </li>
            </ul>
            <div className="description">{moviesDetails.overview}</div>
            <div className="box-btns">
              <Link to="/">
                <button>العوده الي الرئيسيه</button>
              </Link>
              <a href={moviesDetails.homepage}>
                <button>مشاهده الفيلم</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPostContent;
