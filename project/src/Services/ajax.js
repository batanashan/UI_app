import axios from 'axios'
export class Ajax{
    static fnSendGetRequest(url){
return axios.get(url)
    }
}