import React, { useContext } from 'react';
import styled from 'styled-components';
import { ModalContext } from '../context/ModalContextProvider';

export const Modal: React.FC = () => {
  const { modalContent, setModalContent } = useContext(ModalContext);
  const { content } = modalContent;
  return (
    <StyledModalWrapper>
      <StyledModal>
        <img
          className="modal_close_btn"
          src="/images/icons/close_btn.png"
          alt="닫기버튼 아이콘"
          onClick={() => {
            setModalContent({ content: null });
          }}
          onKeyDown={() => {}}
        />
        {content}
      </StyledModal>
    </StyledModalWrapper>
  );
};

// const StyledModalHeader = styled.div`
//   width: 100%;
//   position: relative;

//   font-weight: bold;
//   font-size: 14px;
//   height: 40px;

//   img {
//     position: absolute;
//     right: 6px;
//     top: 6px;
//     cursor: pointer;
//     /* font-size: 18px;
//     line-height: 14px;
//     position: absolute;
//     right: 10px; */
//     border: none;
//     vertical-align: middle;
//   }
// `;

const StyledModalWrapper = styled.div`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  overflow: hidden;
  z-index: 1;
`;

const StyledModal = styled.div`
  position: relative;
  min-width: 300px;
  background: white;
  border: 1px solid #e0e0e0;
  padding: 16px;
  border-radius: 5px;
  margin-top: -30px;
  overflow: auto;
  max-height: 70%;
  white-space: pre-wrap;
  max-width: 800px;

  .modal_close_btn {
    position: absolute;
    right: 8px;
    top: 8px;
    cursor: pointer;
    /* font-size: 18px;
    line-height: 14px;
    position: absolute;
    right: 10px; */
    border: none;
    vertical-align: middle;
  }
`;
