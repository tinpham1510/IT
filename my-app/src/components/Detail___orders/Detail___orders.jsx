import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useHistory, useParams, Link } from 'react-router-dom';
import './Detail___orders.css';
import Loading from '../Loading_page/Loading';
function Detail___orders(props) {
    const { id } = useParams();
    const [getData, SetData] = useState([]);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    useEffect(() => {
        console.log(id)
        axios.get(`http://localhost:3001/api/don-hang/chi-tiet?ma_don_hang=${id}`, { withCredentials: true })
            .then(resp => {
                SetData(resp.data.data)
                setLoading(true)
            })
    }, [id])

    const Back = e => {
        e.preventDefault();
        history.goBack();
        localStorage.removeItem('ID_don_hang')
    }
    return (
        <div>
            <h2>Chi tiết đơn hàng</h2>
            {loading ?

                <div>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Mã đơn hàng</Form.Label>
                            <Form.Control type="text" value={getData.ma_don_hang} readOnly="true" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput2">
                            <Form.Label>Mã Khách hàng</Form.Label>
                            <Form.Control type="text" value={getData.ma_nguoi_dung}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={getData.email}>
                            </Form.Control>
                        </Form.Group>
                        {getData.san_pham != null &&
                            getData.san_pham.map((file, index) => (

                                <>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>
                                            Mã Sản phẩm: <Link to={`/Element_page/${getData.san_pham[index].ma_san_pham}`}>
                                                {getData.san_pham[index].ma_san_pham}
                                            </Link>


                                        </Form.Label>

                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput4">
                                        <Form.Label>Số Lượng</Form.Label>
                                        <Form.Control type="text" value={getData.san_pham[index].so_luong}>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput5">
                                        <Form.Label>Giá</Form.Label>
                                        <Form.Control type="text" value={getData.san_pham[index].gia_tien}>
                                        </Form.Control>
                                    </Form.Group>
                                </>
                            ))}
                        <Form.Group controlId="exampleForm.ControlInput6">
                            <Form.Label>Tình trạng đơn hàng</Form.Label>
                            <Form.Control type="text" value={getData.tinh_trang_don_hang}>
                            </Form.Control>
                        </Form.Group>

                    </Form>


                    <div className="button">
                        <button className="btn btn-info mr-2" onClick={Back}>Quay lại</button>
                    </div>
                </div>
                : <Loading />
            }

        </div>
    );
}

export default Detail___orders;