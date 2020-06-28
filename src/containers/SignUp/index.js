import React, { Component } from 'react'
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

// material-ui
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from "@material-ui/core/Snackbar";
import Fade from "@material-ui/core/Fade";

// utils
import { signUp } from '../../store/actions';
  
class SignUp extends Component {
    state = {
        credentials: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        showSnackbar: false,
        snackbarMessage: '',
    };

    handleChange = event => {
        const {id, value} = event.target;
        this.setState({
          credentials: {
            ...this.state.credentials,
            [id]: value
          }
        })
    }

    handleSignUp = async event => {
        event.preventDefault();
        const { credentials } = this.state;

        if(credentials.password !== credentials.confirmPassword) {
            this.setState({ snackbarMessage: "Password Mismatch", showSnackbar: true });
        } else {
            const result = await this.props.signUp(credentials);
            if(result && result.code !== 'ok'){
                this.setState({ snackbarMessage: result.message, showSnackbar: true });
            } 
        }
    }

    handleSnackbarClose = () => {
        this.setState({ snackbarMessage: "", showSnackbar: false })
    }

    render() {
        const { auth } = this.props;
        if (auth.isLoaded && auth.uid) return <Redirect to="/"/>

        return(
            <div style={{ padding: "12rem 0rem", maxWidth: "60rem", margin: "auto" }}>
                <Grid container spacing={3} justify="center" alignItems="center">
                    <Grid item xs={6} >
                        <div style={{ textAlign: "center" }}>
                            Start Learning Now!
                        </div>
                    </Grid>
                    <Grid item xs={6} justify="center" alignItems="center">
                        <Paper>
                            <div style={{ textAlign: "center" , padding: "5rem 0rem"}}>
                                <form noValidate autoComplete="off" style={{ paddingBottom: "6rem"}}>
                                    <Grid item xs={12}>
                                        <TextField 
                                            style={{ minWidth: "12rem", width: "75%", maxWidth: "24rem"}}
                                            onChange={this.handleChange}
                                            type="email"
                                            id="email" 
                                            label="Email" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField 
                                            style={{ minWidth: "12rem", width: "75%", maxWidth: "24rem"}}
                                            onChange={this.handleChange}
                                            type="password"
                                            id="password"
                                            label="Password" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField 
                                            style={{ minWidth: "12rem", width: "75%", maxWidth: "24rem"}}
                                            onChange={this.handleChange}
                                            type="password"
                                            id="confirmPassword"
                                            label="confirmPassword" />
                                    </Grid>
                                </form>
                                <Button 
                                    onClick={this.handleSignUp}
                                    variant="contained" 
                                    color="primary">
                                    Create Account
                                </Button>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                
                <Snackbar
                    open={this.state.showSnackbar}
                    autoHideDuration={6000}
                    onClose={this.handleSnackbarClose}
                    TransitionComponent={Fade}
                    ContentProps={{ "aria-describedby": "message-id" }}
                    style={{ color: "white" }}
                    message={<span id="message-id">{this.state.snackbarMessage}</span>}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      auth: state.firebase.auth,
    };
};

const mapDispatchToProps = dispatch => {
    return {
      signUp: (creds) => dispatch(signUp(creds)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);