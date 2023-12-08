import React, { useState, useEffect } from 'react';
import './Banner.css';
import requests from './Request';
import instance from './axios';


export default function Banner() {
    const [movie, setMovie] = useState([])


    useEffect(() => {
        const getTrending = instance.get(requests.fetchNetflixOriginals);
        getTrending.then(resp => {
            const random = resp.data.results[Math.floor(Math.random() * resp.data.results.length - 1)]
            setMovie(random)
        })
    }, [])
    console.log(movie)
    //functions


    function truncate(string, num) {
        return string?.length > num ? string.substr(0, num - 1) + "..." : string;
    }
    return (
        <>
            <header className='banner' style={{
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path
                    }")`,


            }}>
                <div className="banner-content">
                    <div className="banner-title">
                        <h1>{movie?.original_title
                            || movie?.name || movie?.original_name || movie?.title}</h1>
                    </div>
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My List</button>
                    <div className="banner-description">
                        {truncate(`${movie?.overview}`, 150)}
                    </div>
                </div>
                <div className="banner-fadebtn"></div>

            </header>

        </>
    )
}
