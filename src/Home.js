import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './Styles/Home.css'
import Button from '@material-ui/core/Button';
const Home = () => {
    const preventDefault = (event) => event.preventDefault();

    return ( 
        <Grid className = "Home" item container xs={10} sm={8} direction="row" justify="center" alignItems="center">
            <div>
                <Typography variant='h4'>Multimedia Backup System</Typography>
                <Typography variant="h6" className = "sub-header" >
                    B.E Project 
                    <br></br>
                    Guided by: Dr.Sangita Chaudhari 
                </Typography>
                <br></br>
                <Button className="btn" variant="contained" color="primary" href="/signup">
                    Get Started
                </Button>
                <br></br>
                <br></br>
                <Grid container direction="row" justify="space-evenly">
                    <Button className="btn" variant="contained" color="primary" href="https://drive.google.com/file/d/1oYW5gmFT7Q58QjG29l6opK7ALgTD5MO6/view?usp=sharing">
                        System-Design
                    </Button>
                    
                    <Button className="btn" variant="contained" color="primary" href="https://github.com/Amankumar17">
                        Github-repo
                    </Button>
                </Grid>
                
            </div>  
            
        </Grid>
    );
}



export default Home;