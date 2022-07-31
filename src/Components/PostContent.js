import React from 'react'
import Pagination from './Pagination'
import Post from './Post'

const PostContent = ({movies, getPage, pageCountNum}) => {
  return (
    <section className='post-content'>
        <div className='row'>
            {
                movies.length >= 1 ? (movies.map( itemMovie => {
                    return(
                        <Post key={itemMovie.id} itemMovie={itemMovie} />
                    )
                } )) : <h3 className="no-item text-center">لا يوجد افلام</h3>
            }
            {
                movies.length >= 1 ? (<Pagination getPage={getPage} pageCountNum={pageCountNum} />) : null
            }
        </div>
    </section>
  )
}

export default PostContent