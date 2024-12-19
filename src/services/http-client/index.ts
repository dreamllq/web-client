import axios, { Axios } from 'axios';
import JSONBig from 'json-bigint';
import qs from 'qs';
import { HttpError, InterfaceError, AuthorizationError } from 'lc-error-definition';
import { isObject, isString } from 'lodash';
import { getToken } from '@/services/token';

axios.defaults.timeout = 60000;
axios.defaults.withCredentials = false;

const request = axios.create({
  baseURL: '/api', // 请求头地址
  transformResponse: [
    function (data) {
      try {
        return JSONBig({ storeAsString: true }).parse(data);
      } catch (err) {
        return data;
      }
    }
  ]
});
request.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json;charset=UTF-8';
    const token = getToken();
    if (isString(token)) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  err => Promise.reject(err)
);

request.interceptors.response.use(
  response => {
    const { code, message } = response.data;
    if (code === 200) {
      return response;
    } else {
      throw new InterfaceError(message, code);
    }
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
      case 401 :
        throw new AuthorizationError('登录过期');
      case 400 :
        throw new HttpError(error.response.data.message, error.response.data.code);
      default :
        throw new HttpError(`接口调用异常, code: ${error.response.data.code}, message: ${error.response.data.message}`, error.response.status);
      }
    } else {
      return Promise.reject(error);
    }
  }
);

interface ApiOptions {
  body?: object,
  query?: object,
  params?: {
    [key: string]: string | number | boolean
  }
}

type Method = 'get' | 'post' | 'delete' | 'put' | 'patch';

export default new Proxy(request, {
  get(request: Axios, prop: Method) {
    return (url: string, options:ApiOptions) => {
      console.log('options', options);
      
      if (isObject(options.params)) {
        url.match(/{(.*?)}/g)?.forEach((m: string) => url = url.replace(m, String(options.params?.[m.replace(/{(.*?)}/g, '$1')])));
      }
      if (isObject(options.query)) {
        url = `${url}?${qs.stringify(options.query, { allowDots: true })}`;
      }
      return request[prop](url, options.body);
    };
  }
});