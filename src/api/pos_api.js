import axios from "axios";

import { API_URL } from "../config/api";

export const getProductByRefernce = (refer_id) => {
    return new Promise((resolve, reject) => {
        axios.post(API_URL + 'pos/' + refer_id, {})
            .then((res) => {
                return resolve(res.data);
            })
    })
}