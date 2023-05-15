import React, { useState } from 'react'
import Chart from "react-apexcharts";
import "./Department.css"

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
                    <div className='bttn_1'>
                        <button></button>
                    </div>
                    <div className='bttn_2'>
                        <button></button>
                    </div>
                    <div className='bttn_22'>
                        <button></button>
                    </div>
                    <div className='bttn_23'>
                        <button></button>
                    </div>
                    <div className='bttn_24'>
                        <button></button>
                    </div>
                    <div className='sepci_1'>Laboratory</div>
                    <div className='output_tag'>
                        <input type="range" value="90"></input>
                    </div>
                    <div className='num_1'>90</div>

                    <div className='sepci_19'>Radiology</div>
                    <div className='output_tag9'>
                        <input type="range" value="53"></input>
                    </div>
                    <div className='num_19'>53</div>

                    <div className='sepci_18'>ICU</div>
                    <div className='output_tag8'>
                        <input type="range" value="98"></input>
                    </div>
                    <div className='num_18'>98</div>

                    <div className='sepci_181'>Operation</div>
                    <div className='output_tag81'>
                        <input type="range" value="75"></input>
                    </div>
                    <div className='num_181'>75</div>

                    <div className='sepci_182'>OPD</div>
                    <div className='output_tag82'>
                        <input type="range" value="36"></input>
                    </div>
                    <div className='num_182'>36</div>

                </div>
            </div>
            <div className='card_10'>
                <h1 className='part_10'>Total Downtime</h1>
                <div className='axisd'>x-axis : Weeks</div>
                <div className='axisyd'>Y-axis : Incidents</div>
                <div className='dn'>Total Downtime</div>
                <div className='dn1'>12Days 3h 20m </div>
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
