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


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ServerParticipants() {
  const classes = useStyles();

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
        startIcon={<AddIcon />}
      >
        Add Member
      </Button>
    </div>
  );
}
