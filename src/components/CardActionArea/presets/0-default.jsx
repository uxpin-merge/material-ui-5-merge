import React from 'react';
import CardActionArea from '../CardActionArea';
import CardContent from '../../CardContent/CardContent';
import Typography from '../../Typography/Typography';

export default (
  <CardActionArea uxpId='Card-Action-Area-1'>
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
);