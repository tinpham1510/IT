import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../../Loading_page/Loading';
import { Link } from 'react-router-dom';
import ScrolltoTop from '../../ScrolltoTop/ScrolltoTop';
const ALL_product = () => {
    const [getData, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    let [i, setI] = useState(0);
    useEffect(() => {
        async function fetchData() {
            const requestUrl = 'http://localhost:3001/api/san-pham'
            const respone = await fetch(requestUrl);
            const responseJson = await respone.json();
            const { data } = responseJson;
            setData(data);
            console.log(data)
            console.log(i);
            setLoading(true)
        }
        fetchData();
    }, [])
    return (
        <>
            {loading ?
                <div className="product_list" >

                    <div className="product_container">

                        {getData != null && getData.map((products) => (

                            <div className="card" id={products.ma_san_pham}>
                                <div className="title">{products.ten_san_pham}</div>
                                <br />

                                <div className="img">
                                    <Link to={`/Element_page/${products.ma_san_pham}`}>
                                        <img src={products.file && products.file[0]}></img>
                                    </Link>
                                </div>
                                <div className="text">{products.gia_tien}$</div>
                                <br />
                                <Link to={`/Element_page/${products.ma_san_pham}`}>
                                    <button className="btbuy">
                                        Buy Now
                                    </button>
                                </Link>

                            </div>
                        ))}
                    </div>

                </div>

                : <Loading />
            }
            <ScrolltoTop />
        </>
    );
}

export default ALL_product;