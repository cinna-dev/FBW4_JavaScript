import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { GridList, GridTile } from 'material-ui/GridList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Products = ({ products }) => {
  const classes = makeStyles({
    root: {
      maxWidth: 345
    },
    media: {
      height: 140
    }
  });
  const table = products.map((product, i) => {
    const { name, price, img } = product;
    console.log(img);
    return (
      <GridTile key={i}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              src={img}
              component='img'
              title='Contemplative Reptile'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {name}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {price}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' color='primary'>
              Details
            </Button>
          </CardActions>
        </Card>
      </GridTile>
    );
  });

  return (
    <MuiThemeProvider>
      <GridList cols={3}>{table}</GridList>
    </MuiThemeProvider>
  );
};

export default Products;
