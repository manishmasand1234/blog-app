import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>
            HOME
          </Link>
          </li>
          <li>
            <Link to={'/about-us'}>About</Link>
            
          </li>
          <li>
            <Link to={'/contact'}>Contact US</Link>
            
          </li>
          <li>
            <Link to={'/blog'}>Blog</Link>
            
          </li>
        </ul>
      </nav>
    </div>
  )
}
