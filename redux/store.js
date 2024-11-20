import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/redux/slices/userSlices" // Đường dẫn tới userSlice

const store = configureStore({
    reducer: {
        user: userReducer, // Quản lý trạng thái user
    },
});

export default store;
