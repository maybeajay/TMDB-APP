import React, {useState, useEffect} from "react";
import axios from "axios";
import './MovieDetail.css';
import { useParams } from "react-router-dom";
import WatchProviders from "../../Components/WatchProviders";
import Cast from "../../Components/Cast";
export default function MovieDetail(){
    const [currentMovieDetail, setCurrentMovieDetail] = useState();
    const {id}=useParams();
    useEffect(()=>{
        getData();
    })
    const getData = ()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=48ede668438dba2054f2ebe0da2cb264&language=en-US`).then((res)=>{setCurrentMovieDetail(res.data)}).catch((err)=>console.log(err.message+"inside moviedetail component"))
    }
    return(
        <div className="movie container-fluid">
            <div className="movie__intro">
                <img className="movie__backdrop img-bhd" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} alt="intro"/>
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} alt="poster"/>
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="movie__tagline txt">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating txt">
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""
                            }
                            <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime txt">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate txt">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="movie__genre txt" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {
                    currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_main" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
            <div className="movie__heading">Production companies</div>
            <div className="movie__production container-fluid">
                {
                    currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
                        <>
                            {
                                company.logo_path 
                                && 
                                <div className="productionCompanyImage">
                                    <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} alt="product company "/>
                                    <span>{company.name}</span>
                                </div>
                            }
                        </>
                    ))
                }
            </div>
            <Cast />
            <WatchProviders />
        </div>
    )
}