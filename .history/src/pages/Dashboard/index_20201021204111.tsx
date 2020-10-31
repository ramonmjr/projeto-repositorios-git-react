import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  const [NewRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    const response = await api.get(`/repos/${NewRepo}`);
    console.log(response);
  }
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form onSubmit={handleAddRepository}>
        <input
          value={NewRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
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
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
