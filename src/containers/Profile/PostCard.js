
// libraries
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

// assets
import image1 from '../../assets/images/profile.jpg';

const useStyles = makeStyles((theme) => ({
    card: {
      marginTop: "8px",
      width: "100%",
    },
  }));

export default function PostCard(){
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" src={image1} className={classes.avatar}/>
                }
                title="Shrimp and Chorizo Paella Shrimp and Chorizo Paella Shrimp and Chorizo Paella Shrimp and Chorizo Paella Shrimp and Chorizo Paella Shrimp and Chorizo Paella Shrimp and Chorizo Paella Shrimp and Chorizo Paella Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
        </Card>
    )
}