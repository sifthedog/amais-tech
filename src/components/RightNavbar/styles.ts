import styled from 'styled-components';
import { shade } from 'polished';

interface IUlProps {
  open: boolean;
}

const Ul = styled.ul<IUlProps>`
  z-index: 1;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  li {
    padding: 18px 10px;
    div {
      font-size: 1.3rem;
      svg {
        margin: 8px;
        &:hover {
          color: ${shade(0.4, '#EC610C')};
        }
      }
    }
  }
  li:not(:last-child) {
    &:hover {
      color: ${shade(0.4, '#EC610C')};
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #00467b;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #f7f7ff;
      div {
        color: 'inherit';
      }
    }
  }
`;

export { Ul };
