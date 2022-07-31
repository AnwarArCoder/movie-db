import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({itemMovie}) => {
  return (
    <div className='col-md-6 col-lg-4'>
        <Link to={`/post/${itemMovie.id}`}>
            <div className='post-box'>
                <div className='img-box'>
                    <img className="img-fluid" src={`https://image.tmdb.org/t/p/w500`+itemMovie.poster_path} alt={itemMovie.title} />
                </div>
                <div className='hover-text-box'>
                    <ul>
                        <li>اسم الفلم : <span><b>{itemMovie.title}</b></span></li>
                        <li>تاريخ الاصدار : <span><b>{itemMovie.release_date}</b></span></li>
                        <li>التقييم : <span><b>{itemMovie.vote_average}</b></span></li>
                        <li>عدد المقيمين : <span><b>{itemMovie.vote_count}</b></span></li>
                    </ul>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Post