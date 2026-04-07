import styled from "styled-components";

export const Container = styled.header`
  background: #0A0A0A;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

export const Logo = styled.div`
  font-size: 28px;
  font-weight: 800;
  color: #FFFFFF;
  cursor: pointer;
  span {
    color: #E23DD7;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const NavLink = styled.a`
  color: #FFFFFF;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: #E23DD7;
  }

  ${({ active }) => active && `
    color: #E23DD7;
  `}
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid #E23DD7;
`;