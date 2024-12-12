import axios from "./api";

export const getUser = async (userId) => {
    try {
        if (!userId || isNaN(userId)) {
            throw new Error('ID người dùng không hợp lệ');
        }
        console.log("Kiểm tra userId:", userId);

        const userRes = await axios.get(`/api/account/${userId}`);
        if (!userRes.data) {
            throw new Error('Không tìm thấy thông tin người dùng');
        }
        console.log("Thông tin người dùng: ", userRes.data);

        const apartmentRes = await axios.get(`/api/account/${userId}/apartment`);
        console.log("Thông tin căn hộ: ", apartmentRes.data);

        // if (!apartmentRes.data || !apartmentRes.data.apartment_id) {
        //     throw new Error('Không tìm thấy thông tin căn hộ');
        // }

        const apartment_id = apartmentRes.data.apartment_id;

        return {
            user: userRes.data,
            apartment: apartmentRes.data
        };
    } catch (error) {
        console.log("Lỗi: ", error.message || error);
        throw error;
    }
}

export const getUser2=async (userId)=> {
    try {
        const res = await axios.get(`/api/account/${userId}/apartment`);
        return res.data;
    } catch (error) {
        console.log("Lỗi get user 2: ", error.message || error);
        throw error;
    }
}

