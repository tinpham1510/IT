import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Add__page.css'
function Add__page(props) {
    const history = useHistory();
    const [MaLoaiSP, setMa] = useState("");
    const [check, setCheck] = useState(false);
    const [image, setImage] = useState(null);
    const CheckProduct = e => {
        if (document.getElementById("TenSP").value === "") {
            alert("Tên sản phẩm không được bỏ trống")
            document.getElementById("TenSP").focus();
        }
        else if (document.getElementById("Gia").value === "") {
            alert("Giá không được bỏ trống")
            document.getElementById("Gia").focus();
        }
        else if (document.getElementById("SoLuong").value === "") {
            alert("Số lượng không được bỏ trống")
            document.getElementById("SoLuong").focus();
        }
        else if (document.getElementById("TenTH").value === "") {
            alert("Tên thương hiệu không được bỏ trống")
            document.getElementById("TenTH").focus();
        }
        else if (document.getElementById("TinhTrang").value === "") {
            alert("Tình trạng không được bỏ trống")
            document.getElementById("TinhTrang").focus();
        }
        else if (document.getElementById("ThoiGianSuDung").value === "") {
            alert("Thời gian đã sử dụng không được bỏ trống")
            document.getElementById("ThoiGianSuDung").focus();
        }
        else {
            setCheck(true);
        }

    }
    function CheckMaLoaiSP() {
        if (document.getElementById("MaLoaiSP").value === "Laptop") {
            setMa("6XQH7tKAXICRMeXkJzYy");
            console.log("Lapyop")
        }
        else if (document.getElementById("MaLoaiSP").value === "Phone") {
            setMa("zgFsfEG1Dd5KP2S7ZD8h");
            console.log("Phone")
        }
        else if (document.getElementById("MaLoaiSP").value === "Tai nghe") {
            setMa("R0RHNpwSnk0K3pTF9wtp");
            //console.log("Ipad")
        }
        else {
            setMa("LUvHhrXge1xlJDtTmsBd");
            console.log("Others")
        }
    }
    function goback() {
        history.push("/Product_page")
    }
    const AddProduct = () => {

        CheckMaLoaiSP();

        const gia = parseInt(document.getElementById("Gia").value);
        const soluong = parseInt(document.getElementById("SoLuong").value);
        const tg = parseInt(document.getElementById("ThoiGianSuDung").value);
        const formData = new FormData();
        formData.append("ten_san_pham", document.getElementById("TenSP").value);
        formData.append("ma_loai_san_pham", MaLoaiSP);
        formData.append("gia_tien", gia);
        formData.append("so_luong", soluong);
        formData.append("mo_ta", document.getElementById("MoTa").value);
        formData.append("cau_hinh", document.getElementById("GhiChu").value);
        formData.append("ten_thuong_hieu", document.getElementById("TenTH").value);
        formData.append("xuat_xu", document.getElementById("XuatXu").value);
        formData.append("tinh_trang_san_pham", document.getElementById("TinhTrang").value);
        formData.append("thoi_gian_su_dung", tg);
        formData.append("file", image);

        console.log()
        if (check) {
            axios({
                withCredentials: true,
                method: 'post',
                data: formData,
                url: 'http://localhost:3001/api/san-pham',
            }).then(resp => {
                console.log(resp.data)
                if (resp.data.success) {
                    alert("Thành công thêm sản phẩm")
                    history.goBack();
                    setCheck(false)
                }
                else {
                    alert("Thêm sản phẩm không thành công")

                }
            })
        }
        else {
            CheckProduct();
        }


    }

    const handleFile = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }

    }
    return (
        <div className="container">
            <div className="container">
                <div className="title">
                    <br />
                    <Form.Group>
                        <Form.Label>Tên sản phẩm</Form.Label>
                        <Form.Control size="lg" type="text" id="TenSP" />
                        <br />
                        <Form.Group id="exampleForm.ControlSelect1">
                            <Form.Label>Mã loại sản phẩm</Form.Label>
                            <Form.Control as="select" id="MaLoaiSP">
                                <option id="laptop">Laptop</option>
                                <option id="phone">Phone</option>
                                <option id="Earbuds">Tai nghe</option>
                                <option id="others">Others</option>
                            </Form.Control>
                        </Form.Group>
                        <br />
                        <Form.Label>Giá</Form.Label>
                        <Form.Control size="sm" type="text" id="Gia" />
                        <br />
                        <Form.Label>Số lượng</Form.Label>
                        <Form.Control size="sm" type="text" id="SoLuong" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Mô tả</Form.Label>
                        <Form.Control size="lg" as="textarea" rows={3} id="MoTa" />
                        <br />
                        <Form.Label>Ghi chú</Form.Label>
                        <Form.Control as="textarea" rows={3} id="GhiChu" />
                        <br />
                        <Form.Label>Tên thương hiệu</Form.Label>
                        <Form.Control size="sm" type="text" id="TenTH" />
                        <br />
                        <Form.Label>Xuất xứ</Form.Label>
                        <Form.Control size="sm" type="text" id="XuatXu" />
                        <Form.Label>Tình Trạng</Form.Label>
                        <Form.Control size="sm" type="text" id="TinhTrang" />
                        <Form.Label>Thời gian đã sử dụng</Form.Label>
                        <Form.Control size="sm" type="text" id="ThoiGianSuDung" />
                        <br />
                        <input type="file" id="ok" onChange={handleFile} accept="image/*"></input>
                    </Form.Group>
                    <div className="button">
                        <button className="btn btn-info mr-2" onClick={AddProduct}>Thêm</button>
                        <button className="btn btn-info mr-2" onClick={goback}>Hủy</button>

                    </div>


                </div>
            </div>
        </div>
    );
}

export default Add__page;