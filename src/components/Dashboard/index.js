import React, { Fragment, useState, useEffect } from 'react';
import foodies from '../../assets/foodies.json';
import { fade, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#FDBF35'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
    },
    content: {
        flexGrow: 1,
        backgroundColor: '#efef9a',
        padding: theme.spacing(3)

    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    listButton: {
        backgroundColor: "#FDBF35"
    },
    NonListButton: {
        backgroundColor: "white"
    },
    card: {
        width: "100px",
        backgroundColor: 'red',
        marginTop: '20px',
        marginBottom: '20px'
    },
    cardSimple:{
        width: "100px",
        backgroundColor: 'green',
        marginTop: '20px',
        marginBottom: '20px'
    },
    bullet: {
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        color: 'white',
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },

}));

const Dashboard = () => {
    const classes = useStyles();
    const [items, setItems] = useState([]);
    const [currentItem, setCurrentMenuItem] = useState(foodies.menuDetails.EATORAMA);
    const [menu, setMenu] = useState([]);
    const [currentMenu, setCurrentMenu] = useState(0);
    const bull = <span className={classes.bullet}>•</span>;
    useEffect(() => {

        setTimeout(() => {
            // setItems(foodies);

            setMenu(Object.keys(foodies.menuDetails));

        }, 2000);

    }, [currentMenu,menu,currentItem,items]);

    return (
        <div>
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Demonstration
            </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            onChange={async (e)=>{
                                console.log(e.target.value)
                                var filteredArray = currentItem.filter(function(itm){
                                    return itm.foodname.includes(e.target.value);
                                  });

                                  setCurrentMenuItem(filteredArray)
                            }}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        {menu.map((text, index) => (
                            <ListItem button className={text === currentMenu ? classes.listButton : classes.NonListButton} onClick={() => {
                                setCurrentMenu(text)
                                if (text === "EATORAMA") {
                                    setCurrentMenuItem(foodies.menuDetails.EATORAMA);
                                }
                                if (text === "STARBUCKS") {
                                    setCurrentMenuItem(foodies.menuDetails.STARBUCKS);
                                }
                                if(text === "SOUPSTATION"){
                                    setCurrentMenuItem(foodies.menuDetails.SOUPSTATION);
                                }
                            }} key={text}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
            <main className={classes.content}>
                <Toolbar />
                <div class="row">
                    {currentItem.map((item, index) =>

                        <div class="col-sm-2">
                            <Button className={items.includes(item.foodid)?classes.card:classes.cardSimple} onClick={()=>{
                                var itm = items;
                                if(items.includes(item.foodid)){
                                 
                                    itm.splice(itm.indexOf(item.foodid), 1);
                                    setItems(itm)
                                
                                }

                                else{
                                    itm.push(item.foodid)
                                    setItems(itm)
                                }

                            }}>
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    {item.foodname.substr(0,10)}
                                    </Typography>
                                </CardContent>
                            </Button>

                        </div>
                    )}
                </div>
            </main>
            
        </div>
        <div style={{width:"100vw",height:"10vh",backgroundColor:"#EEEEEE",display:"flex",justifyContent:"space-evenly"}}>
            <Button
             style={{backgroundColor:"yellow",borderRadius:10,width:"10%",height:50,marginTop:5,marginLeft:50,marginRight:10}} onClick={()=>{
            setItems([])
            }}>All available</Button>
            <Button
             style={{backgroundColor:"yellow",borderRadius:10,width:"10%",height:50,marginTop:5,marginLeft:20,marginRight:10}}
            onClick={async ()=>{
              
               var item  = await currentItem.map((v,i)=>{
                 return v.foodid
              }) 
              setItems(item)

            }}>All unavailable</Button>
            <Button
             style={{backgroundColor:"yellow",borderRadius:10,width:"10%",height:50,marginTop:5,marginLeft:20,marginRight:10}}
            >Apply</Button>
        </div>
        </div>
        // <div style={{ height: "80vh",backgroundColor:'blue'}}>
        //     <div style={{width:'20%',height: "80vh", flexDirection:'row',backgroundColor:"yellow"}}></div>
        //     <div style={{width:'20%',height: "80vh",backgroundColor:"Green"}}></div>
        //     <div></div>
        // </div>
        // <div style={{ width: "100vw", height: "80vh", display: "flex", alignItems: 'flex-end' }}>
        //     <div style={{ width: '20%', height: "100%", backgroundColor: "#FFFFFF", borderRight: ".01rem solid rgba(0,0,0,.2)", zIndex: -10,display:"flex",flexDirection:"column",alignItems:"center",paddingLeft:".5rem" }} >
        //         {menu.length>0 && menu.map(item=>
        //         <div style={{width:"100%",padding:"1rem 1rem",textAlign:""}}>
        //             {item}
        //         </div>)}
        //     </div>
        //     <div style={{ width: "80%", height: "100%", backgroundColor: "yellow" }}>

        //     </div>
        // </div>
        
    );
}

export default Dashboard;