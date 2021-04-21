import {
  GET_CATEGORIES_FAILE,
  GET_CATEGORIES_SUCCESS,
  GET_COURSES_OF_CATEGORY_FAILE,
  GET_COURSES_OF_CATEGORY_SUCCESS,
  GET_LIST_COURSE_FAILE,
  GET_LIST_COURSE_SUCCESS,
} from "../constants/courses.const";

const initialState = {
  courseList: [],
  categories: [],
  coursesOfCategory: [
    {
      maKhoaHoc: "BE001",
      biDanh: "lap-trinh-web",
      tenKhoaHoc: "Lập trình Web",
      moTa: "Khóa học lập trình trang bị các kiến thức Full Stack.",
      luotXem: 2,
      hinhAnh:
        "https://elearning0706.cybersoft.edu.vn/hinhanh/lap-trinh-web.jpg",
      maNhom: "GP01",
      ngayTao: "03/04/2021",
      soLuongHocVien: 0,
      nguoiTao: {
        taiKhoan: "adminhai",
        hoTen: "admin",
        maLoaiNguoiDung: "GV",
        tenLoaiNguoiDung: "Giáo vụ",
      },
      danhMucKhoaHoc: {
        maDanhMucKhoahoc: "FullStack",
        tenDanhMucKhoaHoc: "Không tìm thấy khóa học",
      },
    },
  ],
  error: [],
};

const courseReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LIST_COURSE_SUCCESS:
      return { ...state, courseList: payload };
    case GET_LIST_COURSE_FAILE:
      return { ...state, error: payload };
    case GET_CATEGORIES_SUCCESS:
      return { ...state, categories: payload };
    case GET_CATEGORIES_FAILE:
      return { ...state, error: payload };
    case GET_COURSES_OF_CATEGORY_SUCCESS:
      return { ...state, coursesOfCategory: payload };
    case GET_COURSES_OF_CATEGORY_FAILE:
      return { ...state, error: payload };
    default:
      return { ...state };
  }
};

export default courseReducer;
