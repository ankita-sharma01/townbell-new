import React, { useState } from "react";
import styled from "styled-components";
import siteLogo from "../Assets/TownLogo/logo.png";
import { RxCross1 } from "react-icons/rx";
import { CgArrowLongRight } from "react-icons/cg";
import { IoReorderTwoOutline } from "react-icons/io5";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Button onClick={toggleMenu}>
          {menuOpen ? (
            <>
              <span style={{ marginRight: "5px" }}>
                <RxCross1 />
              </span>{" "}
              MENU
            </>
          ) : (
            <>
              <span style={{ marginRight: "5px" }}>
                <IoReorderTwoOutline />
              </span>{" "}
              MENU
            </>
          )}
        </Button>

        <Logo>
          <img src={siteLogo} alt="Skytouch Logo" />
        </Logo>

        <Button>
          INQUIRE 
          <CgArrowLongRight />
        </Button>
      </HeaderContainer>

      {menuOpen && (
        <FullscreenNav menuOpen={menuOpen}>
          <NavList>
            <NavItem>
              <NavLink href="/">HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#amenities">AMENITIES</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/projects">SITE PLANS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about-townbell">ABOUT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog">BLOGS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact-us">CONTACT</NavLink>
            </NavItem>
          </NavList>
          <Social>
            <span>Follow </span>
            <hr style={{ width: "100px" }} />
            <NavLink href="#">
              <i className="fab fa-instagram">
                <FaInstagram />
              </i>
            </NavLink>
            <NavLink href="#">
              <i className="fab fa-facebook-f">
                <FaFacebook />
              </i>
            </NavLink>
          </Social>
        </FullscreenNav>
      )}
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 900;
  width: 100%;
  font-family: "Manrope", "Manrope Placeholder", sans-serif;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 15px 0px;
  align-items: center;
  background: transparent;
  color: white;
  position: relative;
  z-index: 999;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid white;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  background: none;
  color: white;
  font-size: 12px;
  font-weight: 700;
  gap: 10px;
  cursor: pointer;
  &:hover {
    background: white;
    color: black;
  }
  svg {
    font-size: 20px;
    font-weight: 300;
  }
`;

// const FullscreenNav = styled.nav`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: black;
//   color: white;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
//   align-items: center;
// `;

const FullscreenNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  
  /* Initial state (hidden) */
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
  
  /* Animation when menu is open */
  ${({ menuOpen }) => menuOpen && `
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  `}
  
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1); /* Smooth easing */
  z-index: 998;
`;



const NavList = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 1rem 0;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
`;

const Social = styled.div`
  margin: 2rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 35px;
  font-weight: 600;
  svg {
    font-size: 35px;
    font-weight: 700;
  }
`;

const Logo = styled.div`
  text-align: center;
  img {
    width: 105px;
    height: auto;
  }
`;
