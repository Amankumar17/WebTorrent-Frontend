import React from 'react';
import '../../Styles/Main/Main.css';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ServerRooms from './ServerRooms';
import ServerParticipants from './ServerParticipants';
import ServerData from './ServerData';

export default function Main(){
    return(
        
            <Grid container direction="row" justify="center" alignItems="stretch" >
                {/* <Grid className="column-header" sm={11}></Grid> */}
                <Grid className="column-container" item sm={3} spacing={2}>
                    <ServerRooms/>
                </Grid>
                <Grid className="column-container" item sm={6}>
                    <ServerData/>
                </Grid>
                <Grid className="column-container" item sm={2}>
                    <ServerParticipants />
                </Grid>
            </Grid>
        
    );
}

