import axios from "./api";

export const request = async (title, description, apartment_id) => {
    const data = {
        title,
        description
    };

    try {
        const res = await axios.post(`/api/v1/feedback/create/${apartment_id}`, data);
        return res.data;
    } catch (error) {
        console.log("Lỗi: ", error.message || error);
        throw error;
    }
};

export const getRequiments = async ( apartment_id) => {    
    try {
        const res = await axios.get(`/api/v1/apartment/${apartment_id}`);
        return res.data;
    } catch (error) {
        console.log("Lỗi: ", error.message || error);
        throw error;
    }
};