import React from 'react'
import "./Header.css"
import { HomeFilled, UserOutlined, UsergroupAddOutlined, ApartmentOutlined, BookOutlined,SettingOutlined , SnippetsOutlined, FileSearchOutlined, BranchesOutlined,  LogoutOutlined  } from "@ant-design/icons"

const Header = () => {
  return (
    <div className='card'>
      <div className='logo_1'> Vajra</div>
      <div className='home'><HomeFilled /></div>
      <div className='user'><UserOutlined /></div>
      <div className='user2'><UsergroupAddOutlined /></div>
      <div className='user3'><ApartmentOutlined /></div>
      <div className='user4'><BookOutlined /></div>
      <div className='user5'><SettingOutlined /></div>
      <div className='user6'><SnippetsOutlined /></div>
      <div className='user7'><FileSearchOutlined /></div>
      <div className='user8'><BranchesOutlined /></div>
      <div className='user9'><LogoutOutlined /></div>
    </div>
  )
}

export default Header
