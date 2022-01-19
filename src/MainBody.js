import React from "react";
import "./MainBody.css";

import { DownOutlined , UpOutlined } from '@ant-design/icons';




const MainBody = () => {
  
  return (
    <div id="mainBody">
      <div id="mainBodyTopDiv">
        <div id="cricketTopDiv">
          <p>Cricket</p>
          <div id="cricketSubColmn">
            <div id="allColmn">
              <p> ALL</p>
            </div>
            <div id="inPlay">
              <p>In-Play</p>
            </div>
            <div id="inPlay">
              <p>TODAY</p>
            </div>
            <div id="inPlayTo">
              <p id="tomorrow">TOMORROW</p>
            </div>
            <div id="inPlay">
              <p>FUTURE</p>
            </div>
          </div>
          
          <div className="dropdown">
         view by:  competition
          <DownOutlined className="dropbtn"/>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
<div id="mainPageFilter">
<p id="mainPageFilterView">view by: </p>
<button id="onTvBtn">On Tv</button>
<button id="liveVideoBtn">Live Video</button>
<div className="dropdownAmount">
Match Amount

          <DownOutlined className="dropbtn"/>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>

</div>

        </div>
      
      </div>
      <div id="cricketSecondDiv">
        <UpOutlined id="upArrow" />
        <p>Test Matches</p>
        <div className="dropdownSecond">
        Matches
          <DownOutlined className="dropbtn2"/>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
      </div>
    </div>
  );
};

export default MainBody;
