import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Route, Switch, Router, useHistory } from 'react-router-dom'
import Loading from '../../Loading_page/Loading';


function Account__page(props) {
    const [report, setReport] = useState([]);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [IDnguoidung, setIDnguoidung] = useState();
    const history = useHistory();
    function Data() {
        axios.get(`http://localhost:3001/api/nguoi-dung/quan-ly`, { withCredentials: true })
            .then(resp => {
                console.log(resp.data.data)
                setReport(resp.data.data)
                resp.data.data.map((item, index) => setCount(index + 1))
                setLoading(true)

            })
    }
    useEffect(() => {
        Data()
    }, [])
    function handleClick(ID) {
        console.log(ID)
        let request = {
            ma_nguoi_dung: ID,
        }
        axios({
            method: 'delete',
            url: 'http://localhost:3001/api/nguoi-dung/quan-ly',
            data: request,
            withCredentials: true
        }).then(resp => {
            console.log(resp.data.data)
            alert("Xóa tài khoản thành công!!!!!!")

            history.push("/Dashboard/")
        })

    }
    return (
        <div>
            <br />
            <>
                {loading ?
                    <div className="Total__orders"  >
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Mã khách hàng</th>
                                    <th>Tên tài khoản</th>
                                    <th>Email</th>
                                    <th>Số điện thoại</th>
                                    <th>Loại người dùng</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    report && report.map((getReport, index) => (
                                        <tr>
                                            <td id="index">{index}</td>
                                            <td>{getReport.ma_nguoi_dung}</td>
                                            <td>{getReport.ten_nguoi_dung}</td>
                                            <td>{getReport.email}</td>
                                            <td>{getReport.so_dien_thoai}</td>
                                            <td>{getReport.loai_nguoi_dung}</td>
                                            <td style={{ textAlign: 'center' }}>
                                                <button onClick={(e) => handleClick(getReport.ma_nguoi_dung)} className="btn btn-danger mr-2">
                                                    Xóa
                                                </button>

                                            </td>
                                        </tr>

                                    ))
                                }

                            </tbody>
                        </table>

                    </div>
                    : <Loading></Loading>
                }

                <h2 style={{ textAlign: 'right', color: 'red', marginRight: '1% ' }}> Tổng số tài khoản: {count}</h2>
            </>
        </div>
    );
}


export default Account__page;