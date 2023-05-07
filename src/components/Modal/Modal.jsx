import { Component } from 'react';
import css from './Modal.module.css'

export class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.handlePressESC);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressESC);
  }

  handlePressESC = e => {
    if (e.code === 'Escape') this.props.closeModal();
  };

  render() {
    const { closeModal, choosedPicture } = this.props;
    return (
      <div
        className={css.Overlay} onClick={closeModal}
      >
        <div>
         <img className={css.modalPic} src={choosedPicture} alt=''/>
        </div>
      </div>
    );
  }
}

