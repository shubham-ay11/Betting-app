import React from "react";
import "./MainBody.css";


import { DownOutlined , UpOutlined, FundProjectionScreenOutlined } from '@ant-design/icons';




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
      <table id="customers">
  <tr>
    <th id="upcoming">Upcoming</th>
    <th id="matched">Matched</th>
    <th id="matchTableone">1</th>
    <th>X</th>
    <th>2</th>
  </tr>
  <tr>
    <td id="upcoming">Dec 25, India vs Pakistan</td>
    <td className="matchedData">£1,865</td>
    <td>
<div>
      <div id="matchTableOneData1">
        <p>6</p>
        <p>£90</p>
      </div>
      <div id="matchTableOneData2">
        <p>6</p>
        <p>£90</p>
      </div>
      </div>
    </td>
    <td>
    <div>
      <div id="matchTableOneData1">
        <p>6</p>
        <p>£90</p>
      </div>
      <div id="matchTableOneData2">
        <p>6</p>
        <p>£90</p>
      </div>
      </div>
    </td>
    <td>
    <div>
      <div id="matchTableOneData1">
        <p>6</p>
        <p>£90</p>
      </div>
      <div id="matchTableOneData2">
        <p>6</p>
        <p>£90</p>
      </div>
      </div>
    </td>
  </tr>
  <tr>
    <td id="upcoming">Dec 28</td>
    <td className="matchedData">£1,775</td>
    <td>
<div>
      <div id="matchTableOneData1">
        <p>6</p>
        <p>£90</p>
      </div>
      <div id="matchTableOneData2">
        <p>6</p>
        <p>£90</p>
      </div>
      </div>
    </td>
    <td>
    <div>
      <div id="matchTableOneData1">
        <p>6</p>
        <p>£90</p>
      </div>
      <div id="matchTableOneData2">
        <p>6</p>
        <p>£90</p>
      </div>
      </div>
    </td>
    <td>
    <div>
      <div id="matchTableOneData1">
        <p>6</p>
        <p>£90</p>
      </div>
      <div id="matchTableOneData2">
        <p>6</p>
        <p>£90</p>
      </div>
      </div>
    </td>
  </tr>
  <tr>
    <td id="upcoming">Dec 30</td>
    <td className="matchedData">£1,482</td>
    <td>
<div>
      <div id="matchTableOneData1">
        <p>6</p>
        <p>£90</p>
      </div>
      <div id="matchTableOneData2">
        <p>6</p>
        <p>£90</p>
      </div>
      </div>
    </td>
    <td>
    <div>
      <div id="matchTableOneData1">
        <p>6</p>
        <p>£90</p>
      </div>
      <div id="matchTableOneData2">
        <p>6</p>
        <p>£90</p>
      </div>
      </div>
    </td>
    <td>
    <div>
      <div id="matchTableOneData1">
        <p>6</p>
        <p>£90</p>
      </div>
      <div id="matchTableOneData2">
        <p>6</p>
        <p>£90</p>
      </div>
      </div>
    </td>
  </tr>
 
</table>
<div>
<div id="cricketThirdDiv">
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
      <table id="customers">
  <tr>
    <th id="upcoming">Inplay</th>
    <th id="matched">Matched</th>
    <th id="matchTableone">1</th>
    <th>X</th>
    <th>2</th>
  </tr>
  <tr>
    <td>

    <div id="inPlayTop"> 
<p>1.46</p>
<p>£90</p>

    </div>

    <p id="inPlayTeam">Perth Scorchers
Hobart Hurricanes</p>
  
    </td>
    <td className="matchedData">
    £1,775
    <FundProjectionScreenOutlined id="tvIcons" />
    </td>
    <td>
<div>
      <div id="matchTableOneData1">
        <p>6</p>
        <p>£90</p>
      </div>
      <div id="matchTableOneData2">
        <p>6</p>
        <p>£90</p>
      </div>
      </div>
    </td>
    <td>
    <div>
      <div id="matchTableOneData1">
        <p>6</p>
        <p>£90</p>
      </div>
      <div id="matchTableOneData2">
        <p>6</p>
        <p>£90</p>
      </div>
      </div>
    </td>
    <td>
    <div>
      <div id="matchTableOneData1">
        <p>6</p>
        <p>£90</p>
      </div>
      <div id="matchTableOneData2">
        <p>6</p>
        <p>£90</p>
      </div>
      </div>
    </td>
  </tr>


</table>
</div>
  <table id="customers">
  <tr>
    <th id="upcoming">Upcoming</th>
    <th id="matched">Matched</th>
    <th id="matchTableone">1</th>
    <th>X</th>
    <th>2</th>
  </tr>
  <tr>
    <td id="upcoming">Dec 25, India vs Pakistan</td>
    <td className="matchedData">£1,865</td>
    <td>
<div>
      <div id="matchTableOneData1">
        <p>6</p>
        <p>£90</p>
      </div>
      <div id="matchTableOneData2">
        <p>6</p>
        <p>£90</p>
      </div>
      </div>
    </td>
    <td>
    <div>
      <div id="matchTableOneData1">
        <p>6</p>
        <p>£90</p>
      </div>
      <div id="matchTableOneData2">
        <p>6</p>
        <p>£90</p>
      </div>
      </div>
    </td>
    <td>
    <div>
      <div id="matchTableOneData1">
        <p>6</p>
        <p>£90</p>
      </div>
      <div id="matchTableOneData2">
        <p>6</p>
        <p>£90</p>
      </div>
      </div>
    </td>
  </tr>
  <tr>
    <td id="upcoming">Dec 28</td>
    <td className="matchedData">£1,775</td>
    <td>
<div>
      <div id="matchTableOneData1">
        <p>6</p>
        <p>£90</p>
      </div>
      <div id="matchTableOneData2">
        <p>6</p>
        <p>£90</p>
      </div>
      </div>
    </td>
    <td>
    <div>
      <div id="matchTableOneData1">
        <p>6</p>
        <p>£90</p>
      </div>
      <div id="matchTableOneData2">
        <p>6</p>
        <p>£90</p>
      </div>
      </div>
    </td>
    <td>
    <div>
      <div id="matchTableOneData1">
        <p>6</p>
        <p>£90</p>
      </div>
      <div id="matchTableOneData2">
        <p>6</p>
        <p>£90</p>
      </div>
      </div>
    </td>
  </tr>
  <tr>
    
    
    
  </tr>
 
</table>

    </div>
  );
};

export default MainBody;
