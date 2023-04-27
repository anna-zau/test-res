import { Container, Section, Text } from 'styles/common.styled';

import aboutMe from '../../assets/icons/undraw_experience_design_re_dmqq.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import telegram from '../../assets/icons/telegram.svg';
import mail from '../../assets/icons/mail.svg';

import { Wrapper, Box, List, Item, Link } from './MyInfo.styled';
export const MyInfo = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Box>
            <h1>About me</h1>
            <Text>
              I'm Anna Mattveys, Junior Full-Stack Developer, I finished course
              Fullstack developer at GoIT school. I like to develop interesting and modern
              applications, websites. 
            </Text>
            <Text>
              Currenlty I'm looking for a job to gain experience. My main
              motivators in work are improving current skills, achieving new
              knowledge and working for result.
            </Text>
            <Text>Feel free to contact me:</Text>
            <List>
              <Item>
                <img src={mail} alt="mail" width={25} />

                <Link href="mailto:annyaren@gmail.com">annyaren@gmail.com</Link>
              </Item>
              <Item>
                <img src={telegram} alt="Telegram" width={25} />

                <Link
                  href="https://t.me/anna_zau"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram
                </Link>
              </Item>
              <Item>
                <img src={linkedin} alt="LinkedIn" width={25} />

                <Link
                  href="https://www.linkedin.com/in/annazauholnikova/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>
              </Item>
            </List>
          </Box>
          <img src={aboutMe} alt="About_me" width={600} />
        </Wrapper>
      </Container>
    </Section>
  );
};
