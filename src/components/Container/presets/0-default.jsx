import React from 'react';
import Container from '../Container';
import Card from '../../Card/Card';
import CardActions from '../../CardActions/CardActions';
import CardActionArea from '../../CardActionArea/CardActionArea';
import CardContent from '../../CardContent/CardContent';
import CardHeader from '../../CardHeader/CardHeader';
import CardMedia from '../../CardMedia/CardMedia';
import Button from '../../Button/Button';
import Typography from '../../Typography/Typography';

export default (
  <Container uxpId='Container-1'>
    <Card uxpId='Card-1'>
      <CardHeader
        uxpId='Card-Header-1'
        avatar="R"
        color="grey"
        action="add"
        ariaLabel="add"
        title="Design Insights"
        subheader="December 6, 2021"
      />
      <CardMedia 
        uxpId='Card-Media-1' 
        component="img"
        height="140"
        image="https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="Cool art" 
      />
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
      <CardActions uxpId='Card-Action-1'>
        <Button uxpId='Button-1' size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  </Container>
);