import axios from "./api";

export const getStaff = async (staffId) => {
    try {
        const res = await axios.get(`/api/account/${staffId}`);
        return res.data; ư
    } catch (error) {
        console.log("Lỗi: ", error.message || error);
        throw error;
    }
};


export const getStaffIdFromAccountId = async () => {
    try {
        const storedUserData = await AsyncStorage.getItem('user');
        const accountId = storedUserData ? JSON.parse(storedUserData).id : null;

        if (!accountId) {
            console.log("Không tìm thấy account_id");
            return;
        }

        const staffRes = await axios.get('/api/v1/staff');

        const staff = staffRes.data.find(staffMember => staffMember.account.id === accountId);

        if (!staff) {
            console.log("Không tìm thấy nhân viên với account_id này");
            return;
        }

        console.log("Thông tin nhân viên: ", staff);
        return staff;
    } catch (error) {
        console.log("Lỗi: ", error.message || error);
        throw error;
    }
};
