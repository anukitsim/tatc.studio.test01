import React from 'react'
import styled from 'styled-components';
import { useViewportScroll } from 'framer-motion';

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  overflow: hidden;

  display: flex;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: ${props => props.theme.fontBig};
  font-weight: 300;
  color: #bcead5;

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
`;

const Left = styled.div`
  width: 50%;
  font-size: ${props => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;
  color: #bcead5;
  
`;

const About = () => {
  const { scrollY } = useViewportScroll();

  return (
    <Section id='fixed-target'>
      <Title
        data-scroll
        data-scroll-speed='-2'
        data-scroll-direction='horizontal'
        style={{
          y: scrollY.get() * -0.5
        }}
      >
        About me
      </Title>
      <Left
        data-scroll
        data-scroll-sticky
        data-scroll-target='#fixed-target'
        style={{
          y: scrollY.get() * -0.2
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt esse excepturi fugit laborum ea pariatur quibusdam culpa quisquam dolores et, obcaecati dolorum id ad incidunt facere provident earum porro.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur debitis esse praesentium impedit expedita rerum asperiores natus deserunt ex cumque, corporis fugiat quae, doloremque tempora! Alias dolore cupiditate voluptatibus quae fugiat nam, nobis qui earum.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolore hic velit autem deleniti odit.
      </Left>
    </Section>
  );
};

export default About;
