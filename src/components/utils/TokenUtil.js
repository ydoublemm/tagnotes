
const TOKEN =  'tag_token';

export const getToken= () =>{
    if(!window.localStorage){
        return '';
    }else {
        return window.localStorage.getItem(TOKEN);
    }
};

export const setToken= (token) =>{
    if(!window.localStorage){
        return ;
    }else {
        return window.localStorage.setItem(TOKEN,token);
    }
};

export const clearToken= (token) =>{
    if(token != null && token != '' && token != undefined){
        window.localStorage.removeItem(TOKEN)
    }
};
