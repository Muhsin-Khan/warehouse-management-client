import React from 'react'
import './ExtraTwo.css'

const ExtraTwo = () => {
  return (
    <div className='container'>
        <div className="w-50 mx-auto mt-5">
            <h4 className="feedbakc-title">Say Something about <span className='tech-bhandar-title'>Tech Bhandar</span></h4>
            <form className="d-flex flex-column" action="">
              <input className="mb-2" placeholder="Name" type="text" name="" id="" />
              <input className="mb-2" placeholder="Email" type="email" name="" id="" />
              <textarea className="mb-2" placeholder="Write your feedback..." type="text" name="" id="" />
              <input className="mb-5" type="submit" name="" id="" />
            </form>
          </div>
    </div>
  )
}

export default ExtraTwo