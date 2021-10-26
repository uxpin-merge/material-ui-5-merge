import * as React from "react";
import Button from "../../Button/Button";
import Stack from '../Stack';

export default (
  <Stack uxpId="stack-1" direction="row" spacing={2}>
    <Button variant="outlined" uxpId="button-1">
      Button 1
    </Button>
    <Button variant="outlined" uxpId="button-2">
      Button 2
    </Button>
    <Button variant="outlined" uxpId="button-3">
      Button 3
    </Button>
  </Stack>
);