import React, {useState, useEffect} from 'react';
import "./Score.css";


function  Score() {
const [activeMenu, setActiveMenu] = useState(true);
const [screenSize, setScreenSize ] = useState(null);

useEffect(() => {
  const handleResize =()=> setScreenSize(window.innerWidth);

  window.addEventListener('resize', handleResize);

  handleResize();
  return() => window.removeEventListener('resize',handleResize)
},[]);

useEffect(() => {
  if (screenSize <= 800) {
    setActiveMenu(false);
  } else {
    setActiveMenu(true);
  }
}, [screenSize]);

  const [count , setCount]= useState(0);

function increase(){
  setCount(count +1)
}
function decrease(){
  setCount(count -1);
}
  return <div>
<div id="scoreBoardTopDiv">

<div id="team">
<p>Perth Scorchers</p>
<p>Hobart Hurricanes</p>
</div>
<div id="teamScore">

<p>168/5 (18.2)</p>
<p>200/10 (20)</p>

</div>

</div>
<div id="scoreSecondDiv">
<p>Liability: £10.00</p>
<div id="liability">
<p>Cash out £10.39</p>
<p>Profit: £0.39</p>


</div>

</div>
<div id="scoreLackTable">
<table id="matchBackTable">
  <tr id="matchBackTableTop">
    <th>selections</th>
    <th>100.5%</th>
    <th></th>
    <th><button id="backAllBtn">Back Lay</button></th>
    <th><button id="backAllBtn2">Lay all</button></th>
    <th> </th>
    <th>99.5%</th>

  </tr>
  <tr>
    <td>Perth Scorchers <br />
    £0.60
    </td>
    <td></td>
    <td></td>
    <td id="backCol" className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}></td>
    <td id="layCol" className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>200 <br />
    £55.60
    </td>
    <td className="layColText" className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>1.02 <br /> £55.60 </td>
    <td className="layColText" className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>1.02 <br />£55.60 </td>

  </tr>
  <tr>
    <td>
    Hobart Hurricanes <br />
£10.00
    </td>
    <td>120  <br />£0 </td>
    <td>150 <br /> £10</td>
    <td id="backCol" className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>1.01 <br />
    £55.60
    </td>
    <td id="layCol" className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>1.01 <br />
    £55.60</td>
    <td className="layColText">1.02 <br /> £55.60 </td>
    <td className="layColText">1.02 <br /> £55.60 </td>

  </tr>

  </table>

</div>


{activeMenu && 
<div id="manageBet">

<p id="betSeriesName">Back(Bet for): Austalian series winner</p>
<div id="betSection">

<button onClick={decrease}>-</button>
<p >£{count}</p>
<button onClick={increase}>+</button>
</div>
<button id="placeBetBtn">Place Bets</button>
</div>
}

  </div>;
};

export default Score;
