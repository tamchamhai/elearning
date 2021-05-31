import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAddCourse } from "../../../store/actions/admin.action";
import dateFormat from "dateformat";
import "./style.scss";

function ModalCourse() {
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("adminSignin")).accessToken;
  const { courseModal } = useSelector((state) => state.admin);
  const { courseKeyModal } = useSelector((state) => state.admin);
  const { userTutorList } = useSelector((state) => state.admin);
  const { changeAddCourse } = useSelector((state) => state.admin);
  const [uploadImg, setUploadImg] = useState({
    file: {},
  });
  const [course, setCourse] = useState({
    data: {
      courseID: courseModal?.maKhoaHoc,
      shortName: courseModal?.biDanh,
      courseName: courseModal?.tenKhoaHoc,
      descripbe: courseModal?.moTa,
      views: courseModal?.luotXem,
      student: courseModal?.soLuongHocVien,
      image: courseModal?.hinhAnh,
      groupID: courseModal?.maNhom,
      createDate: dateFormat("dd/MM/yyyy", new Date(courseModal?.ngayTao)),
      courseCategory: courseModal?.danhMucKhoaHoc?.maDanhMucKhoahoc,
      tutor: courseModal?.nguoiTao?.taiKhoan,
    },
  });
  // Handle function
  const handleOnChange = (event) => {
    const { name, value, files } = event.target;
    let courseProp = { ...course.data, [name]: value };
    setCourse({ ...course, data: courseProp });
    if (name === "image") {
      setCourse({
        ...course.data,
        image: files[0],
      });
    }
    console.log(name, value);
  };
  const handleUploadImg = (event) => {
    const { files } = event.target;
    setUploadImg({ file: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("maKhoaHoc", course.data.courseID);
    formData.append("biDanh", course.data.shortName);
    formData.append("tenKhoaHoc", course.data.courseName);
    formData.append("moTa", course.data.descripbe);
    formData.append("luotXem", course.data.views);
    formData.append("hinhAnh", uploadImg.file);
    formData.append("danhGia", course.data.student);
    formData.append("maNhom", course.data.groupID);
    formData.append(
      "ngayTao",
      dateFormat("dd-mm-yyyy", new Date(course.data.createDate))
    );
    formData.append("maDanhMucKhoaHoc", course.data.courseCategory);
    formData.append("taiKhoanNguoiTao", course.data.tutor);
    console.log(course.data.views);
    dispatch(postAddCourse(token, formData));
  };

  // Render Function
  const handleRenderTutorList = () => {
    return userTutorList?.map((item, index) => {
      return (
        <option value={`${item.taiKhoan}`} key={index}>
          {item.taiKhoan}
        </option>
      );
    });
  };

  // UseEffect
  useEffect(() => {
    if (courseModal) {
      setCourse({
        ...course,
        data: {
          courseID: courseModal?.maKhoaHoc,
          shortName: courseModal?.biDanh,
          courseName: courseModal?.tenKhoaHoc,
          descripbe: courseModal?.moTa,
          views: courseModal?.luotXem,
          student: courseModal?.soLuongHocVien,
          image: courseModal?.hinhAnh,
          groupID: courseModal?.maNhom,
          createDate: courseModal?.ngayTao,
          courseCategory: courseModal?.danhMucKhoaHoc?.maDanhMucKhoahoc,
          tutor: courseModal?.nguoiTao?.taiKhoan,
        },
      });
    } else {
      setCourse({
        ...course,
        data: {
          courseID: null,
          shortName: null,
          courseName: null,
          descripbe: null,
          views: null,
          student: null,
          image: null,
          groupID: null,
          createDate: null,
          courseCategory: null,
          tutor: null,
        },
      });
    }
  }, [courseModal, courseKeyModal, changeAddCourse]);

  return (
    <div>
      {/* Modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Header */}
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            {/* Body */}
            <div className="modal-body">
              <form autoComplete="off" className="add-course-form">
                {/* Part one */}
                <div className="part-one">
                  <div className="left">
                    <div className="form-group">
                      <label htmlFor="courseID" className="form-label">
                        Course ID
                      </label>
                      <input
                        type="text"
                        id="courseID"
                        className="form-add-course"
                        required
                        name="courseID"
                        onChange={handleOnChange}
                        value={course.data.courseID ? course.data.courseID : ""}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="courseName" className="form-label">
                        Course Name
                      </label>
                      <input
                        type="text"
                        id="courseName"
                        className="form-add-course"
                        required
                        name="courseName"
                        onChange={handleOnChange}
                        value={
                          course.data.courseName ? course.data.courseName : ""
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="courseCategory" className="form-label">
                        Course Category
                      </label>
                      <select
                        className="form-add-course"
                        id="courseCategory"
                        name="courseCategory"
                        required
                        onChange={handleOnChange}
                      >
                        <option value="Choose category!">
                          Choose category!
                        </option>
                        <option value="BackEnd">BackEnd</option>
                        <option value="Design">Design</option>
                        <option value="DiDong">DiDong</option>
                        <option value="FrontEnd">FrontEnd</option>
                        <option value="FullStack">FullStack</option>
                        <option value="TuDuy">TuDuy</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="groupID" className="form-label">
                        group
                      </label>
                      <select
                        className="form-add-course"
                        id="groupID"
                        name="groupID"
                        required
                        onChange={handleOnChange}
                        value={course.data.groupID ? course.data.groupID : ""}
                      >
                        <option value="Choose a group!">Choose a group!</option>
                        <option value="GP01">GP01</option>
                        <option value="GP02">GP02</option>
                        <option value="GP03">GP03</option>
                        <option value="GP04">GP04</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="createDate" className="form-label">
                        Create Date
                      </label>
                      <input
                        type="date"
                        id="createDate"
                        className="form-add-course"
                        required
                        data-date-format="DD MMMM YYYY"
                        name="createDate"
                        onChange={handleOnChange}
                        value={
                          course.data.createDate ? course.data.createDate : ""
                        }
                      />
                    </div>
                  </div>

                  <div className="right">
                    <div className="form-group">
                      <label htmlFor="student" className="form-label">
                        Student
                      </label>
                      <input
                        type="text"
                        id="student"
                        className="form-add-course"
                        required
                        name="student"
                        onChange={handleOnChange}
                        value={course.data.student ? course.data.student : ""}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="views" className="form-label">
                        Views
                      </label>
                      <input
                        type="text"
                        id="views"
                        className="form-add-course"
                        required
                        name="views"
                        onChange={handleOnChange}
                        value={course.data.views ? course.data.views : ""}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="shortName" className="form-label">
                        Short name
                      </label>
                      <input
                        type="text"
                        id="shortName"
                        className="form-add-course"
                        required
                        name="shortName"
                        onChange={handleOnChange}
                        value={
                          course.data.shortName ? course.data.shortName : ""
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="tutor" className="form-label">
                        Tutor
                      </label>
                      <select
                        className="form-add-course"
                        id="tutor"
                        name="tutor"
                        required
                        onChange={handleOnChange}
                      >
                        <option value="Choose Tutor">Choose Tutor!</option>
                        {handleRenderTutorList()}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="image" className="form-label">
                        Image
                      </label>
                      <input
                        type="file"
                        id="image"
                        className="form-add-course"
                        required
                        name="image"
                        onChange={handleUploadImg}
                      />
                    </div>
                  </div>
                </div>
                {/* Part two */}
                <div className="part-two">
                  <div className="descripbe">
                    <div className="form-group">
                      <label htmlFor="courseDescripbe">Course Describe</label>
                      <textarea
                        className="form-control"
                        id="courseDescripbe"
                        rows={5}
                        name="descripbe"
                        defaultValue={""}
                        onChange={handleOnChange}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/* Footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                {courseKeyModal === "add_key" ? "Add" : "Save changes"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCourse;
