import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background: white;
  width: 100vw;

  height: 30px;
  display: flex;
  position: absolute;
  align-items: center;
  top: 0;
  left: 0;
`;

export const HeaderLink = styled(Link)`
  color: black;
  margin-left: 10px;
  &:hover {
    opacity: 0.8;
  }
`;
