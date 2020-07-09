import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';


// custom containers
import NewPost from './NewPost';
import PostCard from './PostCard';
import FLAvatar from './FLAvatar';

// assets
import image1 from '../../assets/images/profile.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    margin: "84px",
    fontSize: "calc(10px + 2vmin)",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: "100%",
    marginBottom: "8px"
  },
  card: {
    marginTop: "8px",
    width: "100%",
  },
  header: {
    // backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    margin: "64px",
    // alignItems: "center",
    // justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    // color: "white"
  },
  small: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  center: {
    margin: "0 auto"
  }
}));

export default function Profile(){
    const classes = useStyles();

    return (
      <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <Paper className={classes.paper}>
                <Grid container item xs={12} justify="center">
                  <Avatar alt="Carlo Bilbao" src={image1} className={classes.large} />
                </Grid>
                <Grid container item xs={12} justify="center">
                  <Grid item xs={10}>
                    <Typography align="center">Carlo Bilbao</Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography  align="left">Member Since: April 26, 2020</Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography  align="left">Lives: Antioch, CA</Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography  align="left">Hometown: Concord, CA</Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography  align="left">Works In: Biotech</Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography  align="left">Interest: Programming, Sciences, Working Out, Doggos</Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography  align="left">Real Gs Move in Silence, Like Lasanga</Typography>
                  </Grid>
                </Grid>
              </Paper>

              {/* Personality Section */}
              <Paper className={classes.paper}>
                <Grid container item xs={12} justify="center">
                  <Typography align="center">Personality</Typography>
                  <Card className={classes.card}>
                    <CardContent>
                      <Typography gutterBottom align="left" variant="subtitle2">
                        Two Truths and a Lie
                      </Typography>
                      <Typography variant="body2" align="left" color="textSecondary">
                        I like to play basketball, I am a founder of a company, I dance competatively
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card className={classes.card}>
                    <CardContent>
                      <Typography gutterBottom align="left" variant="subtitle2">
                        Never Have I Ever
                      </Typography>
                      <Typography variant="body2" align="left" color="textSecondary">
                        Gotten a tattoo, but currently considering one. Most likey a sleeve.
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card className={classes.card}>
                    <CardContent>
                      <Typography gutterBottom align="left" variant="subtitle2">
                        My Simple Pleasures
                      </Typography>
                      <Typography variant="body2" align="left" color="textSecondary">
                        Doing a load of sheets and blankets, putting it in the dryer, doing 1 hr intense workout shower, eat, sleep on recently dried sheets.
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card className={classes.card}>
                    <CardContent>
                      <Typography gutterBottom align="left" variant="subtitle2">
                        Best Travel Story
                      </Typography>
                      <Typography variant="body2" align="left" color="textSecondary">
                        IBack packing for 2 days in Yosemite with 3 other friends. Everything that could have gone wrong did, but it was still be best adventure I've ever had.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Paper>

              {/* Friends List */}
              <Paper className={classes.paper}>
                <Grid container item xs={12} justify="center">
                  <Grid container item xs={12} justify="center">
                    <Typography align="center">Friends</Typography>
                  </Grid>
                  <FLAvatar/>
                  <FLAvatar/>
                </Grid>
              </Paper>
            </Grid>

            {/* Right Hand Side */}
            <Grid item xs={7}>
              {/* New Post Container */}
              <NewPost/>
              
              <Paper className={classes.paper}> 
                <Grid item xs={12}>
                  <Typography>Post</Typography>
                  <PostCard/>
                  <PostCard/>
                  <PostCard/>
                  <PostCard/>
                  <PostCard/>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </div>
    )
}