import React from 'react'
import "./Navbar.css"
import { SearchOutlined } from "@ant-design/icons"

const Navbar = () => {
    return (
        <div>
            <div className='card12'>
                <input className="searching" type="search" placeholder="SUBSCRIBE" />
                <div className='search'><SearchOutlined /></div>
            </div>
            <div className='btn'>
                <button> Add New</button>
            </div>
            <div className='btn2'>
                <button> Sign In</button>
            </div>
            <div className='btn3'>
                <button> Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar
