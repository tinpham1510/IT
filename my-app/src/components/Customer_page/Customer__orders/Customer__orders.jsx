import React, { useEffect, useState } from 'react';
import './Customer__orders.css'
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';
import Detail___orders from '../../Detail___orders/Detail___orders';
import Loading from '../../Loading_page/Loading';
//import Detail___orders from '../../Detail___orders/Detail___orders';

function Customer__orders(props) {

    //   useEffect(()=>{

    //     axios.get("http://localhost:9001/api/don-hang", {withCredentials:true} )
    //     .then(resp=>{
    //         console.log(resp.data.data)
    //         setData(resp.data.data[0])


    //     })

    //   },[]);
    const [loading, setLoading] = useState(false);
    const [getData, setData] = useState([]);
    const [dataSP, setDataSP] = useState([]);
    async function Data() {
        axios.get('http://localhost:3001/api/don-hang', { withCredentials: true })
            .then(resp => {
                setData(resp.data.data)
                setDataSP(resp.data.data.sanPham)
                localStorage.setItem('ID_don_hang', resp.data.data)
                setLoading(true);
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
                        <div className="Customer__orders"  >
                            <h2>Đơn hàng</h2>

                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Mã đơn hàng</th>
                                        <th>Tên khách hàng</th>
                                        <th>Trạng thái</th>
                                        <th>Chi tiết</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getData && getData.map(Donhang => (
                                            <tr>
                                                <td>{Donhang.ma_don_hang}</td>
                                                <td>{Donhang.ten_nguoi_nhan}</td>
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

                    </>
                    : <Loading />
                }

            </>
            <>

                <Switch>
                    <Route
                        path="/Customer_page/Detail___orders/:id"
                        component={Detail___orders}
                    ></Route>
                </Switch>
            </>
        </div>
    );


}

export default Customer__orders;