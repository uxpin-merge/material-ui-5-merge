import * as React from 'react';
import Accordion from '../Accordion';
import AccordionDetails from '../../AccordionDetails/AccordionDetails';
import AccordionSummary from '../../AccordionSummary/AccordionSummary';
import Typography from '../../Typography/Typography';

export default (
  <Accordion uxpId='Accordian-1'>
    <AccordionSummary uxpId='Accordian-Summary-1' expandedIcon='expand_more'>
      <Typography uxpId='Typography-1'>Accordion 1</Typography>
    </AccordionSummary>
    <AccordionDetails uxpId='Accordian-Details-1'>
      <Typography uxpId='Typography-1-2'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>
    </AccordionDetails>
  </Accordion>    
  )