import React, { useEffect, useState } from 'react';
import Authorization_Header from '../../components/Authorization/Authorization_Header';
import { Navbar, Nav, Modal } from 'react-bootstrap';
import { Route, Router, Switch, useHistory } from 'react-router-dom';
//import Laptop__page from './Laptop__page/Laptop__page';
//import Phone__page from './Phone__page/Phone__page';
//import Ipad__page from './Ipad__page/Ipad__page';
//import Others__page from './Others__page/Others__page';
//import ALL_products from './All_product/ALL__products';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
//import Add__page from './Add__page/Add__page';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
//import Delete__page from './Delete__page/Delete__page';
//import Update__page from './Update__page/Update__page';
import axios from 'axios';
//import Search__page from './Search__page/Search__page';
import { Link } from 'react-router-dom'
import ALL_product from './All_product/All_product';
import './Product_page.css'
import Add__page from './Add__page/Add__page';
import Delete__page from './Delete__page/Delete__page';
import Update__page from './Update__page/Update__page';
import { render } from '@testing-library/react';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));
function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
function Product__page(props) {
    const history = useHistory();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [admin, setAdmin] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen(!open);
        history.push("/Product_page/Add__page");
    };
    const handleToggle1 = () => {
        setOpen(!open);
        history.push("/Product_page/Delete__page");
    };
    const handleToggle2 = () => {
        setOpen(!open);
        history.push("/Product_page/Update__page");
    };
    const [Data, setData] = useState([]);
    useEffect(() => {
        if (localStorage.getItem('loai-nguoi-dung') === 'QuanLy' ||localStorage.getItem('loai-nguoi-dung') === 'admin') {
            setAdmin(true)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('TenTH', document.getElementById("search").value)
    }, [])
    return (
        <div>
            <Authorization_Header />
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href='/Product_page/All' >ALL</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href='/Product_page/Laptop__page'>Laptop</Nav.Link>
                            <Nav.Link href='/Product_page/Phone__page'>Phone</Nav.Link>
                            <Nav.Link href='/Product_page/Ipad__page'>Ipad</Nav.Link>
                            <Nav.Link href='/Product_page/Others__page'>Others</Nav.Link>
                            <input type="search" class="form-auth-control" id="search" placeholder="Search..."></input>

                            <Link to={`/Product_page/Search__page/${localStorage.getItem('TenTH')}`}>
                                <button className="btn btn-info mr-2" >
                                    <i className="fas fa-search"></i>
                                </button>
                            </Link>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
                {admin ?
                    <div className={classes.root}>
                        <Button variant="contained" size="large" color="primary" onClick={handleToggle} >
                            Thêm sản phẩm
                        </Button>
                        <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                            <CircularProgress color="inherit" />
                        </Backdrop>
                        <Button variant="contained" size="large" color="secondary" onClick={handleToggle1}>
                            Xóa sản phẩm
                        </Button>
                        <Button variant="contained" onClick={handleToggle2} size="large">Cập nhật sản phẩm</Button>
                    </div>
                    : <>
                    </>
                }
            </div>

            <div>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <Switch>
                    <Route
                        path="/Product_page/All"
                        component={ALL_product}
                    ></Route>
                    <Route
                        path="/Product_page/Add__page"
                        component={Add__page}
                    ></Route>
                    <Route
                        path="/Product_page/Delete__page"
                        component={Delete__page}
                    ></Route>
                    <Route
                        path="/Product_page/Update__page"
                        component={Update__page}
                    ></Route>
                    <Route path="/Product_page" component={ALL_product}></Route>
                </Switch>
            </div>
        </div>
    );
}

export default Product__page;

