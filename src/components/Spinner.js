import React from 'react';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <div className="lds-hourglass"></div>
    </SpinnerContainer>
  );
};

export default Spinner;
