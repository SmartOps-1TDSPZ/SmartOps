import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin: 2vw;
`;

export const Logo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5vw 12vw 8vw;
  width: 60%;

  @media (min-width: 768px) {
    margin: 3vw 0vw 3vw;
    width: 30%;
  }
`;

export const Title = styled.h1`
  color: white;
`;

export const Subtitle = styled.h2`
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  background-color: #489dda;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  margin: 5vw 0vw;
  font-size: 0.8rem;
`;
