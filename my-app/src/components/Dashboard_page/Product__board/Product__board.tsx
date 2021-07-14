import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Filter, FilterSettingsModel, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids'
import React, { useEffect, useState } from 'react';

import './Product__board.css';
const Product__board: React.FC = () => {
    const [getData, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    let [i, setI] = useState(0);
    useEffect(() => {
        async function fetchData() {
            const requestUrl = 'http://localhost:3001/api/san-pham'
            const respone = await fetch(requestUrl);
            const responseJson = await respone.json();
            const { data } = responseJson;
            setData(data);

            setLoading(true)
        }
        fetchData();
    }, [])

    useEffect(() => {
        var sum = getData.map(
            (item, index) => setI(index + 1)
        )
    })
    const FilterOptions: FilterSettingsModel = {
        type: 'Menu'
    };
    return (
        <div style={{ margin: '1%' }}>
            <GridComponent dataSource={getData} filterSettings={FilterOptions} allowFiltering={true}
                height={500} allowPaging={true}>
                <ColumnsDirective >
                    <ColumnDirective headerText="Mã sản phẩm" field='ma_san_pham' width='100' textAlign="Center" />
                    <ColumnDirective headerText="Tên sản phẩm" field='ten_san_pham' width='100' />
                    <ColumnDirective headerText="Cấu hình" field='cau_hinh' width='100' textAlign="Center" />
                    <ColumnDirective headerText="Xuất xứ" field='xuat_xu' width='100' textAlign="Center" />
                    <ColumnDirective headerText="Tình trạng sản phẩm" field='tinh_trang_san_pham' format="C2" width='100' />
                </ColumnsDirective>
                <Inject services={[Filter, Page]} />
            </GridComponent>
            <h2 style={{ textAlign: 'right', color: 'red' }}>Tổng sản phẩm: {i}</h2>
        </div>
    )
};

export default Product__board;