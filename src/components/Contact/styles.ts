import styled from 'styled-components';
import { shade } from 'polished';

const BottomBar = styled.div`
  background: #00467b;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    align-items: center;
    > div:not(:first-child) {
      border-top: 1px solid #f7f7ff;
    }
  }
  @media (min-width: 768px) {
    > div:not(:first-child) {
      border-left: 1px solid #f7f7ff;
    }
  }
`;

const ContentBox = styled.div`
  width: 100%;
  height: 96px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #f7f7ff;
  > div svg {
    margin: 8px 16px;
    font-size: 24px;
    &:hover {
      color: ${shade(0.4, '#EC610C')};
    }
  }
  > span {
    display: flex;
    text-align: center;
    align-items: center;
    > svg {
      margin: 4px 8px;
    }
  }
  img {
    height: 100%;
    width: 100%;
  }
`;

export { BottomBar, Container, ContentBox };
