import React, { useEffect, useState } from 'react';
//import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import Calender from 'react-calendar';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));
function Report__board() {
    const classes = useStyles();
    const [Datefrom, setDateFrom] = useState(new Date());
    const [Dateto, setDateTo] = useState(new Date());
    const [report, setReport] = useState([]);
    const [doanhthu, setdoanhthu] = useState();
    const [total, setTotal] = useState(0);
    function Data() {
        axios.get(`http://localhost:3001/api/bao-cao/bao-cao-doanh-thu?tu_ngay=${Datefrom}&den_ngay=${Dateto}`, { withCredentials: true })
            .then(resp => {
                console.log(resp.data.data)
                setReport(resp.data.data)
                const sum = resp.data.data.map(
                    item => item.doanh_thu).reduce((a, b) => a + b
                    );
                setTotal(sum);
            })
    }


    useEffect(() => {
        async function Data() {
            axios.get(`http://localhost:3001/api/bao-cao/bao-cao-doanh-thu?tu_ngay=2021-07-01&den_ngay=2021-07-31`, { withCredentials: true })
                .then(resp => {
                    console.log(resp.data.data)
                    setReport(resp.data.data)
                    const sum = resp.data.data.map(
                        item => item.doanh_thu).reduce((a, b) => a + b
                        );
                    setTotal(sum);
                })

        }
        Data();
    }, [])

    return (
        <div className="container"><br />
            <form className={classes.container} noValidate>
                <TextField
                    id="date-from"
                    onChange={(e) => setDateFrom(e.target.value)}
                    label="From"
                    type="date"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
            <br />
            <form className={classes.container} noValidate>
                <TextField
                    id="date-to"
                    onChange={(e) => setDateTo(e.target.value)}
                    label="To"
                    type="date"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
            <br />
            <div style={{ textAlign: 'left' }} className="button"><button className="btn btn-info mr-2" onClick={Data} >Tìm kiếm <i className="fas fa-search" /></button></div>

            <div className="Total__orders"  >
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Tên sản phẩm</th>
                            <th>Loại sản phẩm</th>
                            <th>Giá bán hiện tại</th>
                            <th>Số lượng đã bán</th>
                            <th>Doanh số</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            report && report.map((getReport, index) => (
                                <tr>
                                    <td id="index">{index}</td>
                                    <td>{getReport.ten_san_pham}</td>
                                    <td>{getReport.loai_san_pham}</td>
                                    <td>{getReport.gia_ban_hien_tai}$</td>
                                    <td>{getReport.so_luong_da_ban}</td>
                                    <td onChange={(e) => setdoanhthu(e.target.value)}>{getReport.doanh_thu}$</td>
                                </tr>

                            ))
                        }

                    </tbody>
                </table>

            </div>

            <h2 style={{ textAlign: 'right', color: 'red' }}>Tổng Doanh thu: {total}$</h2>

        </div>

    );
};

export default Report__board;