import React from 'react';
import styled from 'styled-components';
import { Planet } from '../components';
import Happy from '../assets/images/happy.svg';
import Sad from '../assets/images/sad.svg';
import Touching from '../assets/images/touching.svg';
import Sorry from '../assets/images/sorry.svg';
import mainPlanet from '../assets/images/Planet.svg';

const MainPage = () => {
  // 서버로부터 받을 데이터 넣을 것이지만 임의로 넣어둠
  const name = '나히';

  const emotion = {
    happy: '행복',
    sad: '서운',
    sorry: '미안',
    touching: '감동',
  };
  return (
    <MainWrap>
      <div className="planet">
        <div className="planet--main">
          <div className="planet--main--userName">{name}</div>
          <div className="planet--main--planet">
            <Planet size={'large'} src={mainPlanet}></Planet>
            <div className="planet--happy">
              <Planet size={'happy'} src={Happy} name={emotion.happy}></Planet>
            </div>
            <div className="planet--sad">
              <Planet size={'sad'} src={Sad} name={emotion.sad}></Planet>
            </div>
            <div className="planet--sorry">
              <Planet size={'small'} src={Sorry} name={emotion.sorry}></Planet>
            </div>
            <div className="planet--touching">
              <Planet
                size={'touching'}
                src={Touching}
                name={emotion.touching}
              ></Planet>
            </div>
          </div>
          <p className="planet--main--content">{name}님의 우주입니다</p>
          <p className="planet--main--content">
            행성을 누르면 {name}님과 공유했던 감정을 기록할 수 있어요.
          </p>
        </div>
      </div>
    </MainWrap>
  );
};

export default MainPage;

const MainWrap = styled.div`
  .planet {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &--main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 5.5rem;
      &--planet {
        position: relative;
      }
      &--userName {
        margin-top: 7rem;
        margin-bottom: 1.1rem;
        font-family: Noto Sans CJK KR;
        font-style: normal;
        font-weight: 500;
        font-size: 3rem;
        color: black;
      }
      &--content {
        margin-top: 4.1rem;
        font-size: 2rem;
        text-align: center;
        color: black;
      }
    }
    &--happy {
      position: absolute;
      top: -10rem;
      left: 60rem;
    }
    &--sad {
      position: absolute;
      top: 40rem;
      left: 55rem;
    }
    &--sorry {
      position: absolute;
      top: -10rem;
      left: -35rem;
    }
    &--touching {
      position: absolute;
      top: 35rem;
      left: -25rem;
    }
  }
`;
