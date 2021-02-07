import styled from 'styled-components';
import { shade } from 'polished';

interface IUlProps {
  open: boolean;
}

const Ul = styled.ul<IUlProps>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  li {
    padding: 18px 10px;
    div {
      color: ${({ open }) => (open ? '#f7f7ff' : '#00467b')};
      font-size: 1.5rem;
      svg {
        margin: 8px;
        &:hover {
          color: ${shade(0.4, '#EC610C')};
        }
      }
    }
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
    }
  }
`;

export { Ul };
