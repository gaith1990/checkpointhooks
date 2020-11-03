import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './MovieCard.css';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import {Link} from'react-router-dom';


const useStyles = makeStyles({
  root: {
    Width: 200,
  },
  media: {
    height: 140,
  },
});

function MovieCard({title ,posteUrl, rate , id}) {
  const classes = useStyles();
  // className='card'
  return (
    <Card  className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={posteUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
           {description}
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Link to={`/bond/${id}`} >
        <button size="small" color="primary" className='buttonband' >
        Bande-annonce
        </button>
        </Link>
        
        <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Rate</Typography>
        <Rating name="pristine" value={rate} />
      </Box>
      </CardActions>
    </Card>
  );
}
export default MovieCard;