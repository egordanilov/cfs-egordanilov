import styled from "styled-components";

export const PostsPageWrapper = styled.main`
  width: 90%;
  border-radius: 10px;
  color: black;
  margin: 0 auto;
  padding: 30px;
`;

export const PaginationWrapper = styled.nav`
  display: flex;
  justify-content: center;
  color: white;
  margin-top: 25px;
  align-items: center;
`;

export const PaginationButton = styled.button`
  margin: 0 10px;

  @media (max-width: 600px) {
    &:first-of-type {
      display: none;
    }

    &:last-of-type {
      display: none;
    }
  }
`;
