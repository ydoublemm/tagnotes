import axios from 'axios'

import {message} from 'antd';

import {getToken} from '../utils/TokenUtil';





const service = axios.create();

// 把默认配置withCredentials改为true，就可以允许跨域携带cookie信息了
service.defaults.withCredentials = false;
service.defaults.timeout = 5000;
service.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';



service.interceptors.request.use(
    config => {

        const token = getToken();

        if(config.url.indexOf('/token_login') >0){
            //todo 判断token是否为空
            if(token == null || token == '' || token == undefined){
                /*const { dispatch } = store
                dispatch(routerRedux.replace('/user/login')) // 跳转到登录页*/
            }
            config.headers['tag_token'] = token ;// 增加客户端认证
        }


       /* const {url} = config
        if(/^\/api\//.test(url) && !token && !window.location.href.indexOf('user') > -1){
            const { dispatch } = store
            dispatch(routerRedux.replace('/user/login')) // 跳转到登录页
        }*/

        return config;
    },
    error => {
        // Do something with request error
        console.log(error) // for debug
        Promise.reject(error)
    }
)
// respone拦截器
service.interceptors.response.use(
    response => {
        /**
         * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
         * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
         */
        const res = response.data;
        // if (response.status === 401 || res.status === 40101) {
        //   MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
        //     confirmButtonText: '重新登录',
        //     cancelButtonText: '取消',
        //     type: 'warning'
        //   }).then(() => {
        //     store.dispatch('LogOut').then(() => {
        //       location.reload() // 为了重新实例化vue-router对象 避免bug
        //     })
        //   })
        //   return Promise.reject('error')
        // }
        // if (res.status === 30101) {
        //   Message({
        //     message: res.message,
        //     type: 'error',
        //     duration: 5 * 1000
        //   })
        //   return Promise.reject('error')
        // }
        // if (res.status === 40301) {
        //   Message({
        //     message: '当前用户无相关操作权限！',
        //     type: 'error',
        //     duration: 5 * 1000
        //   })
        //   return Promise.reject('error')
        // }
        if (response.status !== 200 && res.status !== 200) {
            message.error(response.data.message)
            // notification.error({
            //     message: res.status,
            //     description: res.message,
            // })
        } else {
            return response.data
        }
    },
    error => {
        // console.log(JSON.stringify(error)) // for debug
        if (error === undefined || error.code === 'ECONNABORTED') {
            message.warning('服务请求超时')
            return Promise.reject(error)
        }
        /*const { response: { status, statusText, data: { msg = '服务器发生错误' } }} = error
        const { response } = error
        const { dispatch } = store
        const text = codeMessage[status] || statusText || msg

        if (status === 400) {
            // message.warning('账户或密码错误！')
            dispatch(routerRedux.push('/user/login'))
        }
        const info = response.data
        if (status === 401 || info.status === 40101) {
            dispatch({
                type: 'login/logout',
            })
            // MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
            //     confirmButtonText: '重新登录',
            //     cancelButtonText: '取消',
            //     type: 'warning',
            // }).then(() => {
            //     store.dispatch('LogOut').then(() => {
            //         location.reload() // 为了重新实例化vue-router对象 避免bug
            //     })
            // })
        }
        if (status === 403) {
            dispatch(routerRedux.push('/exception/403'))
            // Notification.warning({
            //     title: '禁止',
            //     message: info.message,
            //     type: 'error',
            //     duration: 2 * 1000,
            // })
        }
        if (info.status === 30101) {
            dispatch(routerRedux.push('/exception/500'))
            // Notification.warning({
            //     title: '失败',
            //     message: info.message,
            //     type: 'error',
            //     duration: 2 * 1000,
            // })
        }
        if (response.status === 504) {
            dispatch(routerRedux.push('/exception/500'))
            // Message({
            //     message: '后端服务异常，请联系管理员！',
            //     type: 'error',
            //     duration: 5 * 1000,
            // })
        }
        message.error(`${status}:${text}`)
        // throw error
        // return error*/
        return Promise.reject(error)
    }
);



export default service;




