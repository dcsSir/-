import instance from "@/utils/request"

export function QRCode (query){
    return instance({
        url:'/api/login/hot/topic?limit=30&offset=30',
        methods: 'get'
    })
}