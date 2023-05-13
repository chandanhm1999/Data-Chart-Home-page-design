import React, { useState } from 'react'
import Chart from "react-apexcharts";
import "./Department.css"
import dep from "../../assets/img/dep.png"

const Department = () => {
    const [state, setState] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"]
            }
        },
        series: [
            {
                name: "series-1",
                data: [12, 28, 6, 18, 23]
            }
        ]
    })
    return (
        <div>
            <div className='dep_card'>
                <div className='card_2341'>
                    <h1 className='part_in41'>Total Assets</h1>
                    <img className='img1241' alt='' src={dep}/>
                </div>
            </div>
            <div className='card_10'>
                <h1 className='part_10'>Total Downtime</h1>
                <div className='row'>
                    <div className='col-40'>
                        <Chart
                            options={state.options}
                            series={state.series}
                            type="line"
                            width="660"
                            height="350"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Department
