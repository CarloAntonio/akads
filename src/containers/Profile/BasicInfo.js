
// libraries
import React from 'react';
import { useSelector } from 'react-redux';

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// custom components
import EditProfileDialog from '../../components/popups/EditProfileDialog';

// assets
import image1 from '../../assets/images/profile.jpg';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      width: "100%",
      marginBottom: "8px"
    },
    large: {
      width: theme.spacing(25),
      height: theme.spacing(25),
    },
    traitBox: {
        paddingBottom: "6px"
    }
}));

const sampleData = {
    name: {
        title: "Name: ",
        value: "Carlo Bilbao",
    },
    memberSince: {
        title: "Member Since: ",
        value: "April 26, 2020",
    },
    liveIn: {
        title: "Lives In: ",
        value: "Antioch, CA"
    },
    hometown: {
        title: "Hometown: ",
        value: "Concord, CA",
        hidden: false,
    },
    workIn: {
        title: "Works In: ",
        value: "Biotech",
        hidden: false
    },
    interest: {
        title: "Interest: ",
        value: "Programming, Sciences, Working Out, Doggos",
        hidden: false
    },
    quote: {
        title: "Quote: ",
        value: "Real Gs move in silence, like lasanga",
        hidden: false,
    },
}

export default function BasicInfo(){
    const classes = useStyles();

    // local state
    const [openEditProfileDialog, setOpen] = React.useState(false);

    // logic for handling edit profile modal
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // redux state & dispatch
    const userData = useSelector(state => state.user.self);

    // logic for displaying traits
    let basicInfo = null
    if(userData){
        let even = true;
        const traitLen = Object.keys(userData).length;
        const oddNumberTraits = Object.keys(userData).length % 2 !== 0;
        let count = 0;
        basicInfo = Object.values(userData).map(trait => {
            if(!trait.hidden){
                count++;
                if(trait.value.length >= 20){
                    if(even){
                        return (
                            <Grid item xs={12} className={classes.traitBox} key={trait.title}>
                                <Typography color='textPrimary' align="left">{trait.title}</Typography>
                                <Typography align="left">{trait.value}</Typography>
                            </Grid>
                        )
                    } else {
                        even = !even;
                        return (
                            <Grid item xs={12} lg={count === traitLen && oddNumberTraits ? 12 : 6} className={classes.traitBox} key={trait.title}>
                                <Typography color='textPrimary' align="left">{trait.title}</Typography>
                                <Typography align="left">{trait.value}</Typography>
                            </Grid>
                        )
                    }
    
                } else {
                    even = !even;
                    return (
                        <Grid item xs={12} lg={count === traitLen && oddNumberTraits ? 12 : 6} className={classes.traitBox} key={trait.title}>
                            <Typography color='textPrimary' align="left">{trait.title}</Typography>
                            <Typography align="left">{trait.value}</Typography>
                        </Grid>
                    )
                }
            }
        })
    }

    return(
        <div>
            <Paper className={classes.paper}>
                <Grid container item xs={12} justify="center">
                    <Avatar alt="Carlo Bilbao" src={image1} className={classes.large} />
                </Grid>
                <br/>
                <Grid container item xs={12} justify="center">
                    {basicInfo}
                </Grid>
                <Grid container item xs={12} justify="flex-end">
                    <Button onClick={handleClickOpen} color="primary">Edit</Button>
                </Grid>
            </Paper>
            <EditProfileDialog 
                handleClose={handleClose} 
                openEditProfileDialog={openEditProfileDialog}/>
        </div>

    )
}