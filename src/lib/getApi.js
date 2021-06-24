import axios from 'axios';

// post를 통해 받은 id값을 넘겨줌
const getApi = async (paramId) => {
  const url =
    'http://cors-anywhere.herokuapp.com/http://ec2-3-37-72-139.ap-northeast-2.compute.amazonaws.com:5000/api/user/';
  //axios.get을 이용해 url에 존재하는 자원을 요청
  try {
    const data = await axios.get(`${url}` + paramId);
    console.log('[SUCCESS] GET user data', data);
    return data;
  } catch (e) {
    console.log('[FAIL] GET user data', e);
    return null;
  }
};

export default { getApi };
