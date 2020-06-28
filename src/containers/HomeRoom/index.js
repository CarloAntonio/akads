import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

// material-ui
import { withStyles } from '@material-ui/styles';
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

// data
import grades from '../../utils/sample-data';

const styles = theme => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
});

class HomeRoom extends Component {

    handleGradeClick = gradeTitle => {
        this.props.history.push(this.props.history.location.pathname + "/" + gradeTitle);
    }

    render() {
        const { classes } = this.props;

        const gradesTitles = Object.keys(grades)
        let gradeCards = [];
        gradesTitles.forEach(gradeTitle => {
            gradeCards.push(
                <Grid item xs={3} key={gradeTitle} >
                    <Card className={classes.root} onClick={() => this.handleGradeClick(gradeTitle)}>
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
}

HomeRoom.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  };
};

export default withStyles(styles)(connect(mapStateToProps)(HomeRoom));
    