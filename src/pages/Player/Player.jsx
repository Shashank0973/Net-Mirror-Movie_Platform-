import React from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate} from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();
const [apiData, setApiData] = useState({
  name: "",
  key: "",
  published_at: "",
  type: ""
})

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTA3MTJmZWZkNzFkNzIxYjY5YTI3NzI5NTUyOGUzMSIsIm5iZiI6MTc1MzYwNDcxOS4wNzksInN1YiI6IjY4ODVlMjZmOTY3NzI3NmM1MTE2YzM3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MliXQ9SNWGAmDdnoen4QO60DGJYKyTZw6szVbBRUbM8'
  }
};

useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
},[])


  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={() =>{navigate(-2)}} />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.name}</p>
        <p>{apiData.published_at.slice(0, 4)}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player