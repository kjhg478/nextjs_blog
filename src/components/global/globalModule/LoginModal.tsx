import React, { useEffect } from 'react';
import styled from 'styled-components';

interface FinalSubmitProps {
  setIsOpened: (e: boolean) => void;
  mainText: string;
  subText?: string;
  thirdText?: string;
}

export const LoginModal: React.FC<FinalSubmitProps> = ({
  setIsOpened,
  mainText,
}) => {
  const onClick = () => {
    setIsOpened(false);
  };
  useEffect(() => {
    document.body.style.cssText = ` 
    overflow: hidden;
    width: 100%;
    `;
    return () => {
      document.body.style.cssText = `'';`;
    };
  }, []);

  return (
    <StyledModalWrapper className="transaction_wrapper">
      <PopupContentWrapper className="content_wrapper">
        <BoxWrapper>
          <LoginBox>
            <LoginTop>
              <h1 className="contract_text">{mainText}</h1>
              <LoginImage onClick={onClick}>
                <img
                  src="/images/icons/close_btn.png"
                  alt="testImage"
                  width="24px"
                  height="24px"
                  object-fit="cover"
                />
              </LoginImage>
            </LoginTop>
            <LoginForm>
              <LoginInput />
              <LoginButton>로그인</LoginButton>
            </LoginForm>
          </LoginBox>
        </BoxWrapper>
      </PopupContentWrapper>
    </StyledModalWrapper>
  );
};

const LoginTop = styled.div`
  display: flex;
  place-items: center;
`;

const LoginImage = styled.div`
  margin-left: auto;
  cursor: pointer;
`;

const LoginBox = styled.div`
  margin: 20px;
`;

const LoginInput = styled.input.attrs({
  type: 'text',
  placeholder: '이메일 입력',
})`
  flex: 1 1 0%;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  padding: 1rem;
  font-size: 1rem;
  border-top: 1px solid rgb(222, 226, 230);
  border-bottom: 1px solid rgb(222, 226, 230);
  border-left: 1px solid rgb(222, 226, 230);
  border-image: initial;
  border-right: 1px solid rgb(222, 226, 230);
`;

const LoginForm = styled.form`
  width: 100%;
  display: flex;
  height: 3rem;
`;

const LoginButton = styled.button`
  background: rgb(18, 184, 134);
  color: white;
  font-size: 1rem;
  font-weight: bold;
  outline: none;
  border: none;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  width: 6rem;
  word-break: keep-all;
  cursor: pointer;
`;
const StyledModalWrapper = styled.div`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;

const PopupContentWrapper = styled.div`
  width: calc(486px - 1%);
  height: 29vh;
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  right: -486px;
  transition: right 0.5s;
`;

const BoxWrapper = styled.div`
  border-radius: 10px;
  /* width: calc(100% - 66px); */
  height: 100%;
  flex: 1;
  height: 100%;
  background: #fff;
  overflow-y: auto;
  text-align: left;
  .contract_text {
    font-size: 1.3rem;
    margin-left: 5px;
  }
`;
