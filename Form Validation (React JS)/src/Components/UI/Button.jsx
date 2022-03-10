import React from "react";

const Button = props => {
    return (
        <>
                
               <button type={props.type|| 'button'} className="btn btn-warning" onClick={props.onClick}>{props.children}</button>
            
        </>
    );
}

export default Button;