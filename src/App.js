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
    backgroundImage: 'linear-gradient(to bottom right, #FFCE00, green)'
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
    backgroundImage: 'linear-gradient(to right, #FFCE00 50%, #FFCE00 50%, green)',
    backgroundSize: '200%',
    backgroundPosition: '0%',
    transition: '0.4s',
    color: 'green',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginBottom: '10px',
    marginLeft:'10px'
  }

  return (
    <>    
    <div className="App">
      {(user.name !== "") ? (
        <div className='website' style={appStyle}> 
          <h2 style={h2FromStyle} >Willkommen, <span>{user.name}</span></h2>
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
