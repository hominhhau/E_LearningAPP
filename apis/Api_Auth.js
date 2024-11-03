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
    // login
    // login: async (email, password) => {
    //     return ApiManager.post('/login', { email, password });
    // }

    // quên mật khẩu
    forgotPassword: async (email) => {
        return ApiManager.post('/forgot-password', { email });
    },
    // reset mật khẩu
    resetPassword: async (email, resetToken, newPassword) => {
        return ApiManager.post('/reset-password', { email, resetToken, newPassword });
    }
}