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
            <AppLink href="/login" label="Login"></AppLink>
          </nav>
        </Container>
      </HeaderElement>
    </>
  );
};

export default Header;

const Login = styled.button`
  padding: 0 0.5em;
  font-size: 1rem;
  border: none;
  outline: none;
  word-break: keep-all;
  color: #293241;
  transition: all 0.125s ease-in 0s;
  cursor: pointer;
`;
