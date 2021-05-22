import axios from 'axios';

// const url = 'localhost:5000/api/user/60a945e8d51f5f03a690ca34';
const url = '/api/login';

const postAPI = async (userId) => {
  try {
    const { data } = await axios.post(`${url}`, {
      userName: `${userId}`,
    });
    console.log(data);
    return data.id;
  } catch (e) {
    console.error('[FAIL] POST ANSWER', e);
    return e;
  }
};

export { postAPI };
