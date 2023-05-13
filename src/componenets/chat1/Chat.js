import React, { useState } from 'react'
import Chart from "react-apexcharts";
import "./Chart1.css"

const Chat = () => {
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
        <div className='card_1'>
            <h1 className='part_1'>Total Incidents Recorded</h1>
            <div className='row'>
                <div className='col-4'>
                    <Chart
                        options={state.options}
                        series={state.series}
                        type="bar"
                        width="910"
                        height="350"
                    />
                </div>
            </div>
        </div>
    )
}

export default Chat
