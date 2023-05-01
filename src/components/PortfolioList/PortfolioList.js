import { Container, Section } from 'styles/common.styled';
import portfolio from '../../static/portfolio.json';

import {
  List,
  Box,
  Title,
  Description,
  Link,
  Wrapper,
  Tech,
} from './PortfolioList.styled.js';

export const PortfolioList = () => {
  return (
    <Section>
      <Container>
        <List>
          {portfolio.map(item => {
            return (
              <li>
                <Box>
                  <Title>{item.name}</Title>
                  <Description>{item.description}</Description>

                  <Wrapper>
                    <Link href={item.gitHub} target="_blank" rel="noreferrer">
                      GitHub link
                    </Link>
                    <Link href={item.link} target="_blank" rel="noreferrer">
                      View the project
                    </Link>
                  </Wrapper>
                  <Tech>{item.tech}</Tech>
                </Box>
              </li>
            );
          })}
        </List>
      </Container>
    </Section>
  );
};
