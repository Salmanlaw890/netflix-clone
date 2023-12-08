import React, { useState, useEffect } from 'react';
import './Row.css'
import instance from './axios';


const base_URL = 'https://image.tmdb.org/t/p/original/';

export default function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        const request = instance.get(fetchUrl).then((resp) => {
            if (resp.status === 200) {
                const random = resp.data.results;
                setMovies(random)
            } else {
                console.log("Error : ");
            }
            console.log(request);

        })
    }, [fetchUrl])
    console.log(movies)
    return (
        <>
            <div className="row">
                <h2>{title}</h2>
                <div className="row-poster">
                    {movies?.map((element) => {
                        return ((element.backdrop_path) && (<>

                            <img className={`poster ${isLargeRow && "large-poster"}`} src={`${base_URL}${element.backdrop_path ? element.backdrop_path : element.poster_path}`} alt={element.name} />
                        </>))
                    })}
                </div>
            </div>
        </>
    )
}
