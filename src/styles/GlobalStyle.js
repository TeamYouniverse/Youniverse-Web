import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { Background } from '../assets';

export default createGlobalStyle`
    ${reset};
    html,
    body{
        font-size: 10px;
        font-family: 'Spoqa Han Sans Neo','sans-serif';
    }
    body {
        background-image:url(${Background});
    }

    * {
        box-sizing: border-box;
    }
`;
