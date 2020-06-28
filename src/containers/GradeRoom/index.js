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

// sample data
import grades from '../../utils/sample-data';

const styles = theme => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
});

class GradeRoom extends Component {

    handleSubjectClick = subjectName => {
        this.props.history.push(this.props.history.location.pathname + "/" + subjectName);
    }

    render() {
        const { classes } = this.props;

        const subjects = grades[this.props.match.params.grade].subjects;
        const subjectNames = Object.keys(subjects);
        const subjectCards = [];
        subjectNames.forEach(subjectName => {
            subjectCards.push(
                <Grid item xs={3} key={subjectName} >
                    <Card className={classes.root} onClick={() => this.handleSubjectClick(subjectName)}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"/>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {subjects[subjectName].title.charAt(0).toUpperCase() + subjects[subjectName].title.slice(1)}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            )
        })

        return (
            <header className="App-header">
                <Grid container spacing={3} justify="center" alignItems="center">
                    {subjectCards}
                </Grid>
            </header>
        );
    }
}

GradeRoom.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GradeRoom);