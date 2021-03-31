const tokenKey = "USER-TOKEN"

export function getToken(){
    return localStorage.getItem(tokenKey)
}
export function setToken(item){
    return localStorage.getItem(tokenKey,item)
}
export function romoveToken(){
    return localStorage.removeItem(tokenKey)
}