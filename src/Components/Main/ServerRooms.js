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

export default function ServerRooms() {
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
