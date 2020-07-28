import React, { Fragment } from 'react';
import '../App.css'
import ImgCat from '../img/cat.jpg';
import ImgDog from '../img/dog.jpg';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';


const Main = () => {
  return (
    <div>
      <div className="main-page-nav ">

        <div className="main-page-nav-img dogs">
          <img src={ImgDog} alt="" />
          <h2>DOGS</h2>
          <div className="nav-btn"><Link to='/dogs'>VIEW</Link></div>
        </div>
        <div className="main-page-nav-img cats">
          <img src={ImgCat} alt="" />
          <h2>Cats</h2>
          <div className="nav-btn"><Link to='/cats'>VIEW</Link></div>
        </div>

      </div>
      <h1 style={{}}>Copyright @ 2020 Unsplash</h1>
      <Footer />
    </div>
  )
}

export default Main
