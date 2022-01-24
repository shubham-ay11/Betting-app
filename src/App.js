import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import MainBody from "./MainBody";
import SideNav from "./SideNav.js";

function App() {
  return (
    <div>
    <Header />
    <div className="app">
    
        <div className="navbar">
<SideNav />
          </div>
           <div className="main">
<MainBody />
</div>
</div>
</div>
  );
}

export default App;
