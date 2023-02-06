import { Container, Section } from 'styles/common.styled';
import { BsPatchCheck } from 'react-icons/bs';
import softSkills from '../../static/softSkills.json';

import tech from '../../assets/icons/tech.svg';
import soft from '../../assets/icons/soft-skills.svg';
import html from '../../assets/icons/html-icon.svg';
import css from '../../assets/icons/css-icon.svg';
import sass from '../../assets/icons/sass-icon.svg';
import javaScript from '../../assets/icons/javascript-icon.svg';
import react from '../../assets/icons/react-js-icon.svg';
import redux from '../../assets/icons/redux-icon.svg';

import { Title, List, Item, Text, Wrapper } from './SkillsInfo.styled';

export const SkillsInfo = () => {
  return (
    <Section>
      <Container>
        <Title>Tech skills</Title>
        <Wrapper>
          <img src={tech} alt="Tech-skills" width={350} height={350} />
          <List>
            <Item>
              <img src={html} alt="HTML 5" width={50} height={50} />
              <Text>HTML</Text>
            </Item>
            <Item>
              <img src={css} alt="CSS 3" width={50} height={50} />
              <Text>CSS</Text>
            </Item>
            <Item>
              <img src={sass} alt="SASS" width={50} height={50} />
              <Text>SASS</Text>
            </Item>
            <Item>
              <img src={javaScript} alt="JavaScript" width={50} height={50} />
              <Text>JavaScript</Text>
            </Item>
            <Item>
              <img src={react} alt="React-JS" width={50} height={50} />
              <Text>React-JS</Text>
            </Item>
            <Item>
              <div>
                <img src={redux} alt="Redux" width={50} height={50} />
                <Text>Redux</Text>
              </div>
            </Item>
          </List>
        </Wrapper>
        <Title>Soft skills</Title>
        <Wrapper>
          <img src={soft} alt="Soft-skills" width={350} height={350} />
          <List>
            {softSkills.map(skill => {
              return (
                <Item key={skill}>
                  <BsPatchCheck size="25px" />
                  <Text>{skill}</Text>
                </Item>
              );
            })}
          </List>
        </Wrapper>
      </Container>
    </Section>
  );
};
