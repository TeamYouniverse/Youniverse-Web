import { createGlobalStyle } from 'styled-components';
import NotoSansOtf from './NotoSansCJKkr-Regular.otf';
import NotoSansWoff from './NotoSansKR-Regular.woff';
import NotoSansWoff2 from './NotoSansKR-Regular.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans CJK KR';	//폰트를 사용할 때 부르는 이름 지정
    src: local('Noto Sans CJK KR'),    //지정한 이름
    url(${NotoSansOtf}) format('otf'),
    url(${NotoSansWoff}) format('woff'),
    url(${NotoSansWoff2}) format('woff2');
    font-weight: 400; 		//폰트 기본 설정
    font-style: normal;
  }
`;
