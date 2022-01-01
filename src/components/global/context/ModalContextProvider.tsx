import React, { createContext, useState } from 'react';
import { Modal } from '../globalModule/Modal';
import { ModalContent } from '../model/global.common.model';

type ModalContextType = {
  modalContent: ModalContent;
  setModalContent: (modalContent: ModalContent) => void;
};

const defaultValue: ModalContextType = {
  modalContent: {
    content: null,
  },
  setModalContent: (modalContent: ModalContent) => {},
};

export const ModalContext = createContext(defaultValue);

export const ModalContextProvider: React.FC = ({ children }) => {
  const [modalContent, setModalContent] = useState<ModalContent>({
    content: null,
  });

  return (
    <ModalContext.Provider value={{ modalContent, setModalContent }}>
      {modalContent.content && <Modal />}
      {children}
    </ModalContext.Provider>
  );
};
