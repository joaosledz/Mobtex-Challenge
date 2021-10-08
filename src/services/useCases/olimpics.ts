/* eslint-disable */
import api from '../api';
import { TypeList } from '../models/list';

type ResponseList = {
  data: TypeList;
};

const olimpicsApi = {
  getList: (name: string) => api.get<ResponseList>(`${name}`),
};

export default olimpicsApi;
