import React, { useEffect, useState } from "react";
//import PropTypes from "prop-types";
import "./Customer__info.css";
import { useHistory, useParams } from 'react-router-dom';
import axios from "axios";
import Loading from "../../Loading_page/Loading";
Customer__info.propTypes = {};
function Customer__info(props) {
  var history = useHistory();
  const [account, setAccount] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      axios.get('http://localhost:3001/api/nguoi-dung/thong-tin', { withCredentials: true }).then((res) => {
        console.log(res.data)
        setAccount(res.data.data);
        setLoading(true);

      })
    }
    fetchData();
  }, []);
  function update() {
    history.push('../Customer_page/Customer__edit');
  }
  return (
    <>
      {loading ?
        <div className="customer__info">
          {account && (
            <div>
              <h2>Thông tin tài khoản</h2>
              <form action="">
                <div>
                  <label htmlFor="name">Họ và tên: </label>
                  <input type="text" name="name" readOnly=" true" id="name" value={account.ten_nguoi_dung} />
                </div>
                <div>
                  <label htmlFor="name">Tài khoản </label>
                  <input type="text" name="username" readOnly=" true" id="name" value={account.ten_tai_khoan} />
                </div>
                <div>
                  <label htmlFor="phone">Số điện thoại:</label>
                  <input type="text" name="phone" readOnly=" true" id="phone" value={account.so_dien_thoai} />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input type="email" name="email" readOnly=" true" id="email" value={account.email} />
                </div>
                <div>
                  <label htmlFor="phone">Loại người dùng</label>
                  <input type="text" name="phone" readOnly=" true" id="phone" value={account.loai_nguoi_dung} />
                </div>
                <div>
                  <label htmlFor="address">Địa chỉ:</label>
                  <input type="text" name="address" readOnly=" true" id="address" value={account.dia_chi} />
                </div>
                <div>

                </div>
                <button action="submit" onClick={update}>Sửa thông tin</button>
              </form>
            </div>
          )}
        </div>
        : <Loading />
      }
    </>
  );
}

export default Customer__info;
