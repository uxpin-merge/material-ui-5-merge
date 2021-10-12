import * as React from 'react';
import Snackbar from '../Snackbar';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';
import IconButton from '../../IconButton/IconButton';

const action = (
    <Button uxpId='Button-1' color="primary" size="small">
      UNDO
    </Button>
);

export default (
  <Snackbar 
    uxpId='Snackbar-1' 
    open={true}
    autoHideDuration={6000}
    onClose={() => {}}
    message="Note archived"
    action={action}
  />
);