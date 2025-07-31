// import React, { useState } from "react";
// import styled from "styled-components";
// import siteLogo from "../Assets/TownLogo/logo.png";
// import { RxCross1 } from "react-icons/rx";
// import { CgArrowLongRight } from "react-icons/cg";
// import { IoReorderTwoOutline } from "react-icons/io5";
// import { FaFacebook, FaInstagram } from "react-icons/fa";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   return (
//     <HeaderWrapper>
//       <HeaderContainer>
//         <Button onClick={toggleMenu}>
//           {menuOpen ? (
//             <>
//               <span style={{ marginRight: "5px" }}>
//                 <RxCross1 />
//               </span>{" "}
//               MENU
//             </>
//           ) : (
//             <>
//               <span style={{ marginRight: "5px" }}>
//                 <IoReorderTwoOutline />
//               </span>{" "}
//               MENU
//             </>
//           )}
//         </Button>

//         <Logo>
//           <img src={siteLogo} alt="Skytouch Logo" />
//         </Logo>

//         <Button>
//           INQUIRE 
//           <CgArrowLongRight />
//         </Button>
//       </HeaderContainer>

//       {menuOpen && (
//         <FullscreenNav menuOpen={menuOpen}>
//           <NavList>
//             <NavItem>
//               <NavLink href="/">HOME</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="#amenities">AMENITIES</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/projects">SITE PLANS</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/about-townbell">ABOUT</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/blog">BLOGS</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/contact-us">CONTACT</NavLink>
//             </NavItem>
//           </NavList>
//           <Social>
//             <span>Follow </span>
//             <hr style={{ width: "100px" }} />
//             <NavLink href="#">
//               <i className="fab fa-instagram">
//                 <FaInstagram />
//               </i>
//             </NavLink>
//             <NavLink href="#">
//               <i className="fab fa-facebook-f">
//                 <FaFacebook />
//               </i>
//             </NavLink>
//           </Social>
//         </FullscreenNav>
//       )}
//     </HeaderWrapper>
//   );
// };

// export default Header;

// const HeaderWrapper = styled.header`
//   position: fixed;
//   z-index: 900;
//   width: 100%;
//   font-family: "Manrope", "Manrope Placeholder", sans-serif;
// `;

// const HeaderContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 5px 15px 0px;
//   align-items: center;
//   background: transparent;
//   color: white;
//   position: relative;
//   z-index: 999;
// `;

// const Button = styled.button`
//   display: flex;
//   align-items: center;
//   border: 1px solid white;
//   border-radius: 5px;
//   padding: 0.5rem 1rem;
//   background: none;
//   color: white;
//   font-size: 12px;
//   font-weight: 700;
//   gap: 10px;
//   cursor: pointer;
//   &:hover {
//     background: white;
//     color: black;
//   }
//   svg {
//     font-size: 20px;
//     font-weight: 300;
//   }
// `;


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
//   justify-content: center; /* Center content vertically */
//   align-items: center;
//   z-index: 998;
  
//   /* Initial state (above viewport + transparent) */
//   transform: translateY(-100%);
//   opacity: 0;
  
//   /* Open state (slides down + fades in) */
//   ${({ menuOpen }) => menuOpen && `
//     transform: translateY(0);
//     opacity: 1;
//   `}
  
//   /* Smooth transition for transform and opacity */
//   transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), 
//               opacity 0.4s ease-out;
// `;



// const NavList = styled.ul`
//   list-style: none;
//   text-align: center;
//   padding: 0;
// `;

// const NavItem = styled.li`
//   margin: 1rem 0;
//   font-size: 1.5rem;
//   font-weight: bold;
// `;

// const NavLink = styled.a`
//   color: white;
//   text-decoration: none;
//   font-size: 20px;
//   font-weight: 700;
// `;

// const Social = styled.div`
//   margin: 2rem 0;
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   font-size: 35px;
//   font-weight: 600;
//   svg {
//     font-size: 35px;
//     font-weight: 700;
//   }
// `;

// const Logo = styled.div`
//   text-align: center;
//   img {
//     width: 105px;
//     height: auto;
//   }
// `;


import React, { useState } from "react";
import styled from "styled-components";
import siteLogo from "../Assets/TownLogo/logo.png";
import { RxCross1 } from "react-icons/rx";
import { CgArrowLongRight } from "react-icons/cg";
import { IoReorderTwoOutline } from "react-icons/io5";
import { FaFacebook, FaInstagram } from "react-icons/fa";

// First define all styled components before using them
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
  transition: all 0.3s ease;
  &:hover {
    background: white;
    color: black;
  }
  svg {
    font-size: 20px;
    font-weight: 300;
  }
`;

const NavList = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin: 1.5rem 0;
  font-weight: bold;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(10px);
  }
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
    background:transparent;
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
  img {
    width: 105px;
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
  padding-top:100px;
  padding-bottom: 40px;
  z-index: 998;
  
  /* Initial state (hidden) */
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  opacity: 0;
  
  /* Animation when menu is open */
  ${({ menuOpen }) => menuOpen && `
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
    transition: 
      opacity 0.4s ease 0.3s,
      transform 0.4s ease 0.3s;
  }
  
  ${({ menuOpen }) => menuOpen && `
    ${NavList}, ${Social} {
      opacity: 1;
      transform: translateY(0);
    }
  `}
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    // Prevent scrolling when menu is open
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
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

      <FullscreenNav menuOpen={menuOpen}>
        <NavList>
          <NavItem>
            <NavLink href="/" onClick={toggleMenu}>HOME</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#amenities" onClick={toggleMenu}>AMENITIES</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/projects" onClick={toggleMenu}>SITE PLANS</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about-townbell" onClick={toggleMenu}>ABOUT</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/blog" onClick={toggleMenu}>BLOGS</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact-us" onClick={toggleMenu}>CONTACT</NavLink>
          </NavItem>
        </NavList>
        <Social>
          <span>Follow </span>
          <hr style={{ width: "100px", borderColor: "rgba(255,255,255,0.3)" }} />
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
    </HeaderWrapper>
  );
};

export default Header;