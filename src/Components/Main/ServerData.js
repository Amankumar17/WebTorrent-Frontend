import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../../Styles/Main/ServerData.css';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }))


const months = ['January','February','March','April','May','June','July','August','Sept','October','November','December'];
const years = ['2020','2021'];

export default function ServerData(){
    const classes = useStyles();

    const [month, setMonth] = React.useState(months[0]);

    const [year, setYear] = React.useState(years[0]);


    return(
        <Grid className="data-container" item container sm={12} direction="column" justify="space-between">


            <Grid className="fixed-upper" item container direction="row" justify="center" alignItems="center">
                <Grid item sm={4}>
                    <Typography>Server Name</Typography>
                </Grid>

                <Grid sm={4} item container direction="row" justify="center" alignItems="center">

                    <Autocomplete
                        value={month}
                        onChange={(event, newValue) => {
                        setMonth(newValue);
                        }}
                        id="backup-month"
                        options={months}
                        style={{ width: 250 }}
                        renderInput={(params) => <TextField {...params} label="Month" variant="outlined" />}
                    />
                </Grid>

                <Grid item container direction="row" justify="center" alignItems="center" sm={4}>
                    <Autocomplete
                        value={year}
                        onChange={(event, newValue) => {
                        setYear(newValue);
                        }}
                        id="backup-year"
                        options={years}
                        style={{ width: 150 }}
                        renderInput={(params) => <TextField {...params} label="Year" variant="outlined" />}
                    />
                </Grid>

                
            </Grid>

            <Grid className="data-subcontainer">

            </Grid>

            <Grid className="fixed-bottom" item container direction="row" justify="center" alignItems="center">
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<CloudUploadIcon />}
                >
                    Upload
                </Button>
            </Grid>

        </Grid>
    )
}