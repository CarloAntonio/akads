
// libraries
import React from 'react';
import { useSelector } from 'react-redux';

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

// custom components
import EditProfileDialog from '../../components/popups/EditProfileDialog';
import PicUploadDialog from '../../components/popups/PicUploadDialog';

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

export default function BasicInfo(){
    const classes = useStyles();

    // local state
    const [openEditProfileDialog, setOpenEditProfileDialog] = React.useState(false);
    const [openPicUploaderDialog, setOpenPicUploaderDialog] = React.useState(false);

    // logic for handling edit profile modal
    const handleOpenEditProfileDialog = () => {
        setOpenEditProfileDialog(true);
    };
    const handleCloseEditProfileDialog = () => {
        setOpenEditProfileDialog(false);
    };

    const handleOpenPicUploaderDialog = () => {
        setOpenPicUploaderDialog(true);
    };

    const handleClosePicUploaderDialog = (value) => {
        setOpenPicUploaderDialog(false);
    };

    // redux state & dispatch
    const userData = useSelector(state => state.user.self);

    // logic for displaying traits
    let basicInfo = []
    if(userData){
        const oddNumberTraits = Object.keys(userData).length % 2 === 0;

        if(userData.name && userData.name.title){
            basicInfo.push(
                <Grid item xs={12} lg={6} className={classes.traitBox} key={userData.name.title}>
                    <Typography color='textPrimary' align="left">{userData.name.title}</Typography>
                    <Typography align="left">{userData.name.value}</Typography>
                </Grid>
            )
        }

        if(userData.hometown && userData.hometown.title){
            basicInfo.push(
                <Grid item xs={12} lg={6} className={classes.traitBox} key={userData.hometown.title}>
                    <Typography color='textPrimary' align="left">{userData.hometown.title}</Typography>
                    <Typography align="left">{userData.hometown.value}</Typography>
                </Grid>
            )
        }

        if(userData.livesIn && userData.livesIn.title){
            basicInfo.push(
                <Grid item xs={12} lg={6} className={classes.traitBox} key={userData.livesIn.title}>
                    <Typography color='textPrimary' align="left">{userData.livesIn.title}</Typography>
                    <Typography align="left">{userData.livesIn.value}</Typography>
                </Grid>
            )
        }

        if(userData.worksIn && userData.worksIn.title){
            basicInfo.push(
                <Grid item xs={12} lg={6} className={classes.traitBox} key={userData.worksIn.title}>
                    <Typography color='textPrimary' align="left">{userData.worksIn.title}</Typography>
                    <Typography align="left">{userData.worksIn.value}</Typography>
                </Grid>
            )
        }

        if(userData.interest && userData.interest.title){
            basicInfo.push(
                <Grid item xs={12} lg={6} className={classes.traitBox} key={userData.interest.title}>
                    <Typography color='textPrimary' align="left">{userData.interest.title}</Typography>
                    <Typography align="left">{userData.interest.value}</Typography>
                </Grid>
            )
        }

        if(userData.quote && userData.quote.title){
            basicInfo.push(
                <Grid item xs={12} lg={6} className={classes.traitBox} key={userData.quote.title}>
                    <Typography color='textPrimary' align="left">{userData.quote.title}</Typography>
                    <Typography align="left">{userData.quote.value}</Typography>
                </Grid>
            )
        }

        // filler grid item to keep row even
        if(oddNumberTraits){
            basicInfo.push(
                <Grid item xs={12} lg={6} className={classes.traitBox} key={1234}>
                </Grid>
            )
        }
    }

    return(
        <div>
            <Paper className={classes.paper}>
                <Grid container item xs={12} justify="center">
                    <Badge
                        overlap="circle"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        badgeContent={
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCameraIcon fontSize="large"/>
                            </IconButton>
                        }
                        onClick={handleOpenPicUploaderDialog}
                    >
                        <Avatar alt="Carlo Bilbao" src={image1} className={classes.large}/>
                    </Badge>
                </Grid>
                <br/>
                <Grid container item xs={12} justify="center">
                    {basicInfo}
                </Grid>
                <Grid container item xs={12} justify="flex-end">
                    <Button onClick={handleOpenEditProfileDialog} color="primary">Edit</Button>
                </Grid>
            </Paper>
            <EditProfileDialog 
                handleCloseEditProfileDialog={handleCloseEditProfileDialog} 
                openEditProfileDialog={openEditProfileDialog}/>
            <PicUploadDialog 
                handleClosePicUploaderDialog={handleClosePicUploaderDialog} 
                openPicUploaderDialog={openPicUploaderDialog}/>
        </div>

    )
}