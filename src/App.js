import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import PostContent from "./Components/PostContent";
import DetailsPostContent from "./Components/DetailsPostContent";

function App() {
  // Store Movies On useState
  const [movies, setMovies] = useState([]);

  const [pageCountNum, setPageCountNum] = useState(0);

  // Get All Movies By Axios
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=930d1425f0d4cfde946e81f0ce829c02&language=ar-US&page=1"
    );

    setMovies(res.data.results);

    setPageCountNum(res.data.total_pages);
  };

  // Use UseEffect
  useEffect(() => {
    // CallBack Func getAllMovies()
    getAllMovies();
  }, []);

  // Get All Number Of Movies PAge By Axios
  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=930d1425f0d4cfde946e81f0ce829c02&language=ar-US&page=${page}`
    );

    setMovies(res.data.results);

    setPageCountNum(res.data.total_pages);
  };

  // Get All Search Word By Axios
  const searchWord = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=930d1425f0d4cfde946e81f0ce829c02&language=ar&query=${word}`
      );

      setMovies(res.data.results);

      setPageCountNum(res.data.total_pages);
    }
  };

  return (
    <div className="App">
      <Navbar searchWord={searchWord} />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <PostContent
                  movies={movies}
                  getPage={getPage}
                  pageCountNum={pageCountNum}
                />
              }
            />
            <Route
              path="/post/:id"
              element={
                <DetailsPostContent />
              } />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
