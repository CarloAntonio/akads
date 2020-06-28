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
import { signIn } from '../../store/actions/index';
  
class Login extends Component {
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

    handleLogin = async event => {
        event.preventDefault();
        const { credentials } = this.state;
        const result = await this.props.signIn(credentials);
        if(result && result.code !== 'ok'){
            this.setState({ snackbarMessage: result.message, showSnackbar: true });
        } else {
            this.props.history.push('/')
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
                                </form>
                                <Button 
                                    onClick={this.handleLogin}
                                    variant="contained" 
                                    color="primary">
                                    Login
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
      signIn: (creds) => dispatch(signIn(creds)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
