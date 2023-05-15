import React, { useState } from 'react'
import Chart from "react-apexcharts";
import "./Expences.css"
import img1 from '../../assets/img/set.png'

const Chat = () => {
    const [state, setState] = useState({
        options: {},
        series: [100, 55, 30, 20,],
        labels: ['A', 'B', 'C', 'D'],
        series1: [200, 20, 40, 10, 55, 30, 20,]
    })
    return (
        <div>
            <div className='card_2'>
                <h1 className='part_2'>Expences</h1>
                <div className='donut'>
                    <div className='col-3'>
                        <Chart options={state.options} series={state.series} type="donut" width="350" />
                    </div>
                </div>
            </div>
            <div className='card_23'>
                <h1 className='part_in'>In Service</h1>
                <img className='img12' alt='' src={img1} />
                <h4 className='total_1'>Total services 38</h4>
                <h4 className='total_12'>Open services 18</h4>
            </div>
            <div className='card_234'>
                <h1 className='part_in4'>Total Assets</h1>
                <div className='chatbar'>
                    <Chart options={state.options} series={state.series1} type="donut" width="290" />
                </div>
            </div>
            <div className='card_lastpart'>
                <h1 className='part_in42'>Incident Management</h1>
                <div className='lastpart12_1'>Cleared</div>
                <div className='empty'>
                    <button></button>
                </div>
                <div className='des'>36</div>
                <div className='lastpart12_122'>Not Cleared</div>
                <div className='empty2'>
                    <button></button>
                </div>
                <div className='des2'>16</div>
            </div>
        </div>
    )
}

export default Chat
