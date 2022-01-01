import React, { useState } from 'react';
import { Container } from '../styles/Container';
import HeaderElement from '../styles/HeaderElement';
import { Logo } from '../styles/TextElements';
import AppLink from './AppLink';
import styled from 'styled-components';
import { LoginModal } from './global/globalModule/LoginModal';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  return (
    <>
      <HeaderElement>
        <Container>
          <Logo>
            <AppLink href="/" label="Next.js" />
          </Logo>
          <nav>
            <AppLink href="/about" label="About" />
            <AppLink href="/contact" label="Contact" />
            <Login onClick={() => setIsOpened(true)}>로그인</Login>
          </nav>
        </Container>
      </HeaderElement>
      {isOpened && (
        <LoginModal
          setIsOpened={setIsOpened}
          mainText="로그인"
          subText="이메일로 로그인"
        />
      )}
    </>
  );
};

export default Header;

const Login = styled.button`
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  border-radius: 1rem;
  border: none;
  outline: none;
  font-weight: bold;
  word-break: keep-all;
  background: rgb(52, 58, 64);
  color: white;
  transition: all 0.125s ease-in 0s;
  cursor: pointer;
`;
