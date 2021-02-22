import React from 'react';
import {nodehost} from "../env";
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "../Styles/VerifyEmail.css";

export default function VerifyEmail() {

    // const dynamicContent = {
    //     return (
    //         <div>
    //             <CircularProgress size={75} thickness={5}/>
    //             <Typography variant="h4"> Verifying Email.</Typography>
    //         </div>
    //     );
    // }

    function Verify() {

        const cururl = window.location.href.toString();

        const lastSegment = cururl.split("/").pop();

        const url = nodehost+"/verifyEmail/"+lastSegment;
        
        // * status 200 : OK
        // * status 440 : PAGE EXPIRED!!
        // * status 500 : DATABASE ERROR!!
        fetch(url)
            .then( (response) => {
              console.log("Displaying Response",response,response.status);
              
              document.getElementById("verifying").style.display="none";
              if (response.status==200)
              {
                document.getElementById("verified").style.display="block";
              }
              else if(response.status==440)
              {
                document.getElementById("expired").style.display="block";
              }
              else if(response.status==500)
              {
                document.getElementById("database-error").style.display="block";
              }
              else 
              {
                document.getElementById("unknown-error").style.display="block";
              }
            })
            .catch(error => console.log(error));
      
    }

    return(
        <div id="verifyContent">
            <div id="verifying" className="verifySubcontent">
                <CircularProgress size={75} thickness={5}/>
                <Typography variant="h4">Verifying Email.</Typography>  
            </div>
            {Verify()}
            <div id="verified" className="verifySubcontent">
                <Typography variant="h4"> Email Verified.</Typography>
                <Button variant="contained" color="primary"> Go to Homepage </Button>
            </div>
            <div id="expired" className="verifySubcontent">
                <Typography variant="h4"> Your link has been expired.</Typography>
                <Button variant="contained" color="primary"> Resend Link </Button>
            </div>
            <div id="database-error" className="verifySubcontent">
                <Typography variant="h4"> Server Error.</Typography>
                <Button variant="contained" color="primary"> Go to Homepage </Button>
            </div>
            <div id="unknown-error" className="verifySubcontent">
                <Typography variant="h4"> Some Error Occurred.</Typography>
                <Button variant="contained" color="primary"> Go to Homepage </Button>
            </div>
        </div>
    );
}