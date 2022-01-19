import React from 'react';
import "./Header.css";
import { Input } from 'antd';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';



const menu = (
    <Menu className='menuDropDown'>
      
    </Menu>
  );
  
 
const Header = () => {
    
      

    
    return (
      <div>
        
        <div id="headerMainDiv">
       
        <div className='headerTopDiv'>

        <div id="headerTopSection">
<h1 id="logo">Betverse</h1>
<h1 className='topNavItem1'>My Bets</h1>

<Input placeholder='Find Teams, competitions' id="headerInput"></Input>
<div id="userAccoutDropDowm">
<Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      My Account <DownOutlined />
    </a>
  </Dropdown>
  </div>
  
  <button id="depositBtn">Deposit</button>        
  
       
</div>
 
        </div>

        <div id="headerSecoundDiv">
<div id="SecoundDivItem">
<p className="exchanges">Exchanges</p>
<p className="sportsBook">SportsBook</p>
<p className="sportsBook">Slots</p>



</div>
        </div>
           
        </div>
        <div id="headerThirdDiv">
        <div id="SecoundDivItem2">
<p className="exchanges2">Cricket</p>
<p className="sportsBook2">Random</p>
<p className="sportsBook2">Random</p>

<div id="settingDropdown">
<Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
     Settings <DownOutlined />
    </a>
  </Dropdown>
</div>

</div>
        </div>
           
        </div>
    )
}

export default Header
