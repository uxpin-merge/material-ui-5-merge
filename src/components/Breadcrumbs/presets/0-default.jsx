import React from 'react';
import Breadcrumbs from '../Breadcrumbs';
import Typography from '../../Typography/Typography';
import Link from '../../Link/Link';


export default (
    <div role="presentation" uxpId='div-1'>
      <Breadcrumbs aria-label="breadcrumb" uxpId='breadcrumb-1'>
        <Link underline="hover" color="inherit" href="/" uxpId='link-1'>
          Merge1
        </Link>
        <Link
          uxpId='link-2'  
          underline="hover"
          color="inherit"
          href="/getting-started/installation/"
        >
          Merge2
        </Link>
        <Typography color="text.primary" uxpId='link-3'>Merge3</Typography>
      </Breadcrumbs>
    </div>
)