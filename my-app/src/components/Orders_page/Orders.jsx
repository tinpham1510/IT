import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import Footer from "../Footer";
import { useHistory } from "react-router-dom";
import "./Orders.css";
import Order__item from "./Order__item/Order__item";
import Buy__item from "./Buy__item/Buy__item";
import axios from "axios";
import Authorization_Header from "../Authorization/Authorization_Header";
Orders.propTypes = {
  orders: PropTypes.array,
};
Orders.defaultProps = {
  orders: [],
};

function Orders(props) {
  const [orders, setOrders] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [user, setUser] = useState(null);
  const history = useHistory();
  const [checkOders, setCheckOders] = useState(false);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    async function Data() {
      await axios
        .get("http://localhost:3001/api/gio-hang")
        .then((res) => {
          setOrders(res.data.data);
          console.log(res.data.data);
        })
        .catch((err) => console.log(err));
    }
    Data();
  }, []);

  function onAdd(id, product) {
    setCartItem([...cartItem, { ...product }]);
    setCheckOders(true)
  }
  function onRemove(id, product) {
    console.log(id);
    const cartItem1 = [...cartItem];
    const exist = cartItem.find((x) => x.ma_san_pham === id);
    if (exist) {
      setCartItem(cartItem.filter((x) => x.ma_san_pham !== id));
    }
    setCheckOders(false);
  }
  function onDelete(id) {
    setOrders(orders.filter((order) => order.ma_san_pham !== id));
    // console.log(
    //   typeof JSON.parse(localStorage.getItem("access_token").toString())
    // );
    console.log(1);
    axios.delete("http://localhost:3001/api/gio-hang", {
      data: { ma_san_pham: id },
    });
    setCheckOders(false);
  }

  //Lap don hang
  const handlePayment = async () => {
    if (checkOders) {
      if (user) {
        await axios
          .post(
            "http://localhost:3001/api/gio-hang/thanh-toan",
            {
              ten_nguoi_nhan: user.ten_nguoi_dung,
              so_dien_thoai: user.so_dien_thoai,
              dia_chi: user.dia_chi,
              email: user.email,
            },
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log(res);
            history.push("/Purchase__page")

          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
    else {
      alert("Gi??? h??ng ch??a c?? s???n ph???m ????? ti???n h??nh thanh to??n")
    }
  };
  function ContinueSee() {
    history.push("/Product_page");
  }
  return (
    <>
      <Authorization_Header />
      <div className="orders">
        <div className="container">
          <div className="orders__top">
            <div className="orders__top-title">
              <h3 className="title__name">GI??? H??NG</h3>
              <div className="title__wrap">
                <div className="title__wrap-left">
                  {
                    checkOders ?
                      <i id="ID" className="fas fa-check"> S???n ph???m ???? ???????c th??m v??o gi??? h??ng
                      </i>
                      :
                      <i className="fas fa-ban"> Ch??a c?? s???n ph???m n??o ???????c th??m</i>
                  }
                </div>
                <div className="title__wrap-right">
                  <button className="" onClick={ContinueSee}>Ti???p t???c xem s???n ph???m</button>
                </div>
              </div>
            </div>
            <div className="orders__top-list">
              <div className="list__headbar">
                <span>S???n ph???m</span>
                <span>gi??</span>
                <span>s??? l?????ng</span>
                <span>Th??nh ti???n</span>
              </div>
              <div className="">
                <ul className="list__item">
                  {orders &&
                    orders.map((order) => (
                      <Order__item
                        key={order.ma_san_pham}
                        order={order}
                        onAdd={onAdd}
                        onRemove={onRemove}
                        onDelete={onDelete}
                      ></Order__item>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="orders__bottom">
            <div className="orders__bottom-title">
              <h2>T???NG GI??? H??NG</h2>
            </div>
            <div className="orders__bottom-list">
              <div className="list__top">
                <span>S???n ph???m</span>
                <span>S??? l?????ng</span>
                <span>T???ng</span>
              </div>
              <div className="list">
                <Buy__item cartItem={cartItem}></Buy__item>
              </div>
              <div className="list__total">
                <h2 className="list__total-left">T???ng c???ng</h2>
                <div className="list__total-right">
                  <h2>
                    {cartItem.reduce((acc, currentValue) => {
                      return acc + currentValue.gia_tien * currentValue.so_luong;
                    }, 0)}
                  </h2>
                  <span>???? bao g???m thu??? VAT</span>
                </div>
              </div>
              <div className="paybutton" onClick={handlePayment}>
                Ti???n h??nh thanh to??n
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orders;
