import React from 'react'
import "./Chart2.css"
import { FileTextOutlined } from "@ant-design/icons"
import war from "../../assets/img/war.png"

const Chat2 = () => {
    return (
        <div>
            <div className='dep_cardc'>
                <div className='card_2341c'>
                    <h1 className='part_in41c'>Calibrated</h1>

                    <div className='sepci_1c'>Calibrated</div>
                    <div className='output_tagc'>
                        <input type="range" value="100"></input>
                    </div>
                    <div className='num_1c'>36</div>

                    <div className='sepci_19c'>Radiology</div>
                    <div className='output_tag9c'>
                        <input type="range" value="100"></input>
                    </div>
                    <div className='num_19c'>16</div>

                    <div className='sepci_18c'>ICU</div>
                    <div className='output_tag8c'>
                        <input type="range" value="100"></input>
                    </div>
                    <div className='num_18c'>16</div>

                </div>
                <div className='new_card'>
                    <h1 className='manual'>Manual</h1>
                    <div className='file'>
                        <FileTextOutlined />
                    </div>
                    <div className='btn_m'>
                        <button>User Manual</button>
                    </div>
                    <div className='btn_m1'>
                        <button> Sign Up</button>
                    </div>
                </div>
                <div className='new_card2'>
                    <h1 className='manual'>Warranty</h1>
                    <img className='war' alt='' src={war} />
                </div>
            </div>
        </div>
    )
}

export default Chat2
