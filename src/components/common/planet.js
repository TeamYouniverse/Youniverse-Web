import React from 'react';
import styled from 'styled-components';

const Planet = ({ size, src, name }) => {
  return (
    <PlanetWrap src={src} size={size}>
      {name}
    </PlanetWrap>
  );
};

export default Planet;

const PlanetWrap = styled.div`
  font-size: 3.5rem;
  background-image: url(${(props) => props.src});
  background-size: 100% 100%;
  width: ${(props) =>
    props.size === 'large'
      ? '30rem'
      : props.size === 'small'
      ? '10rem'
      : '6rem'};
  height: ${(props) =>
    props.size === 'large'
      ? '30rem'
      : props.size === 'small'
      ? '10rem'
      : '6rem'};
  display: flex;
  justify-content: center;
  align-items: center;
`;
