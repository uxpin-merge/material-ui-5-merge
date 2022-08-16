import * as React from "react";
import Draggable from "../Draggable";
import Button from "../../Button/Button";

export default (
  <Draggable 
    uxpId="Draggable-1" 
    >
      <Button variant="contained" startIcon="drag_indicator" uxpId="Button-1">Drag Me</Button>
  </Draggable>
);