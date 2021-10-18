import * as React from "react";
import Alert from '../Alert';
import AlertTitle from '../../AlertTitle/AlertTitle';
import Icon from '../../Icon/Icon';
import IconButton from '../../IconButton/IconButton';

export default (
  <Alert
    uxpId='Alert-1'
    onClose={() => {}}
    // action={
    //   <IconButton
    //     uxpId='Icon-Button-1'
    //     aria-label="close"
    //     color='inherit'
    //     size='small'
    //   >
    //     <Icon uxpId='Icon-1'>home</Icon>
    //   </IconButton>
    // }
    sx={{ mb: 2 }}
  >
    {/* <AlertTitle uxpId='Alert-Title-1'>SUCCESS TITLE</AlertTitle> */}
    Close me!
  </Alert>
);