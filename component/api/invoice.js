import axios from "./api";

export const getInvoices = async ( apartment_id) => {    
    try {
        const res = await axios.get(`/api/v1/apartment/${apartment_id}`);
        return res.data;
    } catch (error) {
        console.log("Lỗi: ", error.message || error);
        throw error;
    }
};