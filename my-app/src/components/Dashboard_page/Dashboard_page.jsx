import React from 'react';
import Authorization_Header from '../Authorization/Authorization_Header';
import './Dashboard_page.css'
import { Nav } from 'react-bootstrap';
import { Link, Switch, Route } from 'react-router-dom';
import Product__board from './Product__board/Product__board';
import Total__orders from './Total__orders/Total__orders';
import Report__board from './Report__board/Report__board';
import Total__chart from './Total__chart/Total__chart';
import Account__page from './Account__page/Account__page';
function Dashboard_page(props) {
    return (
        <div>
            <>
                <Authorization_Header />
                <h2 className="Dashboard_title">Bảng báo cáo</h2>
                <Nav >
                    <Nav.Item>
                        <Nav.Link href="/Dashboard/Total__chart">Biểu đồ báo cáo</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/Dashboard/Product__board">Tổng sản phẩm</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/Dashboard/Total__orders" href="/Dashboard/Total__orders" >
                            Tổng đơn hàng
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/Dashboard/" href="/Dashboard/Report__board" >
                            Báo cáo doanh thu
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/Dashboard/" href="/Dashboard/Account__page" >
                            Quản lý tài khoản
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </>
            <>
                <Switch>
                    <Route
                        path="/Dashboard/Total__chart"
                        component={Total__chart}
                    ></Route>
                    <Route
                        path="/Dashboard/Product__board"
                        component={Product__board}
                    ></Route>
                    <Route
                        path="/Dashboard/Total__orders"
                        component={Total__orders}
                    ></Route>
                    <Route
                        path="/Dashboard/Report__board"
                        component={Report__board}
                    ></Route>
                    <Route
                        path="/Dashboard/Account__page"
                        component={Account__page}
                    ></Route>


                    <Route path="/Dashboard" component={Total__chart}></Route>
                </Switch>
            </>
        </div>
    );
}

export default Dashboard_page;