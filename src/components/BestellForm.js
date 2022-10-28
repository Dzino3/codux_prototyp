import React, { useState } from 'react';
import {dataSP} from './database/databaseJS/prototypData';

function BestellForm( {error, setError}) {
    const [detailsB, setDetailsB] = useState({name: ""});
    const [bestell, setBestell] = useState({name: ""});
    const bestellInfo = [];
    const [order, setOrder] = useState();

    const Checked = () =>{
        console.log(detailsB); 
        setOrder(dataSP.find(innerOrder => innerOrder.Column26 === detailsB.name));
        if(detailsB !== order){
            setBestell({
                name: detailsB.name
            });
        }else{
            setError("Falsche Eingabe")
        }
    }
/*
    Search data in database
*/



/*
    STYLE
*/
    const formStyle = {
        display: 'flex'
    }
    const errorStyle = {
        color: 'red'
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
        width: '60%',
        padding: '5px 15px',
        backgroundColor: '#F8F8F8',
        borderRadius: '8px',
        transition: '0,4s'
    }
    const formInnerStyle = {
        position: 'relative',
        display: 'block',
        backgroundColor: '#FFF',
        padding: '30px',
        zIndex: '2',
        borderRadius: '10px'
    }
    const groupStyle = {
        display: 'block',
        width: '300px',
        marginBottom: '15px'
    }
    const buttonStyle = {
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
        border: 'none'
    }

  return (
    <>
    <form style={formStyle}>
    <div className='form-inner' style={formInnerStyle}>
        {(error !== "") ? (<div className='error' style={errorStyle}>{error}</div>) : ""}
        <div className='form-group' style={groupStyle}>
            <label style={labelStyle}>Order number:</label>
            <input style={inputStyle} type="text" name='bestellnummer' id='bestellnummer' onChange={e => setDetailsB({...detailsB, name: e.target.value})} value={detailsB.name}></input>
        </div>
        <input type="button" value="CHECK" style={buttonStyle} onClick={Checked}></input>
        {order && 
            <div>
                <p>Your delivery has been sourced and is being processed.</p>
                <p>Factory Delivery Date (FDD):  {order.Column51}</p>
                <p>Requested Delivery Date (RDD):  {order.Column47}</p>
                <p>FDD - RDD:  {order.Column49} Tage</p>
                <p>Original Factory Delivery Date (OFDD):  {order.Column48}</p>
            </div>
        }
    </div>
    </form>
    </>
  )
}

export default BestellForm
