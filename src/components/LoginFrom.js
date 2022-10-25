import React, {useState} from 'react'

function LoginFrom({Login, error}) {
    const [details, setDetails] = useState({name: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
    /* 
        STYLE
    */
    const formStyle = {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#53565A'
    }
    const afterDiv = {
        content: '',
        display: 'block',
        position: 'absolute',
        top: '-5px',
        left: '-5px',
        right: '-5px',
        bottom: '-5px',
        zIndex: '1',
        backgroundImage: 'linear-gradient(to bottom right, #FFCE00, green)'
    }
    const formInnerStyle = {
        position: 'relative',
        display: 'block',
        backgroundColor: '#FFF',
        padding: '30px',
        zIndex: '2',
        borderRadius: '10px'
    }
    const h2FromStyle = {
        color: '#888',
        fontSize: '28px',
        fontWeight: '500',
        marginBottom: '30px'
    }
    const groupStyle = {
        display: 'block',
        width: '300px',
        marginBottom: '15px'
    }
    const labelStyle = {
        display: 'block',
        color: '#666',
        fontSize: '12 px',
        marginBottom: '5px',
        transition: '0,4s'
    }
    const inputStyle = {
        display: 'block',
        width: '90%',
        padding: '10px 15px',
        backgroundColor: '#F8F8F8',
        borderRadius: '8px',
        transition: '0,4s'
    }
    const buttonStyle = {
        display: 'inline-block',
        padding: '10px 15px', 
        borderRadius:'8px',
        backgroundImage: 'linear-gradient(to right, #FFCE00 50%, #FFCE00 50%, green)',
        backgroundSize: '200%',
        backgroundPosition: '0%',
        transition: '0.4s',
        color: 'green',
        fontWeight: 'bold',
        cursor: 'pointer'
    }
    const errorStyle = {
        color: 'red'
    }


  return (
    <>
    <form onSubmit={submitHandler} style={formStyle}>
        <div className='form-inner' style={formInnerStyle}>
            <h2 style={h2FromStyle}>Kundennummer eingeben</h2>
            {(error != "") ? (<div className='error' style={errorStyle}>{error}</div>) : ""}
            <div className='form-group' style={groupStyle}>
                <label style={labelStyle}>Kundennummer:</label>
                <input style={inputStyle} type="text" name='name' id='name' onChange={e => setDetails({...details, name: e.target.value})} value={details.name}></input>
            </div>
            <input type="submit" value="LOGIN" style={buttonStyle}></input>
        </div>
    </form>
    <div style={afterDiv}></div>
    </>
  )
}

export default LoginFrom;
