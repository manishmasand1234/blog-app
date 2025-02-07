import React from 'react'
import Header from '../common/Header'

export default function Error404() {
  return (
    <div>
      <Header />
      <h1 className='error'>Error 404 occured</h1>
      <div style={{display: 'flex' , justifyContent: 'center' , alignItems: 'center' , margin: 0 , padding: 0 }}>
      <img  src="https://media.istockphoto.com/id/1152189152/vector/red-alert-icon.jpg?s=612x612&w=0&k=20&c=Kw_-i314F4cxgn2hmakp-88-O45FSx62c6r-OzKYMw4=" alt="error" />
      </div>
      
    </div>
  )
}
