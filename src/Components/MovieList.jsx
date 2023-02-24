import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import './Movie.css';
import axios from "axios";
export default function MovieList(){
    const [movieList, setMovieList] =useState([]);
    const {type}=useParams();

    useEffect(()=>{
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = ()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=48ede668438dba2054f2ebe0da2cb264&language=en-US&page=1`).then((res)=>setMovieList(res.data.results)).catch((err)=>console.log(err.message))
    }
    return(
        <>
        <div className="movie__list">
            <h2 className="list__title">{(type ? type:"popular").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie=>(
                        <Card movie={movie} />
                    ))
                }
            </div>
        </div>
        </>
    )
}