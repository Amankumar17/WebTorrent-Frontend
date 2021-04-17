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
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';
import {nodehost} from '../../env';
import axios from 'axios';
import { useCookies ,Cookies } from 'react-cookie';
import jwt_decode from "jwt-decode";
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  

const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: modl, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: modl ? 1 : 0 },
      onStart: () => {
        if (modl && onEnter) {
          onEnter();
        }
      },
      onRest: () => {
        if (!modl && onExited) {
          onExited();
        }
      },
    });
  
    return (
      <animated.div ref={ref} style={style} {...other}>
        {children}
      </animated.div>
    );
  });

export default function ServerParticipants() {

  const classes = useStyles();

  const abc = React.useRef(null);

  const [modl, setmodl] = React.useState(false);

  const [cookies, setCookie, removeCookie] = useCookies(['Web_Torrent_Token']);
    
  const {Web_Torrent_Token}=cookies;
    
  const token=Web_Torrent_Token;
  
  const decode = jwt_decode(token);


  const handleOpen = () => {
    setmodl(true);
  };

  const handleClose = () => {
    setmodl(false);
  };

  function getParticipants(){
    const url = nodehost+"/api/mail-room-id";
    
    const userObj = {
        "emailIDs":[abc.current.value],
        "roomID":"018e50e2-333b-4a4d-80c6-ddf0ac24978e"
    }

    console.log("api url: ", url, abc.current.value, userObj);

    const axiosConfig={
      withCredentials:true
    }

    axios.get(url,
    {
      params: userObj
    })
      .then((response) => {
        console.log("Response: ",response);
      })
      .catch((err) => {
        console.log("Error: ",err);
      })

    // axios.post(url,userObj,axiosConfig)
    // .then(response=>{
    //   console.log(response); 

    // })
    // .catch(err=>{
    //   console.log(err)
    // })
    handleClose();
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
                <ListItemText primary="Server Name" />
            </ListItem>
        </List>

        <Typography> Members </Typography>
        <List className={classes.root}>
            <ListItem button>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="" className={classes.orange}>
                        M1
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Member 1" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem button>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="" className={classes.orange}>
                        M2
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Member 2" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem button>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="" className={classes.orange}>
                        M3
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Member 3" />
            </ListItem>
        </List>
        
        <br/>
        <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<AddIcon/>}
        onClick={handleOpen}
      >
        Add Member
      </Button>

      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className={classes.modal}
        open={modl}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modl}>
          <div className={classes.paper}>
            <h2 id="modal-title">Add New Member</h2>
            <input type="text" placeholder="email" ref={abc}></input>
            {/* <TextField
              label="Server-Name"
              id="serverName"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              ref={abc}
            /> */}
            <br/>
            <br/>
            <center>
            <Button variant="contained" color="primary" onClick={getParticipants}>
              Add
            </Button>
            </center>
          </div>
        </Fade>
      </Modal>

    </div>
  );
}
