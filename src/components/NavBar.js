import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavContainer = styled(motion.div)`
  width: 100vw;
  z-index: 6;
  position: absolute;
  top: ${props => props.click ? '0' : `-${props.theme.navHeight}` };
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
`;

const MenuItems = styled(motion.ul)`
  position: relative;
  height: ${props => props.theme.navHeight};
  background-color: black;
  color: #BCEAD5;
  list-style:none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0 10rem;
`;

const MenuBtn = styled(motion.li)`
  list-style-type: style none;
  color: #BCEAD5;
  width: 15rem;
  height: 2.5rem;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.theme.fontmd};
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
`;

const MenuItem = styled(motion.li)`
  text-transform: uppercase;
  color: #BCEAD5;
`;

const NavBar = () => {
  const [click, setClick] = useState(false);

  return (
    <NavContainer click={click.toString()} 
      initial={{
        y:'-100%',
      }}
      animate={{
        y: click ? 0 : '-100%'
      }}
      transition={{
        type: "tween",
        duration: 0.5
      }}
    >
      <MenuItems
        drag='y'
        dragConstraints={{
          top:0,
          bottom:70
        }}
        dragElastic={0.05}
        dragSnapToOrigin
      >
        <MenuBtn onClick={() => setClick(!click)}>Choose</MenuBtn>
        <MenuItem  
          whileHover={{scale:1.1, y:-5}}
          whileTap={{scale:0.9, y:0}}
        >
          Home
        </MenuItem>
        <MenuItem  
          whileHover={{scale:1.1, y:-5}}
          whileTap={{scale:0.9, y:0}}
        >
          About
        </MenuItem>
        <MenuItem  
          whileHover={{scale:1.1, y:-5}}
          whileTap={{scale:0.9, y:0}}
        >
          Projects
        </MenuItem>
      </MenuItems> 
    </NavContainer>
  );
};

export default NavBar;
