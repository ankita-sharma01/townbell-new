import React, { useState } from "react";
import styled from "styled-components";
import siteLogo from "../Assets/TownLogo/logo.png";
import { RxCross1 } from "react-icons/rx";
import { FaInstagram ,FaYoutube} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosMenu } from "react-icons/io";

// First define all styled components before using them
const HeaderWrapper = styled.header`
  z-index: 99999;
  width: 100%;
  font-family: "Plus Jakarta Sans", sans-serif;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 15px 0px;
  align-items: center;
  background: transparent;
  color: white;
  position: relative;
  z-index: 99999;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid white;
  border-radius: 2px;
  padding: 0.5rem 1rem;
  background: none;
  color: white;
  font-size: 12px;
  font-weight: 700;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: white;
    color: black;
  }
  svg {
    font-size: 21px;
    font-weight: 300;
  }

  @media (max-width: 767px) {
    .small {
      display: none;
    }
  }
`;

const NavList = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0;
  margin: 0;
   @media (max-width: 767px) {
   display: contents;
  }
`;

const NavItem = styled.li`
  margin: 1.5rem 0;
  font-weight: bold;
  transition: transform 0.3s ease;
   
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #ccc;
    background: transparent;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
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
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      transform: scale(1.1);
      color: #ccc;
    }
  }
`;

const Logo = styled.div`
  text-align: center;
  cursor: pointer;
  img {
    width: 125px;
    height: auto;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
     
  }
`;

// Now define FullscreenNav after all components it references
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
  padding-top: 100px;
  padding-bottom: 40px;
  z-index: 99998;

  /* Initial state (hidden) */
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  opacity: 0;

  /* Animation when menu is open */
  ${({ menuOpen }) =>
    menuOpen &&
    `
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    opacity: 1;
  `}

  transition: 
    clip-path 0.7s cubic-bezier(0.645, 0.045, 0.355, 1),
    opacity 0.5s ease;

  /* Delay the content fade-in slightly */
  ${NavList}, ${Social} {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.4s ease 0.3s, transform 0.4s ease 0.3s;
  }

  ${({ menuOpen }) =>
    menuOpen &&
    `
    ${NavList}, ${Social} {
      opacity: 1;
      transform: translateY(0);
    }
  `}
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    // Prevent scrolling when menu is open
    if (!menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Button onClick={toggleMenu}>
          {menuOpen ? (
            <>
              <span style={{ marginRight: "5px" }}>
                <RxCross1 />
              </span>{" "}
              <span className="small">MENU</span>
            </>
          ) : (
            <>
              <span style={{ marginRight: "5px" }}>
                <IoIosMenu />
              </span>{" "}
              <span className="small">MENU</span>
            </>
          )}
        </Button>

        <Logo>
          <img
            src={siteLogo}
            alt="Skytouch Logo"
            onClick={() => navigate("/")}
            className="2xl:w-[125px] lg:w-[125px] md:w-[80px] w-[80px]"
          />
        </Logo>

        <Button onClick={() => navigate("/contact-us")}>
          <span className="small">INQUIRE</span>
          <GoArrowUpRight />
        </Button>
      </HeaderContainer>

      <FullscreenNav menuOpen={menuOpen}>
        <NavList>
          <NavItem>
            <NavLink href="/" onClick={toggleMenu}>
              HOME
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/amayra-project" onClick={toggleMenu}>
              AMAYRA TRILLIUM
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about-townbell" onClick={toggleMenu}>
              ABOUT
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact-us" onClick={toggleMenu}>
              CONTACT
            </NavLink>
          </NavItem>
        </NavList>
        <Social>
          <span>Follow </span>
          <hr
            style={{ width: "100px", borderColor: "rgba(255,255,255,0.3)" }}
          />
          <NavLink href="https://www.instagram.com/town_bell/?hl=en" target='_blank' rel="noopener noreferrer">
            <i className="fab fa-instagram">
              <FaInstagram />
            </i>
          </NavLink>
          <NavLink href="https://www.youtube.com/@Town-Bell" target='_blank' rel="noopener noreferrer">
            <i className="fab fa-facebook-f">
              <FaYoutube />
            </i>
          </NavLink>
        </Social>
      </FullscreenNav>
    </HeaderWrapper>
  );
};

export default Header;
