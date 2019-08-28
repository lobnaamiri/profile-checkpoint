import React from 'react';
import Button from'./button';
import Img from './img/profile.jpg';

function Profile(){
    let FirstName = "Lobna";
    let LastName = "Amiri";
    return (
        <div> 
            <img src={Img}/>
            <h1>FirstName: {FirstName}</h1>
            <h2>LastName: {LastName}</h2>
            <Button isShown visited />
        </div>
    );
}
export default Profile;