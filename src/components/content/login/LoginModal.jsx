import React from 'react';
import ModalContent from '../../common/Modal/ModalContent';
import LoginForm from './LoginForm';
import ModalHeader from '../../common/Modal/ModalHeader';
import Modal from '../../common/Modal/Modal';

const LoginModal = ({ closeModal }) => {
  return (
    <>
      <Modal>
        <ModalHeader title="Login form" closeModal={closeModal} />
        <ModalContent>
          <LoginForm />
        </ModalContent>
        <p className="h-[200px]">hhhhhhh</p>
      </Modal>
    </>
  );
};

export default LoginModal;
