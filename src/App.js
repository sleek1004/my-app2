

import './App.css';
import React from "react"
import Main from './component/Main';
import Navbar from './component/Navbar';




 
function App() {
  const[darkMode, setDarkMode] = React.useState(false)
  function toggleDarkMode(){
    setDarkMode(prevDarkMode => !prevDarkMode)
  }
  return (
    <div className="container">
      
     
     <Navbar
     darkMode={darkMode}
     toggleDarkMode={toggleDarkMode}
     />
     <Main darkMode={darkMode}/>
    </div>
  );
}



export default App;
