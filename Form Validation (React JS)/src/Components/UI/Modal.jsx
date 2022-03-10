import React from "react";
import Button from "./Button";

const Modal = props => {
 
   const Style = [
       {
    position: 'fixed',
    top: '30vh',
    Left: '10%',
    Width: '80%',
    zIndex: '100',
    overflow: 'hidden',
    left: 'calc(50% - 20rem)',
    width: '40rem',
    border: '.5px solid grey'
   },

   {
    background: '#4f005f',
    padding: '1rem'
   },

   {
    margin: '0',
    color: 'white'
   },
   {
    padding: '1rem',
    display: 'flex',
    justifyContent: 'flex-end'
   },
   {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
    zIndex: '10',
    background: 'rgba(0, 0, 0, 0.75)'
   }

]

    return (
        <div>
            <div style = {Style[4]} onClick = {props.onConfirm}/>
        <div style = {Style[0]}>
            <header style = {Style[1]}>
                <h2 style = {Style[2]}>{props.title}</h2>
            </header>
            <div style = {{ padding: '1rem', color: 'white'}}>
                <p>{props.message}</p>
            </div>
            <footer style = {Style[3]}>
                <Button onClick = {props.onConfirm}>Okay</Button>
            </footer>

        </div>
        </div>
    )
};

export default Modal;