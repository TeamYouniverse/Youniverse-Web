import axios from 'axios';

//userName을 받으면 poastApi(userName);을 실행시켜서 post를 시킴
const url =
  'http://cors-anywhere.herokuapp.com/http://ec2-3-37-72-139.ap-northeast-2.compute.amazonaws.com:5000/api/login/';

const postAPI = async (userName) => {
  try {
    const data = await axios.post(`${url}`, {
      username: `${userName}`,
    });
    console.log(data);
    return data;
  } catch (e) {
    console.error('[FAIL] POST ANSWER', e);
    return e;
  }
};

export default { postAPI };
