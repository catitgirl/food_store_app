import ReactDOM from 'react-dom';
import classes from './Modal.module.css'

const Backdrop = ({ onCartHide }) => {
  return (
    <div className={classes.backdrop} onClick={onCartHide} />
  )
};
const ModalElement = ({ children }) => <div className={classes.modal}>{children}</div>

const Modal = ({ children, onCartHide }) => {
  const portalElement = document.querySelector('#overlays');

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onCartHide={onCartHide} />, portalElement)}
      {ReactDOM.createPortal(<ModalElement>{children}</ModalElement>, portalElement)}
    </>
  )
};

export default Modal;