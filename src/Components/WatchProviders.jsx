import React,{useState, useEffect} from "react"
import axios from "axios"
import { useParams } from "react-router-dom";
import './WatchProvider.css';
export default function WatchProviders(){
    const [name, setName]=useState([]);
    const {id} = useParams();
    useEffect(() => {
        getData()
    }, []);
    useEffect(() => {
        getData()
    }, [id]);
    const getData =()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=48ede668438dba2054f2ebe0da2cb264`).then((res)=>
        {
            setName(res.data.results.CA.buy);
            console.log(res.data.results.CA.buy)
        }
        ).catch((err)=>err.status_code);
    }
    return(
        <>
        <div className="container-fluid main">
            <p className="fs-4">Stream at</p>
            {
                name.map((item)=>{
                    return(
                        <div className="dp mt-3">
                        <p className="">{item.provider_name ? item.provider_name : "No platforms Found"}</p>
                        {
                            item.logo_path ? null:"no image available"  
                        }
                        <img src={`https://image.tmdb.org/t/p/original/${item.logo_path}`} className="img-wp" alt=""/> 
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}