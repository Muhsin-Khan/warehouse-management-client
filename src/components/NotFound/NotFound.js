import React from 'react'
import notfoundimage from '../../images/Not Found Page/Page Note Found.jpg';
import './NotFound.css';

const NotFound = () => {
  return (
    <div><img className='notFound' 
    src={notfoundimage} 
    alt="" />
    </div>
  )
}

export default NotFound