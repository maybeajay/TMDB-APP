import React, {useState, useEffect} from "react"
import Skeleton,{SkeletonTheme}  from "react-loading-skeleton";
import { Link } from "react-router-dom";
import {FaStar} from 'react-icons/fa'
import "./Card.css";
export default function Card({movie}){
    const [isLoading, setIsLoading] =useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        }, 1500)
    })
    return(
        <>
            {
                isLoading ?
                <div className="cards">
                    <SkeletonTheme color="#202020" highlightColor="#444" circle={"true"}>
                <Skeleton height={300} duration={1.5} enableAnimation={true} direction={"ltr"}/>
            </SkeletonTheme>
                </div>
                :
                <Link to={`/movie/${movie.id}`} style={{textDecoration: "none", color:"white"}}>
                    <div className="cards">
                        <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}` }/>
                        <div className="cards__overlay">
                            <div className="cards__title">
                                {movie?movie.original_title:""}
                            </div>
                            <div className="cards__runtime">
                                {movie?movie.release_data:""}
                                <span className="cards__rating">{movie.vote_average}<FaStar /></span>
                            </div>
                            <div className="cards__description">
                                {movie?movie.overview.slice(0, 118)+"...":""}
                            </div>
                        </div>
                    </div> 
                </Link>
            }
            </>
    )
}
