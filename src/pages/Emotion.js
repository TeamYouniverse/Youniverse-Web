import React, { useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import styled from 'styled-components';
import { Example, Star, happy, sad, sorry, touching } from '../assets';
import { Planet } from '../components';
import GlobalFonts from '../assets/fonts/font';

const Emotion = ({ user }) => {
  const location = useLocation();
  console.log(location.state);
  let name = location.state.name;
  const history = useHistory();
  // const name = user.user.data.username;
  console.log(history.location.pathname.split('/')[2]);
  let emotionName = history.location.pathname.split('/')[2];
  // if (emotionName === "happy") {

  // }
  let src;
  let emotionKorName;
  switch (emotionName) {
    case 'happy':
      src = happy;
      emotionKorName = '행복';
      break;
    case 'sad':
      src = sad;
      emotionKorName = '설움';
      break;
    case 'sorry':
      src = sorry;
      emotionKorName = '미안';
      break;
    case 'touching':
      src = touching;
      emotionKorName = '감동';
      break;
  }
  const [ids, setIds] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [title, setTitle] = useState([
    '김의진1',
    '안녕하세요2',
    '반갑습니다3',
    '몇살이세요?4',
    '하하하5',
    '노트북6',
    '아이폰7',
    '맥북8',
    '충전기9',
    '에어팟10',
  ]);
  const [content, setContent] = useState([]);
  const [data, setData] = useState([
    {
      id: 1,
      title:
        '<저명1과 행복했던 순간은 5/23 7시에 만나 광화문 빌즈를 가서 수다 떨었을 때>',
      content:
        '저명1과 빌즈 가서 파스타랑 팬케이크를 먹으며 오랜만에 그동안 못한 수다를 떨었다. 그동안 취업을 준비하느라 굉장히 힘든 나날을 보냈었는데 맛있는 거 먹으며 속에 있던 얘기를 하니 이보다 더 행복할 수 없었다.  항상 친구와의 대화 그리고 맛있는 음식은 나에게 행복을 주는 것 같다.',
    },
    {
      id: 2,
      title: '<볼링> ',
      content:
        '친구와 함께 볼링을 치러 갔다. 비록 나는 볼링을 못 치지만 볼링장의 분위기와 좋은 기운이 나를 기분좋게 한다. 볼링을 친 후 친구와 하는 하이파이브,, 친구와 교감을 나눈다는 생각에 행복했다. 앞으로도 친구와 볼링을 자주 치러 가야겠다. ',
    },
    {
      id: 3,
      title: '<파자마파티> ',
      content:
        '중간고사가 끝난 후 친구들과 파자마파티를 했다. 오랜만에 술을 마시고 맛있는 음식과 함께 이야기를 나누니 행복 그 자체였다. 특히 친구가 해준 맛있는 음식을 먹으며 많은 행복을 느꼈다.  친구야 싸랑훼~~~',
    },
    {
      id: 4,
      title: '넌 나의 우산',
      content:
        '때는 비오는 날이었죠... 같이 맛있는 냉삼을 먹고 기분좋게 집으로 가려고 나왔는데 글쎄 비가 오지 뭐예요... 하필 또 우산을 들고갈까 말까 오백 번 정도 고민하다가 그냥 나온 날이라 당황스러웠어요. 그런데 글쎄 다운이가 버스 정류장까지 우산을 씌워준 거 아니겠어요ㅠㅠ 다운이의 마음처럼 넓고 큰 우산이라 둘다 비를 한 방울도 안 맞고 정류장까지 도착했답니다. 그 때 느낀 감동을 꼭 남겨주고 싶었어요!',
    },
    {
      id: 5,
      title: '감동만땅',
      content:
        '뒷풀이에서 처음 만났을 때 잘 챙겨준 거 너무 감동이었어요. 다 새로운 사람들이고 내성적인 성격이라 낯을 가리는데 이 분위기에 편하게 적응할 수 있도록 도와줬어요! 덕분에 원래보다 훨씬 빠르게 사람들과 가까워질 수 있었던 것 같아요ㅎㅎㅎ 소극적인 친구들까지 두루두루 챙기는 모습에 많이 감동받고 갑니다!!!',
    },
    // { id: 6, title: '', content: '' },
    // { id: 7, title: '', content: '' },
  ]);

  const handleMouseUp = (e) => {
    e.target.parentNode.childNodes[0].tagName === 'SPAN'
      ? (e.target.parentNode.childNodes[0].style.opacity = '1')
      : e.target.parentNode.parentNode.childNodes[0].tagName === 'SPAN'
      ? (e.target.parentNode.parentNode.childNodes[0].style.opacity = '1')
      : null;
  };
  const handleMouseLeave = (e) => {
    e.target.parentNode.childNodes[0].tagName === 'SPAN'
      ? (e.target.parentNode.childNodes[0].style.opacity = '0')
      : e.target.parentNode.parentNode.childNodes[0].tagName === 'SPAN'
      ? (e.target.parentNode.parentNode.childNodes[0].style.opacity = '0')
      : null;
  };
  const handleClick = () => {
    history.push({
      pathname: '/1/happy/write',
      state: { name, emotionKorName },
    });
  };
  const handleClick2 = (event) => {
    // console.log(event.target.getAttribute('data-id'));
    // let dataId = event.target.getAttribute('data-id');
    // console.log(data, dataId);
    // console.log(data[dataId]);
    // let title;
    // data[dataId] && (title = data[dataId].title);
    // console.log(title);
    // data[dataId] && (
    //   history.push({pathname:'/1/happy/read',
    // state:{data[dataId].title, data[dataId].content}}))
    history.push('/1/happy/read');
  };

  return (
    <EmotionWrap>
      <GlobalFonts />
      <div className="emotionContainer">
        <div onClick={handleClick}>
          <Planet src={src} name={emotionKorName} size="large" />
        </div>
        {data.map((item, index) => (
          <div
            key={item.id}
            className="small"
            onClick={handleClick2}
            data-id={item.id}
          >
            <span className="title" data-id={item.id}>
              {item.title}
            </span>
            <div
              onMouseEnter={(e) => handleMouseUp(e)}
              onMouseLeave={handleMouseLeave}
            >
              <Planet src={Star} name="" size="small" />
            </div>
          </div>
        ))}
        <span className="text">
          행성을 눌러 {name}와 공유했던 감정을 적어보세요. <br />
          별을 누르면 친구들이 쓴 기록을 볼 수 있어요.
        </span>
      </div>
    </EmotionWrap>
  );
};

export default Emotion;

const EmotionWrap = styled.div`
  font-family: Noto Sans CJK KR;
  height: 100%;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100rem;
  text-align: center;
  margin: auto;
  margin-top: 20rem;

  .emotionContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .text,
  .title {
    margin-top: 5rem;
    color: white;
    font-size: 2rem;
  }
  .title {
    opacity: 0;
  }
  /* .title:hover {
    opacity: 1;
  } */
  /* .small:hover{

  } */

  .small {
    position: absolute;
  }
  .small > span {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
  }

  .small:nth-child(2) {
    top: -1.5rem;
    left: -3rem;
  }
  .small:nth-child(3) {
    top: -3rem;
    right: -15rem;
  }
  .small:nth-child(4) {
    top: -10rem;
    right: -10rem;
  }
  .small:nth-child(5) {
    top: -10rem;
    left: 14rem;
  }
  .small:nth-child(6) {
    top: -14rem;
    right: 10rem;
  }
  .small:nth-child(7) {
    bottom: 8rem;
    right: 10rem;
  }
  .small:nth-child(8) {
    bottom: 12rem;
    left: 17rem;
  }
  .small:nth-child(9) {
    bottom: 4rem;
    left: -1rem;
  }
  .small:nth-child(10) {
    top: -16rem;
    left: 0rem;
  }
  .small:nth-child(11) {
    bottom: 18rem;
    right: -6rem;
  }
`;
