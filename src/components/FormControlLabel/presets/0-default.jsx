import React from "react";
import Checkbox from "../../Checkbox/Checkbox";
import FormControlLabel from "../../FormControlLabel/FormControlLabel";

export default (
  <FormControlLabel
    uxpId="formcontrollabel-1"
    control={<Checkbox uxpId="checkbox-1" defaultChecked value='gilad' />}
    label="I'm a label"
  />
);