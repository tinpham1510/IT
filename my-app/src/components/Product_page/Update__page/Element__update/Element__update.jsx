import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams, Switch, Route, Link } from 'react-router-dom';
import { Form, Col } from 'react-bootstrap'
import Element__update__info from '../Element__update__info/Element__update__info';
import './Element__update.css'
import ScrolltoTop from '../../../ScrolltoTop/ScrolltoTop';
function Element__update(props) {
    const { id } = useParams();
    const [products, setProduct] = useState({});
    useEffect(() => {
        async function fetchData() {
            const requestUrl = `http://localhost:3001/api/san-pham/${id}`;
            const respone = await fetch(requestUrl);
            const responseJson = await respone.json();
            const { data } = responseJson;
            setProduct(data);
            console.log(id)
        }
        fetchData();
    }, [id])
    let history = useHistory();



    return (
        <div>
            <div className="product-list" style={{ height: '700px' }} >

                <div className="product-container" style={{ display: 'flex', width: '150%' }}>
                    {products && (
                        <>
                            <div className="card" style={{ width: '120%', height: '50%', marginRight: '3%', marginBottom: '3%' }} id={products.ma_san_pham}>
                                <div className="title"> <h2 style={{ textAlign: 'center' }}>{products.ten_san_pham}</h2></div>
                                <br />
                                <div className="img" style={{ textAlign: 'center' }}>
                                    <img src={products.file && products.file[0]}></img>
                                </div>
                                <div className="text">{products.gia_tien}$</div>
                                <br />


                            </div>
                            <div className="container2" style={{ width: '100%' }}>
                                <div className="title">
                                    <Form.Group>
                                        <Form.Row>
                                            <Form.Label column="lg" lg={3}>
                                                Tên sản phẩm
                                            </Form.Label>
                                            <Col>
                                                <Form.Control size="lg" type="text" id="ten" value={products.ten_san_pham} />
                                            </Col>
                                        </Form.Row>
                                        <br />
                                        <Form.Row>
                                            <Form.Label column="lg" lg={3}>
                                                Giá ($)
                                            </Form.Label>
                                            <Col>
                                                <Form.Control size="lg" type="text" value={products.gia_tien} />
                                            </Col>
                                        </Form.Row>
                                        <br />
                                        <Form.Row>
                                            <Form.Label column="lg" lg={3}>
                                                Số lượng
                                            </Form.Label>
                                            <Col>
                                                <Form.Control size="lg" type="text" value={products.so_luong} />
                                            </Col>
                                        </Form.Row>
                                        <br />
                                        <Form.Row>
                                            <Form.Label column="lg" lg={3}>
                                                Mô tả
                                            </Form.Label>
                                            <Col>
                                                <Form.Control as="textarea" rows={4} value={products.mo_ta} />
                                            </Col>
                                        </Form.Row>
                                        <br />
                                        <Form.Row>
                                            <Form.Label column="lg" lg={3}>
                                                Ghi chú
                                            </Form.Label>
                                            <Col>
                                                <Form.Control as="textarea" rows={4} value={products.cau_hinh} />
                                            </Col>
                                        </Form.Row>
                                        <br />
                                        <Form.Row>
                                            <Form.Label column="lg" lg={3}>
                                                Tên thương hiệu
                                            </Form.Label>
                                            <Col>
                                                <Form.Control size="lg" type="text" value={products.ten_thuong_hieu} />
                                            </Col>
                                        </Form.Row>
                                        <br />
                                        <Form.Row>
                                            <Form.Label column="lg" lg={3}>
                                                Xuất xứ
                                            </Form.Label>
                                            <Col>
                                                <Form.Control size="lg" type="text" value={products.xuat_xu} />
                                            </Col>
                                        </Form.Row>
                                        <br />
                                        <Form.Row>
                                            <Form.Label column="lg" lg={3}>
                                                Tình trạng
                                            </Form.Label>
                                            <Col>
                                                <Form.Control size="lg" type="text" value={products.tinh_trang_san_pham} />
                                            </Col>
                                        </Form.Row>
                                        <br />
                                        <Form.Row>
                                            <Form.Label column="lg" lg={5}>
                                                Thời gian đã sử dụng (năm)
                                            </Form.Label>
                                            <Col>

                                                <Form.Control size="lg" type="text" value={products.thoi_gian_su_dung} />
                                            </Col>
                                        </Form.Row>
                                        <br />
                                        <Link to={`/Product_page/Update__page/Element__update__info/${id}`}>
                                            <div class="button" style={{ textAlign: "center" }}>
                                                <button className="btn btn-info mr-0">Cập nhật sản phẩm</button>

                                            </div>
                                            <br />
                                        </Link>

                                    </Form.Group>

                                </div>
                                <>
                                    <Switch>
                                        <Route
                                            path="/Product_page/Update__page/Element__update__info/:id"
                                            component={Element__update__info}
                                        ></Route>
                                    </Switch>
                                </>
                            </div>
                        </>

                    )}
                </div>

            </div>
            <ScrolltoTop />
        </div>
    );
}

export default Element__update;