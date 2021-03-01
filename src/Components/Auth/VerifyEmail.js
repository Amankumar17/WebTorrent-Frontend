import React from 'react';
import {nodehost} from "../../env";
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "../../Styles/VerifyEmail.css";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


export default function VerifyEmail() {

  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleSnack = (newState) => () => {
      console.log("In handleclick.");
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

    const cururl = window.location.href.toString();
    // /verifyEmail/27c898c521dd1d7a87bd733e928bfd29?email=siddharthraja9849@gmail.com
    const urlEmail = (window.location.search).split("=").pop();
    
    const urlObject = (window.location.pathname).split("/").pop();
    console.log("Url-Data: ",urlEmail,urlObject);

    function resendEmail() {
        const url = nodehost+"/resend-email-verification-link?emailID="+urlEmail;
        console.log("resend url: ",url);
        fetch(url)
        .then( (response) => {
              console.log("Display response: ",response);
              setState({open:true, vertical: 'top', horizontal: 'center'  });
        })
    }

    function Verify() {

        const url = nodehost+"/verifyEmail/"+urlObject;
        
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
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              key={vertical + horizontal}
            ><MuiAlert severity="success">
                Reset Link has been successfully sent to your registered Email id.
              </MuiAlert>
            </Snackbar>
            <div id="verifying" className="verifySubcontent">
                <CircularProgress size={75} thickness={5}/>
                <Typography variant="h4">Verifying Email.</Typography>  
            </div>
            {window.onload=Verify}
            <div id="verified" className="verifySubcontent">
                <Typography variant="h4"> Email Verified.</Typography>
                <Button variant="contained" color="primary" href="/"> Go to Homepage </Button>
            </div>
            <div id="expired" className="verifySubcontent">
                <Typography variant="h4"> Your link has been expired.</Typography>
                <Button variant="contained" color="primary" onClick={resendEmail}> Resend Link </Button>
            </div>
            <div id="database-error" className="verifySubcontent">
                <Typography variant="h4"> Server Error.</Typography>
                <Button variant="contained" color="primary" href="/"> Go to Homepage </Button>
            </div>
            <div id="unknown-error" className="verifySubcontent">
                <Typography variant="h4"> Some Error Occurred.</Typography>
                <Button variant="contained" color="primary" href="/"> Go to Homepage </Button>
            </div>
        </div>
    );
}