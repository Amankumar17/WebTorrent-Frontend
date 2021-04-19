import React from 'react';
import '../../Styles/Main/Main.css';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ServerRooms from './ServerRooms';
import ServerParticipants from './ServerParticipants';
import ServerData from './ServerData';
import jwt_decode from "jwt-decode";
import { useCookies ,Cookies } from 'react-cookie';


export let SelectedServerContext=React.createContext(null)

export default function Main(){
    const [cookies, setCookie, removeCookie] = useCookies(['Web_Torrent_Token']);
    const {Web_Torrent_Token}=cookies;
    const token=Web_Torrent_Token;
    // console.log("My tolen :",token);
    
    const decode = jwt_decode(token);
    console.log('My decoded token: ',decode);
    
    return(
        <div>
            <SelectedServerContext.Provider value={""}>
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
            </SelectedServerContext.Provider>
        </div>
    );
}

