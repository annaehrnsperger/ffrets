import React, { useState } from 'react';
import styled from 'styled-components';

const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);
  return (
    <StyledFooter>
      <StyledDisclaimer>
        {show ? (
          <StyledInfoText>
            ffrets.net plays a random note that you can identify on the
            fretboard by playing it on your own guitar
          </StyledInfoText>
        ) : (
          <a
            href="https://annaehrnsperger.de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>© 2020 Anna Ehrnsperger</p>
          </a>
        )}
        <StyledInfo onClick={handleClick}>{show ? 'x' : '?'}</StyledInfo>
      </StyledDisclaimer>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  font-size: var(--fontsize-2);
  width: 100%;
  height: 100%;
  padding-top: var(--spacing-5);
`;

const StyledDisclaimer = styled.section`
  display: flex;
  justify-content: space-between;
`;

const StyledInfo = styled.p`
  padding-left: var(--spacing-2);
  cursor: pointer;
`;

const StyledInfoText = styled.h1`
  padding: 0 var(--spacing-2) 0 0;
`;

export default Footer;
