import React from 'react';
import { OutlinedInput, withStyles } from '@material-ui/core';
import {ArrowBack} from '@material-ui/icons';

const Header = ({ classes }) => {
    return (
        <div style={{ width: "100vw", height: "10vh", backgroundColor: '#FDBF35', display: "flex", alignItems: 'center',padding:"0",boxShadow:"5px 5px 18px #BCBCBC",zIndex:999 }}>
            <ArrowBack style={{padding:"0 2.5rem"}}/>
            <div style={{display:'flex',justifyContent:"center",alignItems:'center',width:"70%"}}>
            <OutlinedInput classes={{
                root: classes.root
            }} />
            </div>
        </div>
    );
}

const styles = {
    root: {
        height: "60%",
        width: "45%",
        backgroundColor: "#F7C34F",
        border: "1px solid #F7C34F"
    }
}

export default withStyles(styles)(Header);