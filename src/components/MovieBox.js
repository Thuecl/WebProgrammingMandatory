import React from 'react'
import '../App.css';
import no_img from '../img/no_img.jpg'
import heart from '../img/heart.png'
import './css/moviebox.css'
import Heart from './heart'

const MovieBox = ({ movie }) => {

  return (
    <div>
      <div className='movieBox'>

        <div className='cardheader'>
          <div className='imgbox'>
            <img className='img' src={no_img} alt='no_img' />
          </div>

          <div className='title'>
            <h4>{movie.title}</h4>
          </div>
        </div>

        <div className='id'>
          <p>id: {movie.id}</p>
        </div>

        <div className='overview'>
          <p>{movie.overview}</p>
        </div>

        <div className='data'>
          <p>Release date: {movie.release_date}</p>
          <p>Avg. vote: {movie.vote_average}</p>
        </div>


        <div className='like'>
          <img className='heart' src={heart} alt='heart' />
          <Heart />
        </div>



      </div>
    </div >
  )
}

export default MovieBox