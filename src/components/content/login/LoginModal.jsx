import React from 'react';
import LoginForm from './LoginForm';
import ModalContent from '../../common/Modal/ModalContent';
import ModalHeader from '../../common/Modal/ModalHeader';

import { Transition } from 'react-transition-group';

const duration = 800;

const defaultStyle = {
  transition: `all ${duration}ms ease-in-out`,
  position: 'fixed',
  top: -500,
  right: 0,
  zIndex: 50,
};

const transitionStyles = {
  entering: { top: -500 },
  entered: { top: 100 },
  exiting: { top: 100 },
  exited: { top: -500 },
};

const LoginModal = ({ mode, closeModal }) => {
  return (
    <Transition in={mode} timeout={30}>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <div
            className={`fixed left-0 right-0 mx-auto z-50 overflow-y-auto md:w-full max-w-md md:h-auto shadow rounded-lg bg-white opacity-100 py-5${
              mode ? 'opacity-1' : 'opacity-0'
            }`}
          >
            <ModalHeader title="Login form" closeModal={closeModal} />
            <ModalContent>
              <LoginForm />
            </ModalContent>
          </div>
        </div>
      )}
    </Transition>
  );
};

export default LoginModal;
