import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import Note from './note';

const StyledFretboardWrapper = styled.section`
  margin: var(--spacing-1) var(--spacing-2);
  .simplebar-content-wrapper {
    overflow: auto;
  }
  .simplebar-scrollbar {
    cursor: grab;
    :before {
      background: var(--tertiary-color);
    }
  }
`;

const StyledFretboard = styled.div`
  margin: var(--spacing-2) var(--spacing-5) var(--spacing-2) 0;
  width: 100%;
  height: 100%;
  display: flex;
`;

const StyledFret = styled.div`
  border-style: solid;
  border-width: 0 0 0 var(--border-1);
  border-color: var(--secondary-color);
  :last-child {
    padding-right: var(--spacing-2);
  }
`;

const StyledMarker = styled.div`
  position: absolute;
  color: var(--tertiary-color);
  font-size: var(--fontsize-2);
  z-index: -100;
`;

const Fretboard = ({ click }) => (
  <StyledFretboardWrapper>
    <SimpleBar style={{ width: '100%' }}>
      <StyledFretboard onClick={click}>
        <StyledFret>
          <Note string="1" fret="01" note="F" />
          <Note string="2" fret="01" note="C" />
          <Note string="3" fret="01" note="G#" />
          <Note string="4" fret="01" note="D#" />
          <Note string="5" fret="01" note="A#" />
          <Note string="6" fret="01" note="F" />
        </StyledFret>
        <StyledFret>
          <Note string="1" fret="02" note="F#" />
          <Note string="2" fret="02" note="C#" />
          <Note string="3" fret="02" note="A" />
          <Note string="4" fret="02" note="E" />
          <Note string="5" fret="02" note="B" />
          <Note string="6" fret="02" note="F#" />
        </StyledFret>
        <StyledFret>
          <StyledMarker>III</StyledMarker>
          <Note string="1" fret="03" note="G" />
          <Note string="2" fret="03" note="D" />
          <Note string="3" fret="03" note="A#" />
          <Note string="4" fret="03" note="F" />
          <Note string="5" fret="03" note="D" />
          <Note string="6" fret="03" note="G" />
        </StyledFret>
        <StyledFret>
          <Note string="1" fret="04" note="G#" />
          <Note string="2" fret="04" note="D#" />
          <Note string="3" fret="04" note="B" />
          <Note string="4" fret="04" note="F#" />
          <Note string="5" fret="04" note="C#" />
          <Note string="6" fret="04" note="G#" />
        </StyledFret>
        <StyledFret>
          <StyledMarker>V</StyledMarker>
          <Note string="1" fret="05" note="A" />
          <Note string="2" fret="05" note="E" />
          <Note string="3" fret="05" note="C" />
          <Note string="4" fret="05" note="G" />
          <Note string="5" fret="05" note="D" />
          <Note string="6" fret="05" note="A" />
        </StyledFret>
        <StyledFret>
          <Note string="1" fret="06" note="A#" />
          <Note string="2" fret="06" note="F" />
          <Note string="3" fret="06" note="C#" />
          <Note string="4" fret="06" note="G#" />
          <Note string="5" fret="06" note="D#" />
          <Note string="6" fret="06" note="A#" />
        </StyledFret>
        <StyledFret>
          <StyledMarker>VII</StyledMarker>
          <Note string="1" fret="07" note="B" />
          <Note string="2" fret="07" note="F#" />
          <Note string="3" fret="07" note="D" />
          <Note string="4" fret="07" note="A" />
          <Note string="5" fret="07" note="E" />
          <Note string="6" fret="07" note="B" />
        </StyledFret>
        <StyledFret>
          <Note string="1" fret="08" note="C" />
          <Note string="2" fret="08" note="G" />
          <Note string="3" fret="08" note="D#" />
          <Note string="4" fret="08" note="A#" />
          <Note string="5" fret="08" note="F" />
          <Note string="6" fret="08" note="C" />
        </StyledFret>
        <StyledFret>
          <StyledMarker>IX</StyledMarker>
          <Note string="1" fret="09" note="C#" />
          <Note string="2" fret="09" note="G#" />
          <Note string="3" fret="09" note="E" />
          <Note string="4" fret="09" note="B" />
          <Note string="5" fret="09" note="F#" />
          <Note string="6" fret="09" note="C#" />
        </StyledFret>
        <StyledFret>
          <Note string="1" fret="10" note="D" />
          <Note string="2" fret="10" note="A" />
          <Note string="3" fret="10" note="F" />
          <Note string="4" fret="10" note="C" />
          <Note string="5" fret="10" note="G" />
          <Note string="6" fret="10" note="D" />
        </StyledFret>
        <StyledFret>
          <Note string="1" fret="11" note="D#" />
          <Note string="2" fret="11" note="A#" />
          <Note string="3" fret="11" note="F#" />
          <Note string="4" fret="11" note="C#" />
          <Note string="5" fret="11" note="G#" />
          <Note string="6" fret="11" note="D#" />
        </StyledFret>
        <StyledFret>
          <StyledMarker>XII</StyledMarker>
          <Note string="1" fret="12" note="E" />
          <Note string="2" fret="12" note="B" />
          <Note string="3" fret="12" note="G" />
          <Note string="4" fret="12" note="D" />
          <Note string="5" fret="12" note="A" />
          <Note string="6" fret="12" note="E" />
        </StyledFret>
        <StyledFret>
          <Note string="1" fret="13" note="F" />
          <Note string="2" fret="13" note="C" />
          <Note string="3" fret="13" note="G#" />
          <Note string="4" fret="13" note="D#" />
          <Note string="5" fret="13" note="A#" />
          <Note string="6" fret="13" note="F" />
        </StyledFret>
        <StyledFret>
          <Note string="1" fret="14" note="F#" />
          <Note string="2" fret="14" note="C#" />
          <Note string="3" fret="14" note="A" />
          <Note string="4" fret="14" note="E" />
          <Note string="5" fret="14" note="B" />
          <Note string="6" fret="14" note="F#" />
        </StyledFret>
        <StyledFret>
          <StyledMarker>XV</StyledMarker>
          <Note string="1" fret="15" note="G" />
          <Note string="2" fret="15" note="D" />
          <Note string="3" fret="15" note="A#" />
          <Note string="4" fret="15" note="F" />
          <Note string="5" fret="15" note="C" />
          <Note string="6" fret="15" note="G" />
        </StyledFret>
        <StyledFret>
          <Note string="1" fret="16" note="G#" />
          <Note string="2" fret="16" note="D#" />
          <Note string="3" fret="16" note="B" />
          <Note string="4" fret="16" note="F#" />
          <Note string="5" fret="16" note="C#" />
          <Note string="6" fret="16" note="G#" />
        </StyledFret>
        <StyledFret>
          <StyledMarker>XVII</StyledMarker>
          <Note string="1" fret="17" note="A" />
          <Note string="2" fret="17" note="E" />
          <Note string="3" fret="17" note="C" />
          <Note string="4" fret="17" note="G" />
          <Note string="5" fret="17" note="D" />
          <Note string="6" fret="17" note="A" />
        </StyledFret>
        <StyledFret>
          <Note string="1" fret="18" note="A#" />
          <Note string="2" fret="18" note="F" />
          <Note string="3" fret="18" note="C#" />
          <Note string="4" fret="18" note="G#" />
          <Note string="5" fret="18" note="D#" />
          <Note string="6" fret="18" note="A#" />
        </StyledFret>
        <StyledFret>
          <StyledMarker>XIX</StyledMarker>
          <Note string="1" fret="19" note="B" />
          <Note string="2" fret="19" note="F#" />
          <Note string="3" fret="19" note="D" />
          <Note string="4" fret="19" note="A" />
          <Note string="5" fret="19" note="E" />
          <Note string="6" fret="19" note="B" />
        </StyledFret>
        <StyledFret>
          <Note string="1" fret="20" note="C" />
          <Note string="2" fret="20" note="G" />
          <Note string="3" fret="20" note="D#" />
          <Note string="4" fret="20" note="A#" />
          <Note string="5" fret="20" note="F" />
          <Note string="6" fret="20" note="C" />
        </StyledFret>
        <StyledFret>
          <StyledMarker>XXI</StyledMarker>
          <Note string="1" fret="21" note="C#" />
          <Note string="2" fret="21" note="G#" />
          <Note string="3" fret="21" note="E" />
          <Note string="4" fret="21" note="B" />
          <Note string="5" fret="21" note="F#" />
          <Note string="6" fret="21" note="C#" />
        </StyledFret>
        <StyledFret>
          <Note string="1" fret="22" note="D" />
          <Note string="2" fret="22" note="A" />
          <Note string="3" fret="22" note="F" />
          <Note string="4" fret="22" note="C" />
          <Note string="5" fret="22" note="G" />
          <Note string="6" fret="22" note="D" />
        </StyledFret>
      </StyledFretboard>
    </SimpleBar>
  </StyledFretboardWrapper>
);

Fretboard.propTypes = {
  click: PropTypes.func,
};

export default Fretboard;
