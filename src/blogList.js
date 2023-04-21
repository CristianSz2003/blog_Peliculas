import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';



const BlogList = () =>{

  
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "a89534d9a001abecbcee0de5e721f923";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original/";
  const URL_IMAGE = "https://image.tmdb.org/t/p/original/";

  const[Movies, setMovies] = useState([])
  const[searchKey, setSearchKey] = useState("")
  const[Movie, setMovie] = useState({ title: "Loading Movie"})
 

  const fetchMovies = async(searchKey) => {
    const type = searchKey ? "search" : "discover"
    const {data:{results},
  } = await axios.get(`${API_URL}/${type}/movie`,{
    params: {
      api_key: API_KEY,
      query: searchKey,
    },
  });

  setMovies(results)
  setMovie(results[0])
  }

  





  useEffect(()=>{
    fetchMovies();
  },[])

  return (
    <div>
      <p></p>
      <p></p>
      <h2 className="text-center">Estrenos</h2>
      <div className="container mt-3">
        <div className="row">
          {Movies.map((movie)=>(
            <div key={movie.id} className="col-md-4 mb-3">
              <img src={`${URL_IMAGE + movie.poster_path}`} alt="" height={600} width="100%"/>
              <h3 className="text-center">{movie.title}</h3>
            </div>
          ) )}

        </div>
      </div>
    </div>          
  );
}


export default BlogList;