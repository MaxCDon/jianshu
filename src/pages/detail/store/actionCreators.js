import axios from 'axios';
import { constants }from './index';

export const changeDetail = (result) => ({
    type: constants.CHANGE_DETAIL,
    title: result.title,
    content: result.content
});

export const getDetail = (id) => {
    return (dispatch) => {
      axios.get('/api/detail.json?id=' + id).then((res) => {
          const result = res.data.data;
          dispatch(changeDetail(result));
      })
    }
};