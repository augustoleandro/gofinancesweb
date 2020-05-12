import React from 'react';

import { NavLink } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <NavLink
          activeStyle={{
            color: '#ffffff',
            fontWeight: 'bold',
            borderBottomWidth: '2px',
            borderBottomStyle: 'solid',
            borderBottomColor: '#FF872C',
            paddingBottom: '4px',
          }}
          exact
          to="/"
        >
          Listagem
        </NavLink>
        <NavLink
          activeStyle={{
            color: '#ffffff',
            fontWeight: 'bold',
            borderBottomWidth: '2px',
            borderBottomStyle: 'solid',
            borderBottomColor: '#FF872C',
            paddingBottom: '4px',
          }}
          to="/import"
        >
          Importar
        </NavLink>
      </nav>
    </header>
  </Container>
);

export default Header;
