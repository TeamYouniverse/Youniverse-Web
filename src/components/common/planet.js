import React from 'react';
import styled from 'styled-components';

const Planet = ({ size, src, name }) => {
  return (
    <PlanetWrap>
      <PlanetEach src={src} size={size}></PlanetEach>
      <NameWrap>{name}</NameWrap>
    </PlanetWrap>
  );
};

export default Planet;

const PlanetWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const PlanetEach = styled.div`
  cursor: pointer;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-size: 100% 100%;
  width: ${(props) =>
    props.size === 'large'
      ? '40rem'
      : props.size === 'happy'
      ? '21rem'
      : props.size === 'touching'
      ? '16.9rem'
      : props.size === 'sad'
      ? '13rem'
      : '12.4rem'};
  height: ${(props) =>
    props.size === 'large'
      ? '40rem'
      : props.size === 'happy'
      ? '21rem'
      : props.size === 'touching'
      ? '16.9rem'
      : props.size === 'sad'
      ? '13rem'
      : '12.4rem'};
`;

const NameWrap = styled.div`
  margin-top: 1.5rem;
  font-size: 2.2rem;
  color: #ffffff;
`;
