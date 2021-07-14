import React from 'react';
import image1 from '../assets/images/banner1.png';
import { Button } from 'react-bootstrap';
import '../Home_pageCSS/Slider.css';
import { useHistory } from 'react-router-dom';
const Slider = () => {
  const history =useHistory();
  function handleClick()
  {
    history.push("/Product_page")
  }
    return (
      <div class="container1">
        <div class="contain-banner">
            <h1>Welcome to TI' Store!</h1>
            <img class="img" src={image1}/>
            <p>             
              
            </p>
          
            <p>
              <Button onClick={handleClick} variant="primary">Khám phá ngay</Button>
            </p>
        </div>   
      </div>
      // <div className="container1">slsl</div>

    );
};

export default Slider;
