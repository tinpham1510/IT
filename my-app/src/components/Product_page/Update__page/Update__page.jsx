import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Element__update__info from './Element__update__info/Element__update__info';
import Element__update from './Element__update/Element__update';
import ScrolltoTop from '../../ScrolltoTop/ScrolltoTop';
function Update__page(props) {
    const [getData, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const requestUrl = 'http://localhost:3001/api/san-pham'
            const respone = await fetch(requestUrl);
            const responseJson = await respone.json();
            const { data } = responseJson;
            setData(data);
            console.log(data)
        }
        fetchData();

    }, [])
    return (

        <>
            <div>
                <Switch>
                    <Route
                        path="/Product_page/Update__page/Element__update/:id"
                        component={Element__update}
                    ></Route>
                    <Route
                        path="/Product_page/Update__page/Element__update__info/:id"
                        component={Element__update__info}
                    ></Route>
                </Switch>
            </div>
            <div className="product_list" >

                <div className="product_container">
                    {getData != null && getData.map((products) => (

                        <div className="card" id={products.ma_san_pham}>
                            <>

                            </>
                            <div className="title" id="IDsanpham">{products.ten_san_pham}</div>
                            <br />
                            <div className="img">
                                <Link to={`/Product_page/Update__page/Element__update/${products.ma_san_pham}`}>
                                    <img src={products.file && products.file[0]}></img>
                                </Link>
                            </div>
                            <div className="text">{products.gia_tien}$</div>
                            <br />
                            <Link to={`/Product_page/Update__page/Element__update/${products.ma_san_pham}`}>
                                <button className="btbuy">
                                    Cập nhật
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
                <ScrolltoTop />

            </div>


        </>
    );
}

export default Update__page;