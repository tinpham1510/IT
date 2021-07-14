import React, { useEffect, useState } from 'react';
import '../Login_page/Login_page.css';
import image1 from '../assets/images/Vivo.jpg';
import Authorization_Header from '../components/Authorization/Authorization_Header';
import { BrowserRouter as Router, Route, Switch, Link, Redirect , useHistory } from 'react-router-dom';
import axios from 'axios';

export default function SignUp_page () {
    const history = useHistory();
    const Signup = e =>{
        e.preventDefault();
        let request ={
            ten_tai_khoan: document.getElementById('taikhoan').value,
            mat_khau: document.getElementById('pass').value,
            email: document.getElementById('email').value,
            ten_nguoi_dung: document.getElementById('taikhoan').value,
            dia_chi: "chưa cập nhật",
            so_dien_thoai: '123456789'
        }
        let Login ={
            ten_tai_khoan: document.getElementById('taikhoan').value,
            mat_khau: document.getElementById('pass').value,
        }
        axios.post("http://localhost:3001/api/nguoi-dung", request)
        .then(resp =>{
            console.log(resp.data);
            if(resp.data.success){
                   
                alert("Sign up Success!!!!")
                history.push("/Login_page")
            }
            else{
                alert(resp.data.message)
            }
        })
    }
    return (
        <div>
        <Authorization_Header/>
        <section className="page-container">
            <div className="imgBx">
                <img src={image1}/>
            </div>
            <div className="contentBx">
                <div className="formBx">
                    <h2>ĐĂNG KÍ</h2>
                    <form onSubmit={Signup}>
                        <div className="inputBx">
                            <h6 className="name">Tài khoản</h6>
                            <input type="text" id="taikhoan" name=""></input>
                        </div>
                        <div className="inputBx">
                            <h6 className="name">Email</h6>
                            <input type="email" id="email" name=""></input>
                        </div>
                        <div className="inputBx">
                            <h6 className="name">Mật khẩu</h6>
                            <input type="password" id="pass" name=""></input>
                        </div>
                        <div className="inputBx">
                            <input type="submit" value="Đăng kí" name=""/>
                        </div>

                        <div className="inputBx">
                            <p>Bạn đã có tài khoản? <a href="#">
                                <Link to="../Login_page/"> 
                                Đăng nhập
                                </Link>
                               </a></p>
                        </div>
                    </form>
                    <h3>Login with social media</h3>
                    <ul className="sci">
                        <a href="https://www.facebook.com"><i className="fa fa-facebook"></i></a>
                        <a href="https://www.instagram.com"><i className="fa fa-instagram"></i></a>
                        <a href="https://www.google.com"><i className="fa fa-google"></i></a>
                    </ul>
                </div>
            </div>
        </section>
        </div>
    );
}