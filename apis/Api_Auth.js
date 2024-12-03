import { ApiManager } from "./ApiManager";

// register
export const Api_Auth = {
    // register: async (name, email, roleID, image, password) => {
    //     return ApiManager.post('/register', { name, email, roleID, image, password });
    // },
    // registerByPhone
    registerByPhone: async (name, email, phone, password, image, role) => {
        return ApiManager.post('/registerByPhone', { name, email, phone, password, image, role });
    },
    //loginByPhone
    loginByPhone: async (phone, password) => {
        return ApiManager.post('/loginByPhone', { phone, password });
    },
    // login
    // login: async (email, password) => {
    //     return ApiManager.post('/login', { email, password });
    // }

    // quên mật khẩu
    forgotPassword: async (email) => {
        return ApiManager.post('/forgot-password', { email });
    },
    // Verify reset token (optional, for validation)
    verifyResetToken: async ({ email, resetToken }) => {
        return ApiManager.post('/verify-reset-token', { email, resetToken });
    },
    // Đặt mật khẩu mới sau khi xác nhận mã reset
    resetPassword: async (email, resetToken, newPassword) => {
        console.log('Emaillllll:', email);
        console.log('Reset Tokennnnnn:', resetToken);
        console.log('New Passwordddd:', newPassword);
        return ApiManager.post('/reset-password', { email, resetToken, newPassword });
    },
    // changePassword
    changePassword: async (userID, oldPassword, newPassword) => {
        return ApiManager.post('/changePassword', { userID, oldPassword, newPassword });
    },


}