import { createGlobalStyle } from 'styled-components'; //1
import NotoSans from './NotoSansCJKkr-Regular.otf'; //2

export default createGlobalStyle`		      // 3
  @font-face {
    font-family: 'Noto Sans CJK KR';	//폰트를 사용할 때 부르는 이름 지정
    src: local('Noto Sans CJK KR'),    //지정한 이름
    url(${NotoSans}) format('otf');
    font-weight: 400; 		//폰트 기본 설정
    font-style: normal;
  }
`;
