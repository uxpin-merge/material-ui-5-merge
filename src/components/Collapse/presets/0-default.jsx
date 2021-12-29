import React from "react";
import Collapse from "../Collapse";
import Typography from "../../Typography/Typography";

export default (
  <Collapse uxpId="collapse-1" timeout="auto" in={true}>
    <Typography uxpId="typography-1" paragraph>Payment method:</Typography>
    <Typography uxpId="typography-2" paragraph>
      Before proceeding to payment, make sure you can pay by mobile or credit card.
    </Typography>
  </Collapse>
);