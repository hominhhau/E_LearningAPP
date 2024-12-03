import { ApiManager } from "./ApiManager";

export const Api_Search = {
  searchCourses: async (keyword) => {

    const response = await ApiManager.post('/searchCourse', { keyword });
    return response;

  }
};
