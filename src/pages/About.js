import React from 'react';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/header/Header';

const About = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>About</h1>
        <div className="showcase"></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo minima voluptatibus eligendi repellendus eaque ad earum rerum voluptatum. Facilis, debitis earum culpa doloribus quo aperiam molestiae hic quaerat repellat delectus.</p>
        <h2>Our Contacts:</h2>
        <ul>
          <li>pnone number:<span></span>123-45-66</li>
          <li><span>email adress:</span>ururu@gmail.com</li>
          <li><span>adress:</span>Saint Peterburg</li>
        </ul>
        <div className="map"></div>
      </div>
      <Footer />
    </div>
  )
}

export default About
