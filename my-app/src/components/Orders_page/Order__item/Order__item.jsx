import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Order__item.css";
import axios from "axios";
// Order__item.propTypes = {
//   order: PropTypes.object,
//   onChosen: PropTypes.func,
//   onRemove: PropTypes.func,
// };
// Order__item.propTypes = {
//   order: null,
//   onChosen: null,
//   onRemove: null,
// };

function Order__item(props) {
  // const [check, setCheck] = useState(false);
  const { order, onAdd, onRemove, onDelete } = props;
  const [order1, setOrder1] = useState(order);
  // function handleCheck(e) {
  //   const a = order.id;
  //   onChosen(a, e.target.checked, order);
  // }
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])
  function check(e) {
    const a = order1.ma_san_pham;
    console.log(a);
    if (e.target.checked) {
      onAdd(a, order1);
    } else {
      onRemove(a, order1);
    }
  }

  const handleCountMinus = (e) => {
    // if(order1.count)
    setOrder1({ ...order1, so_luong: order1.so_luong - 1 });
    axios
      .put(
        "http://localhost:3001/api/gio-hang",
        {
          ma_san_pham: order1.ma_san_pham,
          so_luong: order1.so_luong - 1,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  async function handleCountPlus(e) {
    setOrder1({ ...order1, so_luong: order1.so_luong + 1 });
    axios
      .put(
        "http://localhost:3001/api/gio-hang",
        {
          ma_san_pham: order1.ma_san_pham,
          so_luong: order1.so_luong + 1,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const handleDelete = () => {
    // console.log(order1.ma_san_pham)
    onDelete(order1.ma_san_pham);
  };
  return (
    <li className="list__item-product">
      <div className="product__delete">
        <button onClick={handleDelete}>X</button>
      </div>
      <div className="list__item-wrap">
        <div className="product__info">
          <input
            className="product__check"
            type="checkbox"
            onChange={check}
          ></input>
          {/* <div className="product__image">
            <img className="img" src={order1.file && order1.file[0]}></img>
          </div> */}
          <div>{order1.ten_san_pham}</div>
        </div>
        <span className="product__price">{order1.gia_tien}$</span>
        <div className="product__num-wrap">
          <button
            className="add__button"
            onClick={handleCountMinus}
            disabled={order1.so_luong <= 1}
          >
            -
          </button>
          <span className="product__num">{order1.so_luong}</span>
          <button className="sub__button" onClick={handleCountPlus}>
            +
          </button>
        </div>
        <span className="product__total">
          {order1.gia_tien * order1.so_luong}$
        </span>
      </div>
    </li>
  );
}

export default Order__item;
