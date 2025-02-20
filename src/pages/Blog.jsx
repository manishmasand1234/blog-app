import React from 'react'
import Header from '../common/Header'
import { blogs } from '../Data/blogs'
import { Link } from 'react-router-dom'

export default function Blog() {

  let allBlogs = blogs.map((v,i) =>{
    return(
      <div className='blogItems' key={i}>
        
          <h5>{v.title}</h5>
          <p> {v.body}
          
          <button className='blogbtn'> <Link to={`/blog/${v.id}`}>Read More</Link></button>
        </p>
      </div>
    )
  })


  return (
    <div>

      <Header />

      <h1>THIS IS BLOG PAGE</h1>

      <div className='container'>

        {allBlogs}



      </div>


    </div>
  )
}
