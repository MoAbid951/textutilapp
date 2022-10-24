 import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react'
import Alert from './components/Alert';
function App() {
  const [mode,setMode] = useState('light')
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#092a46';
      showAlert("success","Dark mode is enabled");
      document.title = "Textutil - Dark Mode";

      // setInterval( () =>{

      //   document.title = "brightning title";


      // },2000)

      // setInterval( () =>{

      //   document.title = "testing title";


      // },1500)
    }else{
        setMode('light')
        document.body.style.backgroundColor = 'white';
        showAlert("success","Light mode is enabled");
        document.title = "Textutil - Light Mode";
      }
  }

  const [alert,setAlert] = useState(null);
  const showAlert = (type,message) => {
    setAlert({
      msg : message,
      type: type
    })

    setTimeout( () => {
      setAlert(null);
    },2000)
  }
  return (
    <>
        <Navbar title="textUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        
        {/* <div className='container'>
          <About/>
        </div> */}
        {/* <Switch> */}
          {/* <Route path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route path="/"> */}
          <div className="container">
            <Textform heading = "Enter text to analyze below" mode={mode} showAlert = {showAlert}/>
        </div>
          {/* </Route> */}
        {/* </Switch> */}
       
    </>
  );
}

export default App;
