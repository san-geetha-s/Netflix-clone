
import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'

import { API_KEY ,imageUrl } from '../../constants/constants'


function Banner() {
 const [movie,setMovie]=useState()
 
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      const results = response.data.results
const newIndex = Math.floor(Math.random() * results.length)
      console.log(response.data);
      setMovie(response.data.results[newIndex
      ])
    })

  },[])

  
  
  
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path :""})`}}  className='banner'>

        <div className='content'>
            <h1 className='title'>{movie ? movie.title :""}</h1>
            <div className='banner_buttons'></div>
            <button className='button'>Play</button>
            <button className='button'>My List</button>

        </div>
      <h1 className='description'>{movie ? movie.overview :"" }</h1>
      <div className="fade_bottom">
        

      </div>
    </div>
    
  )
}

export default Banner
