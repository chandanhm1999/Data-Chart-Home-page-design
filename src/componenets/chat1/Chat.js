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
            <div className='btn_chat'>
                <button> Days</button>
            </div>
            <div className='btn_chat1'>
                <button> Week</button>
            </div>
            <div className='btn_chat2'>
                <button> Month</button>
            </div>
            <div className='btn_chat3'>
                <button> Custom</button>
            </div>
            <div className='btn_last'>
                <button> Recorded</button>
            </div>
            <div className='btn_last1'>
                <button> Cleared</button>
            </div>
            <div className='axis'>x-axis : Weeks</div>
            <div className='axisy'>Y-axis : Incidents</div>
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
