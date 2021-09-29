import * as React from "react";
import Button from "../../Button/Button";
import Stack from '../Stack';

export default (
  <Stack
    uxpId="stack-1"
    direction="row"
    spacing="2"
  >
    <Button 
      uxpId="Button-1" 
      color="primary"
      startIcon="home"
      endIcon="star"
      size="medium" 
      variant="contained" 
    >
      Button 1
    </Button>
    <Button 
      uxpId="Button-2" 
      color="primary"
      startIcon="home"
      endIcon="star"
      size="medium" 
      variant="contained" 
    >
      Button 2
    </Button>
  </Stack>
);