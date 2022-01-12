import React from 'react';
import CardActionArea from '../CardActionArea';
import CardContent from '../../CardContent/CardContent';
import Typography from '../../Typography/Typography';

export default (
  <CardActionArea uxpId='Card-Action-Area-1'>
    <CardContent uxpId='Card-Content-1' component='div'>
      <Typography uxpId="Typograhpy-1" gutterBottom variant="h4" component='div'>
        Trends
      </Typography>
      <Typography uxpId='Typography-2' variant="body2" color="text.secondary">
        Learn about the recent top design trends and get inspired. See what you can experiment with in your future designs.
      </Typography>
    </CardContent>
  </CardActionArea>
);