import React, { useState } from 'react';
import LoginFrom from './components/LoginFrom';
import BestellForm from './components/BestellForm';

function App() {
  const adminUser = { name: "admin123" }
  const adminBestell = {name: 'bestellnummer123'}

  const [user, setUser] = useState({name: ""});
  const [error, setError]  = useState("");

  

  const Login = details =>{
    console.log(details);
    if(details.name === adminUser.name){
      setUser({
        name: details.name
      });
    }else{
      setError("Falsche Eingabe") 
    }
  }

  const Logout = details =>{
    setUser({name: ""});
  }
  /*
    STYLE
  */
  const appStyle = {
    display: 'block',
    width: '80%',
    marginLeft: '10%',
    background: '#FFF',
    zIndex:'2',
    borderRadius: '10px'
  }
  const afterDiv = {
    content: '',
    display: 'block',
    position: 'absolute',
    top: '-5px',
    left: '-5px',
    right: '-5px',
    bottom: '-5px',
    zIndex: '-1',
    backgroundColor: 'rgb(54, 124, 43)'
  }
  const errorStyle = {
    color: 'red'
  }
  const h2FromStyle = {
    color: '#888',
    fontSize: '28px',
    fontWeight: '500',
    marginBottom: '30px',
    marginLeft: '20px', 
  }
  const logoutStyle = {
    display: 'inline-block',
    padding: '10px 15px', 
    borderRadius:'8px',
    backgroundImage: 'linear-gradient(to right, rgb(255, 222, 0) 50%, rgb(255, 222, 0) 50%, black)',
    backgroundSize: '200%',
    backgroundPosition: '0%',
    transition: '0.4s',
    color: 'black',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginBottom: '10px',
    marginLeft:'10px',
    border: 'none'
  }

  return (
    <>    
    <div className="App">
      {(user.name !== "") ? (
        <div className='website' style={appStyle}> 
          <h2 style={h2FromStyle} >Wellcome, <span>{user.name}</span></h2>
          <BestellForm error={error} setError={setError}></BestellForm>
          <button onClick={Logout} style={logoutStyle}>LOGOUT</button>
        </div>
      ): (
      <LoginFrom Login={Login} error={error} ></LoginFrom>)
      }
    </div>
    <div style={afterDiv}></div>
    </>
  );
}

export default App;
