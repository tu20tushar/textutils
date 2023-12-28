// import logo from './logo.svg';
// npm run start
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
// import About from "./components/About";
import TextForm from './components/TextForm';
import React, {useState} from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


//imrs
function App() {
  const [mode, setMode]=useState('light');
  const [alert, setAlert]=useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=> {
        setAlert(null);
    }, 3000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode has been enable", "success");
      document.title="TextUtils - Dark Mode";
      
      
    }else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enable", "success");
      document.title="TextUtils - light Mode";
    }

  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Routes>
        <Route exact path='/about' element={<About/>}/> */}
          {/* <About /> */}
        {/* </Route> */}
        {/* <Route path='/' />
          <TextForm showAlert={showAlert}heading="Enter the text to analyze below" mode={mode}/>
        </Route> */}

        {/* <Route exact path="/"
          element={
            <>
              <React.Fragment>
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              </React.Fragment>
            </>
          }
        />
      </Routes> */}
      <TextForm showAlert={showAlert}heading="Enter the text to analyze below" mode={mode}/>
        
        {/* <About/> */}
        {/* <About/> */}
      </div>
    {/* </Router>   */}
    </>
    
    
  );
}

export default App;
