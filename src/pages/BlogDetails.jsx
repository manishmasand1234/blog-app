import React from 'react'
import Header from '../common/Header';
import { useLocation } from 'react-router-dom';
import { blogs } from '../Data/blogs';
import './BlogDetails.css';

export default function BlogDetails() {

  let uselocation = useLocation();
  let currentId = uselocation.pathname.split('/')[2]
  let currentData = blogs.filter((v)=>v.id==currentId)[0]
  console.log(currentData);

  let goback = ()=>{
    window.history.back();
  }



  return (
    <div>
      <Header />

      <div className='Divi'>
        <div className='btn1'><button className='btn' onClick={goback}>&times;</button></div>
        
        <h1>{currentData.title}</h1>
        <hr />
        <p className='para'>{currentData.body}</p>


      </div>
    </div>
  )
}
