import service from './AxiosBase'

import Qs from 'qs'





export const post = (url,param) => {
    return service({
        url: url,
        method: 'post',
        transformRequest: [function (param) {
            // 对 data 进行任意转换处理
            return Qs.stringify(param)
        }],
        data: param
    });

};

export const get = (url,param) => {
    return service({
        url: url,
        method: 'get',
        transformRequest: [function (param) {
            // 对 data 进行任意转换处理
            return Qs.stringify(param)
        }],
        data: param
    });

};


