import axios from 'axios';

//userName을 받으면 poastApi(userName);을 실행시켜서 post를 시킴
const url =
  'http://ec2-15-164-219-99.ap-northeast-2.compute.amazonaws.com:5000/api/login';

const postAPI = async (userName) => {
  try {
    const { data } = await axios.post(`${url}`, {
      username: `${userName}`,
    });
    console.log(data);
    return data.id;
  } catch (e) {
    console.error('[FAIL] POST ANSWER', e);
    return e;
  }
};

export default { postAPI };
