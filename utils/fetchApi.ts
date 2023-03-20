import axios from 'axios';

export const FETCH_SERVICE = {
  async getTodo() {
    const response = await axios.get(
      'https://mern-todolist-backend-production.up.railway.app/todo'
    );
    return response;
  },
};
