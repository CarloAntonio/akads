// libraries
import React from 'react';
import { withRouter } from 'react-router-dom';

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

// test
import './index.css'

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.common.white,
    },
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
        <React.Fragment>
            <header className="header-area header-sticky">
                <Grid container spacing={3} justify="center">
                    <Grid item xs={10}>
                        <nav className="main-nav">
                            <Typography variant="h6" className="logo">Akads</Typography>
                            <ul className="nav">
                                <li className="scroll-to-section"><Button onClick={null} disabled={true} className={classes.root}>Donate</Button></li>
                                <li className="scroll-to-section"><Button onClick={handleLoginRedirect} disabled={true} className={classes.root}>Login</Button></li>
                                <li className="scroll-to-section"><Button onClick={handleSignUpRedirect} disabled={true} className={classes.root}>Sign Up</Button></li>
                            </ul>
                        </nav>
                    </Grid>
                </Grid>
            </header>
            <div className="welcome-area" id="welcome">
                <div className="header-text">
                    <Grid container spacing={3} justify="center">
                        <Grid item xs={10}>
                            <div className="left-text col-lg-6 col-md-6 col-sm-12 col-xs-12" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                                <h1>Akads is a learning platform made <strong>just for YOU</strong></h1>
                                <p>We'll have the application up and running, but until then, feel free to join our mailing list to get updates!</p>
                                <a href="#about" className="main-button-slider">Find Out More</a>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                                {/* <img src="assets/images/slider-icon.png" class="rounded img-fluid d-block mx-auto" alt="First Vector Graphic"/> */}
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </React.Fragment>
    );
}

export default withRouter(Landing);