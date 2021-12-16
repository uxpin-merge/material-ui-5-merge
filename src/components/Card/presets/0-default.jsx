import React from 'react';
import Card from '../Card';
import CardActions from '../../CardActions/CardActions';
import CardActionArea from '../../CardActionArea/CardActionArea';
import CardContent from '../../CardContent/CardContent';
import CardHeader from '../../CardHeader/CardHeader';
import CardMedia from '../../CardMedia/CardMedia';
import Button from '../../Button/Button';
import Avatar from '../../Avatar/Avatar';
import Icon from '../../Icon/Icon';
import IconButton from '../../IconButton/IconButton';
import Typography from '../../Typography/Typography';

export default (
  <Card uxpId='Card-1' sx={{ maxWidth: 345 }}>
    <CardHeader
      uxpId='Card-Header-1'
      avatar={
        <Avatar uxpId="Avatar-1" sx={{ bgcolor: 'blue' }}>
          R
        </Avatar>
      }
      action={
        <IconButton uxpId="Icon-Button-1" ariaLabel="add accessibility text" >
          <Icon uxpId="Icon-1">home</Icon>
        </IconButton>
      }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardMedia 
      uxpId='Card-Media-1' 
      component="img"
      height="140"
      image="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
      alt="Man taking picture" 
    />
    <CardActionArea uxpId='Card-Content-Area-1'>
      <CardContent uxpId='Card-Content-1' component='div'>
        <Typography uxpId="Typograhpy-1" gutterBottom variant="h4" component='div'>
          Lizard
        </Typography>
        <Typography uxpId='Typography-2' variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions uxpId='Card-Action-1'>
      <Button uxpId='Button-1' size="small" color="primary">
        Share
      </Button>
    </CardActions>
  </Card>
);