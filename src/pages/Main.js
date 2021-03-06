import React from 'react';
import './pages.css'
import ImgCat from '../img/3/cat.jpg';
import ImgDog from '../img/3/dog.jpg';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const imgVariants = {
  hover: {
    scale: 1.2,

  },

}
const Main = () => {
  return (
    <div>
      <div className="main-page-nav ">
        <Link to='/dogs'>
          <div className="main-page-nav-img dogs">
            <motion.img src={ImgDog}
              variants={imgVariants}
              whileHover="hover"
              transition={{
                default: { duration: 5 }
              }}
            />
            <h2>DOGS</h2>
            <div className="nav-btn">VIEW</div>
          </div>
        </Link>
        <Link to='/cats'> 
        <div
          className="main-page-nav-img cats"
        >

          <motion.img src={ImgCat}
            variants={imgVariants}
            whileHover="hover"
            transition={{
              default: { duration: 5 }
            }} />
          <h2>CATS</h2>
          <div className="nav-btn">VIEW</div>
        </div>
        </Link>
      </div>

      <Footer />
    </div>
  )
}

export default Main
