import { VariantContext } from '@material-ui/pickers/wrappers/Wrapper';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Loading_page/Loading';
import './Total__orders.css';
const Total__orders = () => {
    const [loading, setLoading] = useState(false);
    const [getData, setData] = useState([]);
    const [dataSP, setDataSP] = useState([]);
    const [num, setNum] = useState(0);
    async function Data() {
        axios.get('http://localhost:3001/api/don-hang/quan-ly', { withCredentials: true })
            .then(resp => {
                setData(resp.data.data)
                setDataSP(resp.data.data.sanPham)
                setLoading(true);
                var sum = resp.data.data.map(
                    (item, index) => setNum(index + 1)
                )



            })
    }
    useEffect(() => {
        Data();
    }, [])

    return (
        <div>

            <>
                {loading ?
                    <>
                        <div className="Total__orders"  >
                            <br />
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Mã đơn hàng</th>
                                        <th>Mã khách hàng</th>
                                        <th>Tài khoản</th>
                                        <th>Email</th>
                                        <th>Trạng thái</th>
                                        <th>Chi tiết</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getData && getData.map((Donhang, index) => (
                                            <tr>
                                                <td id="index">{index}</td>
                                                <td>{Donhang.ma_don_hang}</td>
                                                <td>{Donhang.ma_nguoi_dung}</td>
                                                <td>{Donhang.ten_nguoi_nhan}</td>
                                                <td>{Donhang.email}</td>
                                                <td>{Donhang.tinh_trang_don_hang}</td>
                                                <td>
                                                    <Link to={`/Customer_page/Detail___orders/${Donhang.ma_don_hang}`}>
                                                        <button className="btn btn-info mr-2">
                                                            Xem chi tiết
                                                        </button>
                                                    </Link>
                                                </td>

                                            </tr>

                                        ))
                                    }

                                </tbody>
                            </table>

                        </div>
                        <div>
                            <h2 style={{ textAlign: 'center', color: 'red' }}>Tổng số đơn hàng: {num}</h2>
                        </div>

                    </>
                    : <Loading />
                }

            </>
        </div >
    );
};

export default Total__orders;