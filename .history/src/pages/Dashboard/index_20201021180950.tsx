import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>
    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/12487554?s=400&v=4"
          alt="Ramon Marques"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Desafio de final da unidade 2 do rocktseat Gostack</p>
        </div>
      </a>
    </Repositories>
  </>
);

export default Dashboard;
