import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({ click, children }) => (
  <StyledButton onClick={click}>{children}</StyledButton>
);

const StyledButton = styled.section`
  width: 100%;
  height: 100%;
  border: var(--border-1) solid var(--secondary-color);
  border-radius: var(--border-radius);
  margin: 0 0 var(--spacing-2) 0;
  @media (max-width: 768px) {
    margin: 0 0 var(--spacing-2) 0;
  }
  :hover {
    cursor: nw-resize;
    box-shadow: 10px 10px 20px rgba(255, 255, 255, 0.3);
    transform: translateY(-0.3rem);
    transition: all 0.3s ease;
  }
  p {
    margin: 0 0 var(--spacing-1) var(--spacing-2);
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

Button.propTypes = {
  click: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
