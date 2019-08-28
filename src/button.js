import React from 'react';

function Button(props){

    return(
        <div>
    
        { 
            (props.isShown) && (<button  
                onClick= {()=>{window.location="https://facebook.com"}}  
    
                 style={{backgroundColor:(props.visited)? "red":"blue"}}>
                     My link    
                 </button>)}
        </div>
        );}


        export default Button ;