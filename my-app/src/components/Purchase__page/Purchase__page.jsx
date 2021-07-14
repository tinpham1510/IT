import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './Purchase__page.css';
import { Form } from 'react-bootstrap'
import Authorization_Header from '../Authorization/Authorization_Header';
import axios from 'axios';
function Purchase(props) {
    let history = useHistory();
    const InputDH = e => {
        e.preventDefault();
        history.push('/Customer_page/Customer__orders');
        setSuccess(false)
    }
    const [User, setUser] = useState([]);
    const [Success, setSuccess] = useState(false);
    return (
        <div>

            <Authorization_Header />
            <div className="container2">
                <div className="font">
                    <div className="container">
                        <div className="title">
                            <br />
                            <div className="fas fa-check-circle">    Thanh Toán thành công!
                            </div>
                            <br />
                            <br />
                            <button className="btnDathang" onClick={InputDH}>Xem chi tiết đơn hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Purchase;