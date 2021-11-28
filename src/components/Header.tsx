import React from 'react'
import { Container } from '../styles/Container';
import HeaderElement from '../styles/HeaderElement';
import { Logo } from '../styles/TextElements';
import AppLink from './AppLink';

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
    return (
        <HeaderElement>
          <Container>
            <Logo>
                <AppLink href="/" label="Next.js" />
            </Logo>
            <nav>
                <AppLink href="/about" label="About" />
                <AppLink href="/contact" label="Contact" />
            </nav>
          </Container>
        </HeaderElement>
    
    )
}

export default Header;