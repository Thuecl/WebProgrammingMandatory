import React from 'react'
import '../App.css';
import MainHeader from '../components/MainHeader';
import { useGetMovieQuery } from '../redux/api/query';
import MovieBox from '../components/MovieBox';

const Home = () => {
    const { data, isLoading } = useGetMovieQuery();

    return (
        <>
            <MainHeader />
            <main className='main'>

                {isLoading ? <div>Loading...</div> :
                    data.results.map((movie) => {
                        return (
                            <MovieBox key={movie.id} movie={movie} />
                        );
                    })}
            </main>
        </>
    );
}

export default Home