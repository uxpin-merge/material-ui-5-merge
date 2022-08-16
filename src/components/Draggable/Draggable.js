import React from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';


function DraggableComponent(props) {

  return (
    <div className="container">
    <Draggable disabled={false}>
        {props.children}
    </Draggable>
  </div>
  )
}

DraggableComponent.propTypes ={
 children: PropTypes.node,
 // If true, will not call any drag handlers.
disabled: PropTypes.bool,
}

export default DraggableComponent;