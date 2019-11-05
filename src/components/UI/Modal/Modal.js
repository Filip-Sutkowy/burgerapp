import React from 'react';

import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

export const Modal = React.memo(props => {

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.show !== this.props.show || this.props.children !== nextProps.children;
  // }


  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(100vh)',
          opacity: props.show ? '1' : '0'
        }}>
        {props.children}
      </div>
    </Aux>
  );
}, (prevProps, nextProps) => nextProps.show === prevProps.show && prevProps.children === nextProps.children);

export default React.memo(Modal, (prevProps, nextProps) => nextProps.show === prevProps.show && prevProps.children === nextProps.children);