import { Container, Section } from 'styles/common.styled';
import {
  Wrapper,
  WrapperHero,
  Text,
  List,
  Button,
  Image,
  TextAccent,
  LinkCv,
  LinkContacts,
} from './Main.styled';

import devWeb from '../../assets/images/web-developer.svg';

export const Main = () => {
  return (
    <Section>
      <Container>
        <WrapperHero>
          <Wrapper>
            <h1>Hello there!</h1>
            <Text>
              I'm Anna, <TextAccent>Front-End Developer</TextAccent>
            </Text>
            <List>
              <li>
                <Button>
                  <LinkContacts to="/contact-me">Contact me</LinkContacts>
                </Button>
              </li>
              <li>
                <Button>
                  <LinkCv href="" target="_blank">
                    My CV
                  </LinkCv>
                </Button>
              </li>
            </List>
          </Wrapper>
          <Image src={devWeb} alt="Developer" />
        </WrapperHero>
      </Container>
    </Section>
  );
};
