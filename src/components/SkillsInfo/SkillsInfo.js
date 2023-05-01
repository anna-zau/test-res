import { Container, Section } from 'styles/common.styled';
import { BsPatchCheck } from 'react-icons/bs';
import softSkills from '../../static/softSkills.json';
import { techSkills } from '../../static/techSkills';

import tech from '../../assets/icons/tech.svg';
import soft from '../../assets/icons/soft-skills.svg';

import { Title, List, Item, Text, Wrapper } from './SkillsInfo.styled';

export const SkillsInfo = () => {
  return (
    <Section>
      <Container>
        <div>
          <Title>Tech skills</Title>
          <Wrapper>
            <img src={tech} alt="Tech-skills" width={350} height={350} />
            <List>
              {techSkills.map(item => {
                return (
                  <Item>
                    <img
                      src={item.icon}
                      alt={item.name}
                      width={50}
                      height={50}
                    />
                    <Text>{item.name}</Text>
                  </Item>
                );
              })}
            </List>
          </Wrapper>
        </div>
        <div style={{ marginTop: '50px' }}>
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
        </div>
      </Container>
    </Section>
  );
};
