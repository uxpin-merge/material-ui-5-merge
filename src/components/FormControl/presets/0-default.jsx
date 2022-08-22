import React from "react";
import FormControl from "../FormControl";
import Select from "../../Select/Select";
import MenuItem from "../../MenuItem/MenuItem";
import InputLabel from "../../InputLabel/InputLabel";
import FormHelperText from "../../FormHelperText/FormHelperText";

export default (
  <FormControl uxpId="1" fullWidth>
    <InputLabel uxpId="2">
      Age
    </InputLabel>
    <Select uxpId="3">
      <MenuItem value="" uxpId="3.1.1">
        None
      </MenuItem>
      <MenuItem value={10} uxpId="3.1.2">
        Ten
      </MenuItem>
      <MenuItem value={20} uxpId="3.1.3">
        Twenty
      </MenuItem>
      <MenuItem value={30} uxpId="3.1.4">
        Thirty
      </MenuItem>
    </Select>
    <FormHelperText uxpId="3.2">Some important helper text</FormHelperText>
  </FormControl>
);