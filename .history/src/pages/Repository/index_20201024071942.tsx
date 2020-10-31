import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import { Header } from './styles';

// import { Container } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <Header>
      <logoImg />
      <h1>Repository:{params.repository}</h1>
    </Header>
  );
};

export default Repository;
