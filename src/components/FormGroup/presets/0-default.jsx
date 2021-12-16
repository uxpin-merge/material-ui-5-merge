import * as React from "react";
import Checkbox from "../../Checkbox/Checkbox";
import FormGroup from "../FormGroup";
import FormControlLabel from "../../FormControlLabel/FormControlLabel";
import FormControl from "../../FormControl/FormControl";
import FormLabel from "../../FormLabel/FormLabel";

export default (
  <FormControl component="fieldset" uxpId="1">
    <FormLabel component="legend" uxpId="2">Assign responsibility</FormLabel>
    <FormGroup uxpId="3">
      <FormControlLabel
        uxpId="4"
        control={<Checkbox uxpId="5" value="gilad" />}
        label="Gilad Gray"
      />
      <FormControlLabel
        uxpId="6"
        control={<Checkbox uxpId="7" value="jason" />}
        label="Jason Killian"
      />
      <FormControlLabel
        uxpId="8"
        control={<Checkbox uxpId="9" value="antoine" />}
        label="Antoine Llorca"
      />
    </FormGroup>
  </FormControl>
);
