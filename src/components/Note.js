import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Note = ({ string, fret, note }) => {
  const [show, setShow] = useState(false);

  return (
    <StyledNote
      id={`${string}${fret}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <StyledString></StyledString>
      <StyledSelectorWrapper>
        <StyledNoteSelector className="selector">
          <StyledText className="notename">{show && note}</StyledText>
        </StyledNoteSelector>
      </StyledSelectorWrapper>
    </StyledNote>
  );
};

const StyledString = styled.div`
  width: var(--spacing-4);
  height: var(--border-1);
  background: var(--tertiary-color);
`;

const StyledSelectorWrapper = styled.div`
  position: relative;
`;

const StyledNoteSelector = styled.div`
  width: var(--spacing-1);
  height: var(--spacing-1);
  border-radius: var(--spacing-1);
  border: var(--border-1) solid var(--tertiary-color);
  background: var(--primary-color);
  position: absolute;
  transform: translateY(calc(var(--spacing-1) / -1.9));
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const StyledNote = styled.div`
  padding: var(--spacing-0) 0;
  &:hover ${StyledNoteSelector} {
    width: var(--spacing-2);
    height: var(--spacing-2);
    transform: translateY(calc(var(--spacing-2) / -1.9));
    transition: all 0.1s cubic-bezier(1, 0.04, 0.9, 1.98);
  }
  &.yes {
    color: var(--highlight-3);
  }
  &.nope {
    color: var(--highlight-2);
  }
`;

const StyledText = styled.p`
  font-size: var(--fontsize-2);
`;

Note.propTypes = {
  string: PropTypes.string,
  fret: PropTypes.string,
  note: PropTypes.string,
};

export default Note;
