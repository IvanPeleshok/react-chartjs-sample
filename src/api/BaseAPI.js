import Axios from "axios";

export class BaseAPI {
    baseURL = "https://api.apptica.com/";

    constructor() {
        this.instance = Axios.create({
            baseURL: this.baseURL,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    getMethod = (url) => {
        return this.instance.get(url)
            
    };
}
