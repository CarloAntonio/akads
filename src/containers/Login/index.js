import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from "@material-ui/core/Snackbar";
import Fade from "@material-ui/core/Fade";
import Typography from '@material-ui/core/Typography';

// utils
import { signIn } from '../../store/actions/index';

// assets
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
  
export default function Login() {

    const classes = useStyles();
    const auth = useSelector(state => state.firebase.auth);
    const dispatch = useDispatch();

    // state delaration
    const [showSnackbar, shouldShowSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword ] = useState("");
    const [confirmPassword, setConfirmPassword ] = useState("");

    const handleLogin = async event => {
        event.preventDefault();
        const credentials = { email, password, confirmPassword };
        console.log(credentials);
        // const result = await this.props.signIn(credentials);
        // if(result && result.code !== 'ok'){
        //     this.setState({ snackbarMessage: result.message, showSnackbar: true });
        // } else {
        //     this.props.history.push('/')
        // }
    }

    const handleSnackbarClose = () => {
        setSnackbarMessage("");
        shouldShowSnackbar(false);
    }

    if (auth.isLoaded && auth.uid) return <Redirect to="/"/>

    return(
        <div className={classes.root}>
            <Grid container item spacing={6} alignItems="center">
                <Grid item xs={6}>
                    <div>
                        <img src={image1} className={classes.img} alt="First Vector Graphic"/>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Paper>
                        <div style={{ textAlign: "center" , padding: "5rem 0rem"}}>
                            <form noValidate autoComplete="off" style={{ paddingBottom: "6rem"}}>
                                <Grid item xs={12}>
                                    <TextField 
                                        style={{ minWidth: "12rem", width: "75%", maxWidth: "24rem"}}
                                        onChange={event => setEmail(event.target.value)}
                                        value={email}
                                        type="email"
                                        id="email" 
                                        label="Email" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField 
                                        style={{ minWidth: "12rem", width: "75%", maxWidth: "24rem"}}
                                        onChange={event => setPassword(event.target.value)}
                                        value={password}
                                        type="password"
                                        id="password"
                                        label="Password" />
                                </Grid>
                            </form>
                            <Button 
                                onClick={handleLogin}
                                variant="contained" 
                                color="primary">
                                Login
                            </Button>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
            <Snackbar
                open={showSnackbar}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                TransitionComponent={Fade}
                ContentProps={{ "aria-describedby": "message-id" }}
                style={{ color: "white" }}
                message={<span id="message-id">{snackbarMessage}</span>}/>
        </div>

        // <div style={{ padding: "12rem 0rem", maxWidth: "60rem", margin: "auto" }}>
        //     <Grid container spacing={3} justify="center" alignItems="center">
        //         <Grid item xs={6} >
        //             <div style={{ textAlign: "center" }}>
        //                 Start Learning Now!
        //             </div>
        //         </Grid>
        //         <Grid item xs={6}>
                    // <Paper>
                    //     <div style={{ textAlign: "center" , padding: "5rem 0rem"}}>
                    //         <form noValidate autoComplete="off" style={{ paddingBottom: "6rem"}}>
                    //             <Grid item xs={12}>
                    //                 <TextField 
                    //                     style={{ minWidth: "12rem", width: "75%", maxWidth: "24rem"}}
                    //                     onChange={this.handleChange}
                    //                     type="email"
                    //                     id="email" 
                    //                     label="Email" />
                    //             </Grid>
                    //             <Grid item xs={12}>
                    //                 <TextField 
                    //                     style={{ minWidth: "12rem", width: "75%", maxWidth: "24rem"}}
                    //                     onChange={this.handleChange}
                    //                     type="password"
                    //                     id="password"
                    //                     label="Password" />
                    //             </Grid>
                    //         </form>
                    //         <Button 
                    //             onClick={this.handleLogin}
                    //             variant="contained" 
                    //             color="primary">
                    //             Login
                    //         </Button>
                    //     </div>
                    // </Paper>
        //         </Grid>
        //     </Grid>
    )
}

// const mapStateToProps = state => {
//     return {
//       auth: state.firebase.auth,
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//       signIn: (creds) => dispatch(signIn(creds)),
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
