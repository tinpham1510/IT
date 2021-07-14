import React, { useEffect, useState } from "react";
//import PropTypes from "prop-types";
import './Customer__edit.css';
import { useHistory } from 'react-router-dom';
import axios from "axios";

Customer__edit.propTypes = {};
function Customer__edit(props) {
    //const { id } = useParams();
    var history = useHistory();
    const [account, setAccount] = useState([]);
    useEffect(() => {
        async function fetchData() {
            axios.get('http://localhost:3001/api/nguoi-dung/thong-tin', { withCredentials: true }).then((res) => {
                console.log(res.data)
                setAccount(res.data.data);

            })
        }
        fetchData();
    }, []);
    const update = e => {
        e.preventDefault();
        var request = {
            ten_nguoi_dung: document.getElementById('Name').value,
            dia_chi: document.getElementById('address').value,
            so_dien_thoai: document.getElementById('phone').value
        }

        axios.put('http://localhost:3001/api/nguoi-dung', request, { withCredentials: true })
            .then(resp => {
                if (resp.data.success) {
                    alert("Update Success!!!")
                    history.goBack();
                }
                else {
                    alert("Update Failed!!!")
                }
            })
    }
    return (
        <>
            <div className="customer__edit">
                {account && (
                    <div>
                        <h2>Sửa Thông tin tài khoản</h2>
                        <form action="">
                            <div>
                                <label htmlFor="name">Tài khoản </label>
                                <input type="text" name="username" id="name" value={account.ten_tai_khoan} />
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="email" id="email" value={account.email} />
                            </div>
                            <div>
                                <label htmlFor="name">Họ và tên: </label>
                                <input type="text" name="name" id="Name" onChange="none" />
                            </div>
                            <div>
                                <label htmlFor="phone">Số điện thoại:</label>
                                <input type="text" name="phone" id="phone" onChange="none" />
                            </div>
                            <div>
                                <label htmlFor="address">Địa chỉ:</label>
                                <input type="text" name="address" id="address" onChange="none" />
                            </div>
                            <div>

                            </div>
                            <button action="submit" onClick={update}>Cập nhật</button>
                        </form>
                    </div>
                )}
            </div>
        </>
    );
}

export default Customer__edit;
