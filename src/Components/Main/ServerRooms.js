import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import { useCookies ,Cookies } from 'react-cookie';
import jwt_decode from "jwt-decode";
import {nodehost} from '../../env';
import {CreateServerModal} from './CreateServerModal';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));



export default function ServerRooms() {
  const classes = useStyles();

    const [cookies, setCookie, removeCookie] = useCookies(['Web_Torrent_Token']);
    const {Web_Torrent_Token}=cookies;
    const token=Web_Torrent_Token;

    const decode = jwt_decode(token);
    
    console.log("My tolen :",decode.emailID);

  function getAllRooms(){
    const url = nodehost+"/api/getAllRooms?emailID="+decode.emailID;
    console.log("api url: ", url);
    
    // fetch(url)
    // .then( (response) => {
    //   console.log("Get Rooms Data : ",response);
    // }).catch( (error) => {
    //   console.log("Get Rooms Fetch Error : ",error);
    // })
    
    const userObj = {
      roomName: 'masti hai mizaz me '
    }

    const axiosConfig={
      withCredentials:true
    }

    const response= axios.get(url,axiosConfig)
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    })
    
  //   axios.get(url)
  // .then(function (response) {
  //   // handle success
  //   console.log('Allrooms',response);
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log("why error",error);
  // })
  // .then(function () {
  //   // always executed
  //   console.log("in always");

  // });

    // axios.get('/api/getAllRooms', {
    //     params: {
    //       emailID: decode.emailID
    //     }
    //   })
    //   .then(function (response) {
    //     console.log('Allrooms',response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // always executed
    //     console.log("in always");

    //   });
}

  function CreateRoom(){
    const url = nodehost+"/api/createRoom?creatorID="+decode.emailID;
    console.log("api url: ", url);

    
    const userObj = {
      roomName: 'masti hai mizaz me '
    }

    const axiosConfig={
      withCredentials:true
    }

    axios.post(url,userObj,axiosConfig)
    .then(response=>{
      console.log(response)
    })
    .catch(err=>{
      console.log(err)
    })
    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(userObj)
    // };

    // fetch(url, requestOptions)
    // .then( (response) => {
    //   console.log("Displaying Response",response,response.status);
    // })
    // .then(data => console.log("fetch data: ",data))
    // .catch(error => console.log("fetch error: ",error));

    // axios.post(url, {
    //   creatorID: 'shrivastavaman171@gmail.com'
    // })
    // .then((response) => {
    //   console.log(response);
    // }, (error) => {
    //   console.log("Crate Error:" ,error);
    // });
  }

  return (
      <div>
        <br/>
        <List className={classes.root}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="" className={classes.orange}>
                        A
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="UserName" />
            </ListItem>
        </List>

        <Typography> Backup Servers </Typography>
        <List className={classes.root}>
            <ListItem button>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="" className={classes.orange}>
                        A
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Backup Server A" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem button>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="" className={classes.orange}>
                        B
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Backup Server B" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem button>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="" className={classes.orange}>
                        C
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Backup Server C" secondary="July 20, 2014" />
            </ListItem>
        </List>
        <br/>
        <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<AddIcon />}
      >
        Add New Server
      </Button>
    </div>
  );
}
