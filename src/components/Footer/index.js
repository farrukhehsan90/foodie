import React from 'react';
import { Button } from '@material-ui/core';

const Footer = () => {
    return (
        <div style={{width:"100vw",height:"10vh",backgroundColor:"#EEEEEE",display:"flex",justifyContent:"space-evenly"}}>
            <Button>All unavailable</Button>
            <Button>All available</Button>
            <Button>Apply</Button>
        </div>
    );
}

export default Footer;