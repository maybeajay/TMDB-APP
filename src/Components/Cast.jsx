import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import axios from "axios"
import "./Cast.css";
export default function Cast(){
    const [castName, setCastName]=useState([]);
    const {id} = useParams();
    useEffect(()=>{
        getData();
    }, [])
    useEffect(()=>{
        getData();
    }, [id])
    const getData=()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=48ede668438dba2054f2ebe0da2cb264&language=en-US`).then((res)=>
        {
            setCastName(res.data.cast);

        }
        ).catch((err)=>err.status_code);
    }
    return(
        <div className="container-fluid cast-div">
            <p className="fs-2">Cast</p>
            {
                castName.slice(0, 10).map((item)=>{
                    return(
                    <div key={item.id} className="mt-5" style={{width:"100%", height:"100%"}}>
                        {
                            item.profile_path ? null : "no image"
                        }
                    <img src={`https://image.tmdb.org/t/p/original/${item.profile_path}`} alt="" className="cast-img"/>
                    <p className="fs-5 text-center">{item.original_name}</p>
                    </div>
                    )
                })
            }
        </div>
    )
}