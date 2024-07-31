import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key:'AIzaSyCc4Cy7MQWx4WODEIfgDPmjTYLjgiWRB3M',
    cx:'b46d8966ba9274536'
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};
