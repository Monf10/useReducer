import axios from "axios";

export default function apiRequests(method,endpoint){ 
    return axios({
        url:"https://dummyjson.com"+ endpoint,
        method,
})
.then(response => response.data.products)
}