import React, { useState } from 'react'
import Chart from "react-apexcharts";
import "./Expences.css"
import img1 from '../../assets/img/set.png'
import tot from '../../assets/img/tot.png'

const Chat = () => {
    const [state, setState] = useState({
        options: {},
        series: [100, 55, 30, 20,],
        labels: ['A', 'B', 'C', 'D']
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
                <img className='img12' alt='' src={img1}/>
            </div>
            <div className='card_234'>
                <h1 className='part_in4'>Total Assets</h1>
                <img className='img124' alt='' src={tot}/>
            </div>
        </div>
    )
}

export default Chat
