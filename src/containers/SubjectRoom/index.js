import React, { Component } from 'react';
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
import { lessons } from '../../utils/sample-data';

const styles = theme => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
});

class SubjectRoom extends Component {

    handleLessonClick = lessonId => {
        this.props.history.push(this.props.history.location.pathname + "/" + lessonId);
    }

    render() {
        const { classes } = this.props;

        const lessonCards = [];
        lessons.forEach(lesson => {
            lessonCards.push(
                <Grid item xs={3} key={lesson.title} >
                    <Card className={classes.root} onClick={() => this.handleLessonClick(lesson.id)}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"/>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {lesson.title.charAt(0).toUpperCase() + lesson.title.slice(1)}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Start Lesson
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            )
        })

        return (
            <header className="App-header">
                <Grid container spacing={3} justify="center" alignItems="center">
                    {lessonCards}
                </Grid>
            </header>
        );
    }
}

SubjectRoom.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SubjectRoom);