import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100%;
`

export const Header = styled.header`
  height: 100px;
  width: 100%;
  border-bottom: 1px solid gray;
  margin: 0 auto;

  .header__inner-container {
    padding: 1%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    font-size: 1.2rem;
    color: gray;
  }

  div {
    width: 10%;
    height: 100%;
  }
`