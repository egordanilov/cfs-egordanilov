import styled from "styled-components";

export const PostWrapper = styled.div`
  background: white;
  width: 60%;
  border-radius: 10px;
  color: black;
  margin: 0 auto;
  padding: 30px;
  margin-top: 10px;
  position: relative;
`;

export const PostGoBackLink = styled.div`
  position: absolute;
  top: 30px;
  display: flex;
  justify-content: space-around;
  :hover {
    color: red;
  }
`;
