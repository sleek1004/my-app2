import logo from './images/smallcon.png'

import './App.css';

import Main from './component/Main';


function Navbar(){

  return(
    <nav>
    
     
    <img src={logo} className="logo" alt="images/smallcon.png" />
     <h3 className='nav-text'>ReactFacts</h3>
   <h4 className='nav-title'>React Course - Project 1 </h4>
    </nav>
  )
}

 
function App() {
  return (
    <div className="App">
      
      
     
      
     
     
     <Navbar/>
     
     
     <Main/>
    </div>
  );
}



export default App;
