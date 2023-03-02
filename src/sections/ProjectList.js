import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import img1 from "../assets/Images/11.webp";
import img2 from "../assets/Images/12.webp";
import img3 from "../assets/Images/13.webp";
import img4 from "../assets/Images/14.webp";
import React, { useLayoutEffect, useRef } from "react";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  color: #bcead5;

  // background-color: yellow;
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;

  box-shadow: 0 0 0 5vw ${(props) => props.theme.text};
  border: 3px solid #bcead5;
  z-index: 11;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};
  color: #bcead5;
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;
`;

const Container = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 25vw;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;

  img {
    width: 100%;
    height: auto;
    z-index: 5;
  }
`;

const Product = ({ img, title = "" }) => {
  return (
    <Item>
      <img src={img} alt={title} />
      <h2>{title}</h2>
    </Item>
  );
};

const ProjectList = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const ScrollingRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = ScrollingRef.current;

    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom+=100% top-=100%",
          scroller: ".App", //locomotive-scroll
          scrub: true,
          pin: true,
          markers: true,
        },

        ease: "none",
      });

      t1.fromTo(
        scrollingElement,
        {
          y: '0',
        },

        {
          y: "-100%",
          scrollTrigger: {
            trigger: scrollingElement,
            start: "top top",
            end: "bottom top",
            scroller: ".App", //locomotive-scroll
            scrub: true,
            markers: true,
          },
        })
      
      ScrollTrigger.refresh();
    }, 1000);

    return () => {};
  }, []);

  return (
    <Section ref={ref}>
      <Overlay />
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        Projects
      </Title>
      <Container ref={ScrollingRef}>
        <Product img={img1} title="Sweatshirts" />
        <Product img={img2} title="Ethnic Wear" />
        <Product img={img3} title="Man Basics" />
        <Product img={img4} title="Tops" />
      </Container>
    </Section>
  );
};

export default ProjectList;
