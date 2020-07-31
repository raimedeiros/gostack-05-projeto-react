import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo-github-explorer.svg';

const Dashboard: React.FC = () => {
  return (
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
            src="https://avatars0.githubusercontent.com/u/3196130?s=460&u=aca17d377756c098e2a93e5d122572a0e1c7f323&v=4"
            alt="Rai Medeiros"
          />
          <div>
            <strong>raimedeiros/rep</strong>
            <p>Descrição do repositório</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/3196130?s=460&u=aca17d377756c098e2a93e5d122572a0e1c7f323&v=4"
            alt="Rai Medeiros"
          />
          <div>
            <strong>raimedeiros/rep</strong>
            <p>Descrição do repositório</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/3196130?s=460&u=aca17d377756c098e2a93e5d122572a0e1c7f323&v=4"
            alt="Rai Medeiros"
          />
          <div>
            <strong>raimedeiros/rep</strong>
            <p>Descrição do repositório</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/3196130?s=460&u=aca17d377756c098e2a93e5d122572a0e1c7f323&v=4"
            alt="Rai Medeiros"
          />
          <div>
            <strong>raimedeiros/rep</strong>
            <p>Descrição do repositório</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/3196130?s=460&u=aca17d377756c098e2a93e5d122572a0e1c7f323&v=4"
            alt="Rai Medeiros"
          />
          <div>
            <strong>raimedeiros/rep</strong>
            <p>Descrição do repositório</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
