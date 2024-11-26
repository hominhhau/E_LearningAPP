import { ApiManager } from "./ApiManager";

export const Api_Search = {
    searchCourses: async (keyword) => {
        try {
          // Gửi request đến BE với từ khóa tìm kiếm
          const response = await ApiManager.post('/searchCourse', { keyword });
          console.log('API Response:', response); // Debug: Log kết quả trả về từ API
          // Kiểm tra nếu có kết quả trả về
          if (response && response.success && Array.isArray(response.data) ) {
            return response.data; // trả về danh sách khóa học
          } else {
            console.error('No courses found or error occurred');
            return []; // Trả về mảng rỗng nếu không có kết quả hoặc lỗi
          }
        } catch (error) {
          console.error('Error searching courses:', error);
          return []; // Trả về mảng rỗng nếu có lỗi xảy ra
        }
      }
};
