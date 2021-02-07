import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  height: 72px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  color: #00467b;
`;

const Container = styled.div`
  display: flex;
  max-width: 1024px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  .logo {
    padding: 15px 0;
    height: 100%;
  }
`;

export { Nav, Container };
