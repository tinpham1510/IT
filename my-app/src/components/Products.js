import React from 'react';
import queryString from 'query-string'
import '../Home_pageCSS/Products.css';
import Slider from 'react-slick'
import image1 from '../assets/images/laptop_zenbook.jpg';
import useFetch from './fetch'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
const Products = () => {
    const setting1 = {
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
      const param={
        ma_loai_san_pham:'Laptop'
      }
      const queryStrings=queryString.stringify(param);
    //   console.log(queryStrings);
      const { data: productList}=useFetch(       
        `http://localhost:3001/api/san-pham?${queryStrings}`
      )
    return (
        <div className="popular">
            <h6 className="popular__product">Popular Products</h6>
            <div className="container">
                <Slider {...setting1} >
                    {productList && productList.map(product=>(
                    <Link to={`/Element_page/${product.ma_san_pham}`}>
                        <div className="card" id={product.ma_san_pham}>
                            <div classname="title">
                                <h5>
                                    {product.ten_san_pham}
                                </h5>
                            </div>
                            <div classname="img">
                                <img src={product.file&&product.file[0]}></img>
                            </div>
                            <div className="text">
                                {
                                    product.gia_tien
                                }$
                            </div>
                            <button className="btbuy">
                                Buy Now
                            </button>
                        </div>
                    </Link>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Products;