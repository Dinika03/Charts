import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Bar, Line } from 'react-chartjs-2';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { csv } from 'd3';
import { VictoryBar, VictoryChart } from 'victory';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: '25px',
    marginTop: '25px',
  },
  // root1: {
  //   '& > *': {
  //     margin: theme.spacing(1),
  //     width: '25ch',
  //     height: '10ch',
  //   },
  // },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

}));
const state = {
  labels: ['January', 'February', 'March',
    'April', 'May'],
  datasets: [
    {
      label: 'ATA data',
      backgroundColor: '#d8e4f0',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

const row = d => {
  d.Type = +d.Type;
  return d;
};
export default function Graphs() {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    csv('data.csv', row).then(setData);
  }, []);

  return (

    <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid item xs={6}>
          {/* <form className={classes.root1} noValidate autoComplete="off">
            <div> <TextField id="outlined-required" label="ATA to Study" defaultValue=" " variant="outlined" /></div>
            <br></br>
            <div> <TextField id="outlined-required" label="Top Values" defaultValue=" " variant="outlined" /></div>
            <br></br>
            <div className={classes.root1} style={{ paddingBottom: "20px" }}><Button variant="contained" color="primary">GENERATE</Button></div>
          </form> */}

          <Paper className={classes.paper}>
            <VictoryChart
            
              style={{ tickLabels: { fontSize: 120 } }}
              width='960'
              height='500'
              domainPadding={50}
              padding={{ top: 10, bottom: 40, left: 80, right: 10 }}
            >
              <VictoryBar data={data} x="ATA Main" y="Intermittent" >

              </VictoryBar>
            </VictoryChart>
          </Paper>
        </Grid>
        <Grid item xs={6}>

          {/* <form className={classes.root1} noValidate autoComplete="off">
            <div> <TextField id="outlined-required" label="Aircraft to Study" defaultValue=" " variant="outlined" /></div>
            <br></br>
            <div> <TextField id="outlined-required" label="Top Values" defaultValue=" " variant="outlined" /></div>
            <br></br>
            <div className={classes.root1} style={{ paddingBottom: "20px" }}><Button variant="contained" color="primary">GENERATE</Button></div>
          </form> */}

          <Paper className={classes.paper}><Line
            data={state}
            options={{
              title: { display: true, text: 'ATA GRAPHS', fontSize: 20 },
              legend: { display: true, position: 'right' }
            }}
          /></Paper>
        </Grid>
        
        <Grid item xs={6}>
          <form className={classes.root1} noValidate autoComplete="off">
            <div> <TextField id="outlined-required" label="AC to Study" defaultValue=" " variant="outlined" /></div>
            <br></br>
            <div> <TextField id="outlined-required" label="Message to Study" defaultValue=" " variant="outlined" /></div>
            <br></br>
            <div className={classes.root1} style={{ paddingBottom: "20px" }}><Button variant="contained" color="primary">GENERATE</Button></div>
          </form>

          <Paper className={classes.paper}><Line
            data={state}
            options={{
              title: {
                display: true,
                text: 'ATA GRAPHS',
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'right'
              }
            }}
          /></Paper>
        </Grid>
        <Grid item xs={6}>
          <form className={classes.root1} noValidate autoComplete="off">
            <div> <TextField id="outlined-required" label="Report Choosen" defaultValue=" " variant="outlined" /></div>
            <br></br>
            <div> <TextField id="outlined-required" label="Top Count" defaultValue=" " variant="outlined" /></div>
            <br></br>
            <div className={classes.root1} style={{ paddingBottom: "20px" }}><Button variant="contained" color="primary">GENERATE</Button></div>
          </form>

          <Paper className={classes.paper}><Bar
            data={state}
            options={{
              title: {
                display: true,
                text: 'ATA GRAPHS',
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'right'
              }
            }}
          /></Paper>
        </Grid>
        <Grid item xs={6}>
          <form className={classes.root1} noValidate autoComplete="off">
            <div> <TextField id="outlined-required" label="AC to Study(3)" defaultValue=" " variant="outlined" /></div>
            <br></br>
            <div> <TextField id="outlined-required" label="Message to Study(3)" defaultValue=" " variant="outlined" /></div>
            <br></br>
            <div className={classes.root1} style={{ paddingBottom: "20px" }}><Button variant="contained" color="primary">GENERATE</Button></div>
          </form>

          <Paper className={classes.paper}><Bar
            data={state}
            options={{
              title: {
                display: true,
                text: 'ATA GRAPHS',
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'right'
              }
            }}
          /></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
