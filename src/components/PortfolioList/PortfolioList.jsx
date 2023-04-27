import { Container, Section } from 'styles/common.styled';
import portfolio from '../../static/portfolio.json';

import { List, Box } from './PortfolioList.styled.js';

export const PortfolioList = () => {
  return (
    <Section>
      <Container>
        <List>
          {portfolio.map(item => {
            return (
              <li>
                <Box>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <button type="button">
                    <a href={item.link} target="_blank" rel="noreferrer">
                      View the project
                    </a>
                  </button>
                </Box>
              </li>
            );
          })}
        </List>
      </Container>
    </Section>
  );
};
