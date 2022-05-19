import React from 'react'
import './ExtraOne.css'
import ima1 from '../../extra1/1.jpg'
import ima2 from '../../extra1/2.jpg'
import ima3 from '../../extra1/3.jpg'

const ExtraOne = () => {
  return (
    <div className='container'>
        <h1 className='text-center mt-4' >A Glimpse of <span className='tech-bhandar-title'>Tech Bhandar</span></h1>
      <div className='row extraOne container d-flex justify-content-center ps-3 pe-3 pb-5 pt-2 mx-auto'>
          <div className='col col-sm col-md-4  extra-child-div'>
              <img className='img-responsive img-fluid extra1-image' src={ima1} alt="" />
              <div className='extra1-text'>
              <h4>World Wide Transportation</h4>
              <p>Our strong transportation system which include vehicles, Ship and air bus will provide you the best service compare to others which really makes us unique. We almost rach every nook and cronoy all over the world. We try to give us our level best.</p>
              </div>
          </div>
          <div className='col col-sm col-md-4 extra-child-div'>
          <img className='img-responsive img-fluid extra1-image' src={ima2} alt="" />
              <div className='extra1-text'>
              <h4>Care and Caution</h4>
              <p>We care for you, that's why we care your items with highest concern and provide a safe environment for your products. So the don't even get any single casulty. Your products our concern. We want you to be stressless.</p>
              </div>
          </div>
          <div className='col col-sm col-md-4 extra-child-div'>
          <img className='img-responsive img-fluid extra1-image' src={ima3} alt="" />
              <div className='extra1-text'>
              <h4>Management</h4>
              <p>Our stuffs and managing body manage the whole program in fantastic environment with hourmoney that's why we all work togather with joy and a energetic mood which produce an awesom quality in every sector from us.</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default ExtraOne
