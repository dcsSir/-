// import { getToken, setToken, romoveToken } from "@/utils/auth"


const user = {
    state:{
        token: "",
        userName: '',
        userPhone: ''
    },
    mutations: {
        "SET_TOKEN": (state,token) => {
            state.token = token;
        }
    },
    actions: {
        login(){
            return new Promise((res,rej) => {

            })
        }
    }
}

export default user;