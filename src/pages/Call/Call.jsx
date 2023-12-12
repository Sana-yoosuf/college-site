import React from 'react'
import banner1 from '../../assets/imgs/banner2.jpg'
import  './Call.css'

const Call = () => {
  return (
    <section className="call" style={{ backgroundImage:`linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),  url(${banner1})`}}>
      <h1>
        Enroll For Our Various Online Corses<br />
        Anywhere From The World
      </h1>
      <a href="" className="hero-btn">CONTACT US</a>
    </section>
  )
}

export default Call