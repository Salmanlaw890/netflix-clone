import React from 'react'
import './HomePage.css'
import Banner from './Banner';
import Navbar from './Navbar';
import requests from './Request';
import Row from './Row';

export default function HomePage() {
    return (
        <>
            <Navbar />
            <Banner />
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        </>
    )
}
