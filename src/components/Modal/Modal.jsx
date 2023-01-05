import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRootRef = document.getElementById('modal-root');

const Modal = ({ url, alt, toggleModal }) => {
  // useEffect(() => {
  //   document.addEventListener('keydown', handleKeyDown);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // const handleKeyDown = e => {
  //   if (e.code === 'Escape') {
  //     toggleModal();
  //   }
  // };

  const handleClick = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={handleClick}>
      <div className="Modal">
        <img src={url} alt={alt} />
      </div>
    </div>,
    modalRootRef
  );
};
export default Modal;
