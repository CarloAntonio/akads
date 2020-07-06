
// libraries
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// styles
import './index.css';

// utils
import { envEndpoint } from '../../utils/firebase-service';

// fake data
const grades = {
    first: {
        subjects: {
            math: {
                title: "First Grade Math",
            },
            reading: {
                title: "First Grade Reading",
            },
            science: {
                title: "First Grade Science",
            }
        }
    },
    second: {
        subjects: {
            math: {
                title: "Second Grade Math",
            },
            reading: {
                title: "Second Grade Reading",
            },
            science: {
                title: "Second Grade Science",
            }
        }
    },
    third: {
        subjects: {
            math: {
                title: "Third Grade Math",
            },
            reading: {
                title: "Third Grade Reading",
            },
            science: {
                title: "Third Grade Science",
            }
        }
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
        media: {
        height: 140,
    },
}));

export default function HomeRoom(props) {

    const classes = useStyles();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.firebase.auth);

    // react state
    const [user, setUser] = React.useState(null);
    console.log(user)

    // "lifecycle", adding array at end ensure that function only runs once
    useEffect(() => {
        async function fetchData(){
            try{
                const response = await fetch(`${envEndpoint}user/getUser`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        uid: auth.uid,
                    }),
                });
    
                // handle when request completed successfully
                if(response.ok && response.status == 200) { 
                    // pull user data
                    const result = await response.json();
                    setUser(result);
                }
            } catch(err){
                console.log(err);
            }
            
        }
        fetchData();
    }, [dispatch]);

    const handleGradeClick = gradeTitle => {
        props.history.push(this.props.history.location.pathname + "/" + gradeTitle);
    }

    const gradesTitles = Object.keys(grades)
    let gradeCards = [];
    gradesTitles.forEach(gradeTitle => {
        gradeCards.push(
            <Grid item xs={3} key={gradeTitle} >
                <Card className={classes.root} onClick={() => handleGradeClick(gradeTitle)}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {gradeTitle.charAt(0).toUpperCase() + gradeTitle.slice(1) + ' Grade'}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            See Subjects
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    })

    return (
        <header className="App-header">
            <Grid container spacing={3} justify="center" alignItems="center">
                {gradeCards}
            </Grid>
        </header>
    );
}

// HomeRoom.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// const mapStateToProps = state => {
//   return {
//     auth: state.firebase.auth,
//   };
// };

// export default withStyles(styles)(connect(mapStateToProps)(HomeRoom));
    