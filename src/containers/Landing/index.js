// libraries
import React from 'react';
import { withRouter } from 'react-router-dom';

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

// assets
import './index.css'
import image1 from '../../assets/images/slider-icon.png';
import bg from '../../assets/images/banner-bg.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: "2rem 16rem 8rem",
        background: `url(${bg}) no-repeat center center fixed`,
        backgroundSize: "cover",
    },
    img: {
        width: '100%',
        height: 'auto',
    }
}));

function Landing(props) {

    const classes = useStyles();

    const handleLoginRedirect = () => {
        props.history.push('/login')
    }

    const handleSignUpRedirect = () => {
        props.history.push('/signup')
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3} justify="space-between" alignItems="center">
                <Grid container item justify="space-between">
                    <Grid item>
                        <Typography color="textPrimary" variant="h4">Akads</Typography>
                    </Grid>
                    <Grid item>
                        <Button onClick={null} disabled={true}>Donate</Button>
                        <Button onClick={handleLoginRedirect}>Login</Button>
                        <Button onClick={handleSignUpRedirect}>Sign Up</Button>
                    </Grid>
                </Grid>
                <Grid container item spacing={6} alignItems="center">
                    <Grid item xs={6}>
                        <div>
                            <Typography color="textPrimary" variant="h4">Akads is a learning platform made <strong>just for YOU</strong></Typography>
                            <Typography color="textSecondary" variant="subtitle1">We'll have the application up and running, but until then, feel free to join our mailing list to get updates!</Typography>
                            <Button variant="contained" color="primary" href="#about">
                                Find Out More
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div>
                            <img src={image1} className={classes.img} alt="First Vector Graphic"/>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default withRouter(Landing);