import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Chart from "react-apexcharts";

function Statistics() {
    const [Roles, setRoles] = useState([])
    const [Globale, setGlobale] = useState([]);
    const [ConfirmElements, setConfirmElements] = useState({});
    const [chartData, setChartData] = useState({});
    const [PieChart, setPieChart] = useState({});

    useEffect(() => {
        // console.log(data);
        // for (let i = 0; i < data.length; i++) {
        //     // console.log(data[i].objectives);
        //     for (let j = 0; j < data[i].objectives.length; j++) {
        //     //   console.log(data[i].objectives[j]);
        //       for (let k = 0; k < data[i].objectives[j].roles.length; k++) {
        //         console.log(data[i].objectives[j].roles[k]);
        //       }
        //     }
        // }
        get_roles()
    }, [])
    
    const get_roles = async () => {
        try {
            let confirm_array = []
            const res = await axios.get("/api/role");
            for (let i = 0; i < res.data.data.length; i++) {
                confirm_array.push(res.data.data[i].maitrise);
            }
            setRoles(res.data.data)

            let elementCounts = {
                Maitrsé: 0,
                Défini: 0,
                Reproductible: 0,
                Aucun: 0,
                Initial: 0,
                Optimisé: 0
            };
            
            confirm_array.forEach((e) => {
                elementCounts[e] = (elementCounts[e] || 0) + 1;
            });
            Reflect.deleteProperty(elementCounts, '');
            setConfirmElements(elementCounts);

            setChartData({
                options: {
                    xaxis: {
                        categories: Object.keys(elementCounts)
                    }
                },
                series: [
                    {
                        data: Object.values(elementCounts).map(e => (e/res?.data?.data?.length * 100).toFixed(2))
                    }
                ]
            });

            setPieChart({
                options: {
                    labels: Object.keys(elementCounts)
                },
                series: Object.values(elementCounts)
            })

        } catch (err) {
            console.log(err.message);
        }
    }

    if(Object.keys(chartData).length === 0) return <h1>Loading...</h1>

    return (
        <div className='statistics_container'>
            <h1>statistics</h1>
            
            <div className='charts'>
                <Chart
                options={chartData?.options}
                series={chartData?.series}
                type="bar"
                width="500"
                />

                <Chart
                    type='pie'
                    series={PieChart.series}
                    options={PieChart.options}
                    width={400}
                />
            </div>


        </div>
    )
}

export default Statistics