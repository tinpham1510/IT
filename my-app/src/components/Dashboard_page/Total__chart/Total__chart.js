import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Line, Bar, Pie, Doughnut, Radar, PolarArea } from 'react-chartjs-2';
import ReactApexChart from 'react-apexcharts';
const Total__chart = () => {
  const [loaiHang, setLoaiHang] = useState(0);
  const [TongDoanhThu, setTongDoanhThu] = useState(0);
  const [TongDonHang, setTongDonHang] = useState(0);
  const [TongSanPham, setTongSanPham] = useState(0);
  const[Laptopp, setLaptop] = useState(0);
  const [Phone, setPhone] = useState(0);
  const [Others, setOther]= useState(0);
  const [account, setAccount] = useState(0);
  const [report , setReport] = useState([]);
  useEffect(()=>{
    async function getData(){
      axios.get(`http://localhost:3001/api/bao-cao/bao-cao-doanh-thu?tu_ngay=2021-07-01&den_ngay=2021-07-31`, { withCredentials: true })
                .then(resp => {
                    console.log(resp.data.data)
                    setReport(resp.data.data)
                    const sum = resp.data.data.map(
                        item => item.doanh_thu).reduce((a, b) => a + b
                        );
                    setTongDoanhThu(sum);
                });
                axios.get('http://localhost:3001/api/don-hang/quan-ly', { withCredentials: true })
                .then(resp => {
                    var sum = resp.data.data.map(
                        (item, index) => setTongDonHang(index + 1)
                    )
                });
                axios.get('http://localhost:3001/api/san-pham', { withCredentials: true })
                .then(resp => {
                    resp.data.data.map(
                        (item, index) => setTongSanPham(index + 1)
                    )
                });
                axios.get('http://localhost:3001/api/san-pham?ma_loai_san_pham=6XQH7tKAXICRMeXkJzYy', {withCredentials: true}
                ).then(resp=>{
                  resp.data.data.map(
                    (item,index) => setLaptop(index +1)
                  )
                })
                axios.get('http://localhost:3001/api/san-pham?ma_loai_san_pham=zgFsfEG1Dd5KP2S7ZD8h', {withCredentials: true}
                ).then(resp=>{
                  resp.data.data.map(
                    (item,index) => setPhone(index +1)
                  )
                })
                axios.get('http://localhost:3001/api/san-pham?ma_loai_san_pham=LUvHhrXge1xlJDtTmsBd', {withCredentials: true}
                ).then(resp=>{
                  resp.data.data.map(
                    (item,index) => setOther(index +1)
                  )
                })
                axios.get('http://localhost:3001/api/nguoi-dung/quan-ly', {withCredentials: true}
                ).then(resp=>{
                  resp.data.data.map(
                    (item,index) => setAccount(index +1)
                  )
                })


            

    }
    getData()
  },[])
    const series1= [76, 67, 61, 90]
    const options1 = {
      chart: {
        height: 390,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: '30%',
            background: 'transparent',
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            }
          }
        }
      },
      colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
      labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
      legend: {
        show: true,
        floating: true,
        fontSize: '16px',
        position: 'left',
        offsetX: 160,
        offsetY: 15,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0
        },
        formatter: function(seriesName, opts) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
        },
        itemMargin: {
          vertical: 3
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
              show: false
          }
        }
      }]
    }
    const series = [Laptopp,Phone,3,3,Others]
    const options = {
              chart: {
                width: 380,
                type: 'donut',
              },
              labels: ['Laptop', 'Điện thoại', 'Chuột', 'Tai nghe', 'Khác'],
              responsive: [{
                breakpoint: 500,
                options: {
                  chart: {
                    width: 400,
                    height: 400,
                  },
                  legend: {
                    position: 'top'
                  }
                }
              }]
            }
          
    return (
        <div>
            <br />
            <h2 style={{ textAlign: 'left', color: '#3bb3bb', marginLeft: '10%' }}>Số liệu</h2>
            <div   >
            <ReactApexChart options={options} series={series} type="donut" width={380} />
           

    
            </div>
            <br/>
            <h2 style={{ textAlign: 'left', color: '#3bb3bb', marginLeft: '10%' }}>Biểu đồ doanh thu hàng tháng</h2>
            <Line
                data={{
                    labels: ['Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7'],
                    datasets: [{
                        label: 'Tổng doanh thu',
                        data: [0, 0, 11, TongDoanhThu],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                    },
                    ],
                }
                }
                height={200}
                width={600}
                options={{
                    animations: {
                        tension: {
                            duration: 1000,
                            easing: 'linear',
                            from: 1,
                            to: 0,
                            loop: true
                        }
                    },

                    scales: {


                        y: {
                            type: 'linear',
                        }
                    }
                }}


            />
            <br />
            <h2 style={{ textAlign: 'left', color: '#3bb3bb', marginLeft: '10%' }}>Biểu đồ tổng hợp</h2>
            <Bar
                data={{
                    labels: ['Tổng sản phẩm', 'Tổng đơn hàng', 'Tổng số tài khoản khách hàng'],
                    datasets: [{
                        label: 'Tổng',
                        data: [TongSanPham, TongDonHang, account],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                    },
                    ],
                }
                }
                height={200}
                width={600}
                options={{
                    animations: {
                        tension: {
                            duration: 1000,
                            easing: 'easeInQuad',
                            from: 1,
                            to: 0,
                            loop: true
                        }
                    },

                    scales: {


                        y: {
                            type: 'linear',
                            min: 0,
                            max: 20
                        }
                    }
                }}

            />
            <br />
            
            

    
        </div>
    );
};

export default Total__chart;