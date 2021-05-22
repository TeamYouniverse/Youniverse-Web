import axios from 'axios';

// post를 통해 받은 id값을 넘겨줌
const getApi = async (paramId) => {
  //axios.get을 이용해 url에 존제하는 자원을 요청
  try {
    const { data } = await axios.get('localhost:5000/' + paramId);
    console.log('[SUCCESS] GET user data', data);
    return data;
  } catch (e) {
    console.log('[FAIL] GET user data', e);
    return null;
  }
};

export { getApi };
