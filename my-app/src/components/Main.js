import React, { useState,useEffect } from 'react';
// import Slider from './Slider';
import Slider from 'react-slick'
import Carousel from 'react-elastic-carousel';
import '../Home_pageCSS/Main.css';
import useFetch from './fetch'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

 function Main(){
    let history=useHistory();
    // function handleClick() {
    //     <Link to="/Element_page"></Link>
    //     // history.push("/Element_page");
    //   }
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        lazyLoad: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    // const [productList,setProductList]=useState()
    // http://localhost:3001/api/san-pham
    // useEffect(() => {
    //     async function fetchData(){
    //         const requestUrl='http://localhost:3001/api/san-pham'
    //         const respone= await fetch(requestUrl);
    //         const responseJson= await respone.json();
    //         const {data} =responseJson;
    //         // console.log(data)
    //         setProductList(data);
    //     }
    //     fetchData();
    // }, [])
    
    const { data : productList}=useFetch(
        "http://localhost:3001/api/san-pham"
    )
    return (
        <div class="container2">
             <li class="font">Items</li>
            <div className="container">
                
                <Slider {...settings}>
                    {productList && 
                        productList.map(product=>(
                        <Link to={`/Element_page/${product.ma_san_pham}`}>
                            <div className="item__element">
                                <img src={product.file} alt="Image1"/>
                                <div class="text">
                                    <h3>{product.ten_san_pham}</h3>
                                    <p>{product.gia_tien}$</p>
                                    <button >Buy now</button>
                                </div>
                            </div>
                        </Link>
                    ))
                }
                    
                </Slider>
                
            </div>
           
          
        </div>
    );
};

export default Main

