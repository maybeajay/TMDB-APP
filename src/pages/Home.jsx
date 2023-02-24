import axios from "axios";
import React,{useEffect, useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import './Home.css'
import { FaStar } from "react-icons/fa";
import MovieList from "../Components/MovieList";
export default function Home(){
    const [popluarmovies, setPopularMovies]=useState([]);
    useEffect(()=>{
         axios.get("https://api.themoviedb.org/3/movie/popular?api_key=48ede668438dba2054f2ebe0da2cb264&language=en-US").then((res)=>{
            setPopularMovies(res.data.results);
        }).catch((error)=>{
            console.log(error.message)
        })
    }, [])
    return(
        <>
        <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popluarmovies.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} key={movie.id}>
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="poster"/>
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <FaStar />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <MovieList />
                </div>
        </>
    )
}
