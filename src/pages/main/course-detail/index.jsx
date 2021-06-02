import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Registor from "../../../utils/button/registor";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CheckIcon from "@material-ui/icons/Check";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import StarRateIcon from "@material-ui/icons/StarRate";
import StarHalf from "@material-ui/icons/StarHalf";
import StarBorder from "@material-ui/icons/StarBorder";
import Star from "@material-ui/icons/Star";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import PeopleIcon from "@material-ui/icons/People";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import TimerIcon from "@material-ui/icons/Timer";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import NoteIcon from "@material-ui/icons/Note";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import CodeIcon from "@material-ui/icons/Code";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import SpaIcon from "@material-ui/icons/Spa";
import { IconButton } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import "./style.scss";
import UpdateIcon from "@material-ui/icons/Update";
import LanguageIcon from "@material-ui/icons/Language";
import AddItemToCard from "../../../utils/button/addItemToCard";
import BuyNowBtn from "../../../utils/button/buyNow";
import { getCourseDetail } from "../../../store/actions/courses.action";
import {
  getCourseAdminPage,
  getUserAdminPage,
} from "../../../store/actions/admin.action";
import Comment from "../../../components/main/comment";
import SpinnerLoading from "../../../components/spinner-loading";

export default function CourseDetail() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const { courseDetail } = useSelector((state) => state.courses);
  const { courseAdminPage } = useSelector((state) => state.admin);
  const { userAdminPage } = useSelector((state) => state.admin);
  const { loading } = useSelector((state) => state.loading);
  const { userSignin } = useSelector((state) => state.user);
  const briefArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let click_description_show_more = false;
  let click_instructor_show_more = false;
  const [reload, setReload] = useState(false);

  // Function
  const handleExpandAll = () => {
    let buttons = document.getElementsByClassName("collapse-btn");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].click();
    }
  };
  const handleShowMore = () => {
    click_description_show_more = !click_description_show_more;
    let btn_show_more = document.getElementById("text-description");
    if (click_description_show_more) {
      btn_show_more.style.height = "100%";
      document.getElementById("descript-showmore").innerHTML = "Show Less";
    } else {
      btn_show_more.style.height = "300px";
      document.getElementById("descript-showmore").innerHTML = "Show More";
      document
        .getElementById("descript-showless")
        .classList.add("rota-showmore");
    }
  };
  const handleInstructorShowMore = () => {
    click_instructor_show_more = !click_instructor_show_more;
    if (click_instructor_show_more) {
      document.getElementById("instructor-introduction").style.height = "100%";
    } else {
      document.getElementById("instructor-introduction").style.height = "200px";
    }
  };
  const handlePickBar = (num) => {
    let bar = document.getElementsByClassName("bar-star");
    for (let i = 0; i < bar.length; i++) {
      bar[i].style.opacity = "0.5";
      if (i === num - 1) {
        bar[i].style.opacity = "1";
      }
    }
  };

  // Render Function
  const renderBriefCourse = () => {
    return briefArray.map((item, index) => {
      return (
        <div className="item" key={index}>
          <div className="header">
            <div className="title">
              <span
                className="collapse-btn"
                data-toggle="collapse"
                data-target={`#collapse${index + 1}`}
              >
                <ExpandLessIcon />
              </span>
              <span>Stepping into the New World</span>
            </div>
            <div className="times">
              <span>6 lectures - 14min</span>
            </div>
          </div>
          <div
            className="content-brief-course collapse"
            id={`collapse${index + 1}`}
          >
            <div className="item-content">
              <div className="title">
                <span>
                  <PlayCircleFilledIcon viewBox="0 0 34 34" />
                </span>
                <span>Introduction to the course</span>
              </div>
              <div className="times">
                <span>02:02</span>
              </div>
            </div>
            <div className="item-content">
              <div className="title">
                <span>
                  <PlayCircleFilledIcon viewBox="0 0 34 34" />
                </span>
                <span>Remaster in Progress</span>
              </div>
              <div className="times">
                <span>14:02</span>
              </div>
            </div>
            <div className="item-content">
              <div className="title">
                <span>
                  <PlayCircleFilledIcon viewBox="0 0 34 34" />
                </span>
                <span>Video Quality</span>
              </div>
              <div className="times">
                <span>20:12</span>
              </div>
            </div>
            <div className="item-content">
              <div className="title">
                <span>
                  <PlayCircleFilledIcon viewBox="0 0 34 34" />
                </span>
                <span>Subtitles</span>
              </div>
              <div className="times">
                <span>12:02</span>
              </div>
            </div>
            <div className="item-content">
              <div className="title">
                <span>
                  <PlayCircleFilledIcon viewBox="0 0 34 34" />
                </span>
                <span>How to Get Help</span>
              </div>
              <div className="times">
                <span>02:42</span>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  const renderBtn = () => {
    if (userSignin) {
      return (
        <div className="registor">
          <AddItemToCard courseCart={courseDetail} />
          <BuyNowBtn
            courseID={courseId}
            userName={userSignin.taiKhoan}
            token={userSignin.accessToken}
          />
        </div>
      );
    } else {
      return (
        <div className="registor">
          <Registor />
        </div>
      );
    }
  };
  const renderCourseAlsoBought = () => {
    return courseAdminPage?.map((item, index) => {
      return (
        <div className="item-course" key={index}>
          <div className="name">
            <img src={item.hinhAnh} alt="course img" />
            <div className="text">
              <NavLink
                to={`/course-detail/${item.maKhoaHoc}`}
                exact={true}
                onClick={() => {
                  setReload(!reload);
                }}
              >
                <h2>Python for Data Science and Machine Learning Bootcamp</h2>
              </NavLink>
              <span>Bestseller</span>
              <span>25 total hours</span>
              <span>Update 05/2021</span>
            </div>
          </div>
          <div className="votes">
            4.6
            <StarRateIcon />
          </div>
          <div className="student">
            <PeopleIcon viewBox="0 0 30 30" /> 443.123
          </div>
          <div className="price">9.99$</div>
          <div className="wish-list">
            <FavoriteBorderIcon />
          </div>
        </div>
      );
    });
  };

  useEffect(
    function () {
      dispatch(getCourseDetail(courseId));
      dispatch(getCourseAdminPage("", 2, "GP03"));
      dispatch(getUserAdminPage("GP02", 2, ""));
    },
    [reload]
  );

  const renderCourseDetail = () => {
    if (loading) {
      return (
        <div className="backdrop-loading">
          <SpinnerLoading />
        </div>
      );
    } else {
      return (
        <>
          <div className="course-detail">
            <div className="banner row">
              <div className="content col-12 col-lg-8">
                <NavLink to="/category" exact={true} className="nav-link">
                  {courseDetail?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
                </NavLink>
                <h1>{courseDetail.tenKhoaHoc}</h1>
                <p>{courseDetail.moTa}</p>
                <span className="points">4.5</span>
                <span className="stars">
                  <StarIcon viewBox="0 0 30 30" />
                  <StarIcon viewBox="0 0 30 30" />
                  <StarIcon viewBox="0 0 30 30" />
                  <StarHalfIcon viewBox="0 0 30 30" />
                  <StarBorderIcon viewBox="0 0 30 30" />
                </span>
                <span className="rating">({courseDetail.luotXem} votes)</span>
                <span className="student">
                  {" "}
                  {courseDetail.soLuongHocVien} Students
                </span>
                <div className="author">
                  <p>
                    Created by <NavLink to="/">Russo</NavLink>,
                    <NavLink to="/">Tony Stark</NavLink>
                  </p>
                </div>
                <div className="update">
                  <span>
                    {" "}
                    <UpdateIcon />
                    Lastest Update 3/21
                  </span>
                  <span>
                    {" "}
                    <LanguageIcon /> Vietnamese
                  </span>
                </div>
                <div className="btns d-flex justify-content-start">
                  {renderBtn()}
                  <div className="btn-wishList">
                    <IconButton color="primary" className="hov">
                      <FavoriteIcon />
                    </IconButton>
                  </div>
                </div>
              </div>
              <div className="photo col-12 col-lg-4 row  pl-md-1">
                <img
                  src={courseDetail.hinhAnh}
                  className="col-12"
                  alt="photo of course"
                />
              </div>
            </div>

            {/* detail course */}
            <div className="container detail">
              <div className="detail-left">
                {/* What you'll learn */}
                <div className="what-will-learn">
                  <h1>What you'll learn</h1>
                  <div className="checked">
                    <div className="left">
                      <div className="item">
                        <CheckIcon viewBox="0 0 30 30" />
                        <p>
                          Have a fundamental understanding of the Python
                          programming language.
                        </p>
                      </div>
                      <div className="item">
                        <CheckIcon viewBox="0 0 30 30" />
                        <p>
                          Acquire the pre-requisite Python skills to move into
                          specific branches - Machine Learning, Data Science,
                          etc..
                        </p>
                      </div>
                      <div className="item">
                        <CheckIcon viewBox="0 0 30 30" />
                        <p>
                          Understand how to create your own Python programs.
                        </p>
                      </div>
                      <div className="item">
                        <CheckIcon viewBox="0 0 30 30" />
                        <p>Understand both Python 2 and Python 3.</p>
                      </div>
                    </div>
                    <div className="right">
                      <div className="item">
                        <CheckIcon viewBox="0 0 30 30" />
                        <p>
                          Have the skills and understanding of Python to
                          confidently apply for Python programming jobs.
                        </p>
                      </div>
                      <div className="item">
                        <CheckIcon viewBox="0 0 30 30" />
                        <p>
                          Add the Python Object-Oriented Programming (OOP)
                          skills to your résumé.
                        </p>
                      </div>
                      <div className="item">
                        <CheckIcon viewBox="0 0 30 30" />
                        <p>
                          Learn Python from experienced professional software
                          developers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Course content */}
                <div className="course-content">
                  <h1>Course Content</h1>
                  <div className="course-brief">
                    <div className="times">
                      <div className="length">
                        <span>22 sections</span>
                        <span> - 444 lectures</span>
                        <span> - 62h 8m total length</span>
                      </div>
                      <div className="expand-section">
                        <span onClick={handleExpandAll}>
                          Expand all sections
                        </span>
                      </div>
                    </div>
                    <div className="course-introduction">
                      {renderBriefCourse()}
                    </div>
                  </div>
                </div>
                {/* Course require */}
                <div className="course-require">
                  <h1>Requirements</h1>
                  <div className="text">
                    <FiberManualRecordIcon viewBox="0 0 44 44 " />
                    <p>
                      You’ve either already got it or it’s FREE. Here’s the
                      checklist:
                    </p>
                  </div>
                  <div className="text">
                    <FiberManualRecordIcon viewBox="0 0 44 44 " />
                    <p>
                      Your enthusiasm to learn this go-to programming language.
                      It’s a valuable lifetime skill which you can’t un-learn!
                    </p>
                  </div>
                  <div className="text">
                    <FiberManualRecordIcon viewBox="0 0 44 44 " />
                    <p>
                      A computer - Windows, Mac, and Linux are all supported.
                      Setup and installation instructions are included for each
                      platform.
                    </p>
                  </div>
                  <div className="text">
                    <FiberManualRecordIcon viewBox="0 0 44 44 " />
                    <p>
                      You’ve either already got it or it’s FREE. Here’s the
                      checklist:
                    </p>
                  </div>
                  <div className="text">
                    <FiberManualRecordIcon viewBox="0 0 44 44 " />
                    <p>
                      Everything else needed to start programming in Python is
                      already included in the course.
                    </p>
                  </div>
                  <div className="text">
                    <FiberManualRecordIcon viewBox="0 0 44 44 " />
                    <p>
                      You’ve either already got it or it’s FREE. Here’s the
                      checklist:
                    </p>
                  </div>
                </div>
                {/* Course description */}
                <div className="course-description">
                  <div className="text-description" id="text-description">
                    <h1>Description</h1>
                    <p>Whether you want to:</p>
                    <p>
                      - Lorem ipsum dolor sit amet consectetur, adipisicing
                      elit. Id, provident!
                    </p>
                    <p>
                      - Lorem ipsum dolor sit, amet consectetur adipisicing
                      elit. Voluptate, blanditiis corrupti!
                    </p>
                    <p>
                      - Lorem ipsum dolor sit amet consectetur, adipisicing
                      elit. Culpa?
                    </p>
                    <p>- Lorem ipsum dolor sit amet.</p>
                    <p>
                      ... Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Laboriosam aut et recusandae hic officiis doloribus
                      eaque nobis veniam maiores quis.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Commodi quis voluptates fugit debitis fugiat itaque sequi
                      temporibus quibusdam nostrum tempora. Commodi, quibusdam
                      quod. Quos dolorum consectetur optio est, sunt porro
                      corporis dolores libero excepturi iste, culpa ipsum
                      officia. Totam, nobis illum fuga iste voluptatum eaque ea
                      voluptatem. Ut, enim iste.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nobis sint ratione totam blanditiis? Repellendus vero non
                      et perspiciatis hic, aut dicta. Eligendi molestiae
                      voluptates velit corporis commodi. Dolore accusantium
                      eveniet, fuga adipisci voluptas voluptates possimus
                      cupiditate necessitatibus ea magnam illo facere quae autem
                      quaerat iusto vel at esse similique ab laudantium rerum
                      ratione quibusdam minus! Accusamus iste nulla at itaque
                      eveniet, sed autem modi et, labore dolorem voluptate
                      consequatur! Magni.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                      omnis, voluptatem tempore obcaecati placeat expedita!
                      Incidunt, est, vero minus odit quibusdam consequatur quod
                      libero quo optio ipsa quaerat tempore excepturi vitae non
                      id reprehenderit deserunt molestiae deleniti dolorem
                      laudantium fuga voluptatum vel.
                    </p>
                    <strong>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Excepturi, commodi.
                    </strong>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Recusandae, ad. Adipisci exercitationem sint maiores
                      suscipit explicabo libero, rem alias voluptates maxime
                      quidem quas molestias quasi tempore vero odit, sunt
                      impedit accusantium est, quod natus rerum! Illum eligendi,
                      facilis eaque, libero quaerat veniam, unde voluptatem vel
                      recusandae assumenda ullam velit commodi deserunt fugiat
                      dicta praesentium impedit nam possimus accusantium
                      officiis dolore consequuntur ipsam! Rem, quaerat
                      molestiae. Quo, fuga sint doloremque ex ab laborum nisi
                      harum aliquid aut tempore recusandae molestias, eligendi
                      dicta similique ipsa ad numquam. Animi quos perferendis
                      voluptate. Nesciunt porro tempore nam voluptates
                      temporibus voluptatum debitis nemo tempora accusamus?
                    </p>
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fuga, possimus exercitationem.
                    </strong>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quis quaerat sapiente earum? Veniam atque et fugiat
                      veritatis accusantium obcaecati dolore dicta doloremque
                      rem quidem culpa incidunt iusto, aliquam maxime labore
                      perspiciatis cumque, est enim sed molestias commodi ipsum
                      debitis? Et fugiat dolore dicta porro qui, aliquam
                      asperiores sit laborum earum iste non autem obcaecati
                      possimus veritatis beatae quibusdam pariatur eligendi
                      iusto consectetur ipsum commodi numquam excepturi, cumque
                      eum? Labore magni quae ullam quam nobis quibusdam, sunt
                      tempore veritatis et repellat doloribus nulla voluptatibus
                      at ratione! Pariatur quo voluptatibus enim voluptatem
                      labore maxime magni perferendis deserunt? Expedita
                      delectus sed architecto libero, saepe, nostrum unde
                      doloremque laborum placeat nam commodi voluptatem
                      provident.
                    </p>
                    <strong>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Fugiat in accusantium ex commodi.
                    </strong>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Autem numquam eveniet at unde aliquid, sit ratione
                      voluptatem ullam eius illum, quod magnam odit labore
                      facilis ab impedit rem dicta enim. Omnis architecto
                      asperiores ratione at harum earum adipisci. Exercitationem
                      possimus sint vitae ullam! Quisquam esse fugit ullam alias
                      adipisci aliquam veniam, odit distinctio rerum maxime
                      atque impedit enim aspernatur repellendus perspiciatis
                      quas vel voluptates iste rem quis praesentium culpa optio?
                      Dicta aliquid magni ut tenetur fugit id architecto,
                      perferendis dolor necessitatibus, quae porro libero sint
                      eius molestiae. Odit facere voluptatum adipisci optio
                      corrupti excepturi veniam eligendi vitae tempore. Velit
                      iste tempora eos delectus sequi eligendi asperiores, nisi
                      quidem corrupti magni adipisci maxime praesentium esse
                      laboriosam? Architecto provident ipsum magnam quibusdam
                      autem ducimus dolores sint numquam perspiciatis! Autem
                      quos consectetur, corrupti aspernatur sequi deserunt earum
                      sint veniam nihil corporis in facilis!
                    </p>
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fuga, possimus exercitationem.
                    </strong>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quis quaerat sapiente earum? Veniam atque et fugiat
                      veritatis accusantium obcaecati dolore dicta doloremque
                      rem quidem culpa incidunt iusto, aliquam maxime labore
                      perspiciatis cumque, est enim sed molestias commodi ipsum
                      debitis? Et fugiat dolore dicta porro qui, aliquam
                      asperiores sit laborum earum iste non autem obcaecati
                      possimus veritatis beatae quibusdam pariatur eligendi
                      iusto consectetur ipsum commodi numquam excepturi, cumque
                      eum? Labore magni quae ullam quam nobis quibusdam, sunt
                      tempore veritatis et repellat doloribus nulla voluptatibus
                      at ratione! Pariatur quo voluptatibus enim voluptatem
                      labore maxime magni perferendis deserunt? Expedita
                      delectus sed architecto libero, saepe, nostrum unde
                      doloremque laborum placeat nam commodi voluptatem
                      provident.
                    </p>
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fuga, possimus exercitationem.
                    </strong>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quis quaerat sapiente earum? Veniam atque et fugiat
                      veritatis accusantium obcaecati dolore dicta doloremque
                      rem quidem culpa incidunt iusto, aliquam maxime labore
                      perspiciatis cumque, est enim sed molestias commodi ipsum
                      debitis? Et fugiat dolore dicta porro qui, aliquam
                      asperiores sit laborum earum iste non autem obcaecati
                      possimus veritatis beatae quibusdam pariatur eligendi
                      iusto consectetur ipsum commodi numquam excepturi, cumque
                      eum? Labore magni quae ullam quam nobis quibusdam, sunt
                      tempore veritatis et repellat doloribus nulla voluptatibus
                      at ratione! Pariatur quo voluptatibus enim voluptatem
                      labore maxime magni perferendis deserunt? Expedita
                      delectus sed architecto libero, saepe, nostrum unde
                      doloremque laborum placeat nam commodi voluptatem
                      provident.
                    </p>
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fuga, possimus exercitationem.
                    </strong>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quis quaerat sapiente earum? Veniam atque et fugiat
                      veritatis accusantium obcaecati dolore dicta doloremque
                      rem quidem culpa incidunt iusto, aliquam maxime labore
                      perspiciatis cumque, est enim sed molestias commodi ipsum
                      debitis? Et fugiat dolore dicta porro qui, aliquam
                      asperiores sit laborum earum iste non autem obcaecati
                      possimus veritatis beatae quibusdam pariatur eligendi
                      iusto consectetur ipsum commodi numquam excepturi, cumque
                      eum? Labore magni quae ullam quam nobis quibusdam, sunt
                      tempore veritatis et repellat doloribus nulla voluptatibus
                      at ratione! Pariatur quo voluptatibus enim voluptatem
                      labore maxime magni perferendis deserunt? Expedita
                      delectus sed architecto libero, saepe, nostrum unde
                      doloremque laborum placeat nam commodi voluptatem
                      provident.
                    </p>
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fuga, possimus exercitationem.
                    </strong>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quis quaerat sapiente earum? Veniam atque et fugiat
                      veritatis accusantium obcaecati dolore dicta doloremque
                      rem quidem culpa incidunt iusto, aliquam maxime labore
                      perspiciatis cumque, est enim sed molestias commodi ipsum
                      debitis? Et fugiat dolore dicta porro qui, aliquam
                      asperiores sit laborum earum iste non autem obcaecati
                      possimus veritatis beatae quibusdam pariatur eligendi
                      iusto consectetur ipsum commodi numquam excepturi, cumque
                      eum? Labore magni quae ullam quam nobis quibusdam, sunt
                      tempore veritatis et repellat doloribus nulla voluptatibus
                      at ratione! Pariatur quo voluptatibus enim voluptatem
                      labore maxime magni perferendis deserunt? Expedita
                      delectus sed architecto libero, saepe, nostrum unde
                      doloremque laborum placeat nam commodi voluptatem
                      provident.
                    </p>
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fuga, possimus exercitationem.
                    </strong>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quis quaerat sapiente earum? Veniam atque et fugiat
                      veritatis accusantium obcaecati dolore dicta doloremque
                      rem quidem culpa incidunt iusto, aliquam maxime labore
                      perspiciatis cumque, est enim sed molestias commodi ipsum
                      debitis? Et fugiat dolore dicta porro qui, aliquam
                      asperiores sit laborum earum iste non autem obcaecati
                      possimus veritatis beatae quibusdam pariatur eligendi
                      iusto consectetur ipsum commodi numquam excepturi, cumque
                      eum? Labore magni quae ullam quam nobis quibusdam, sunt
                      tempore veritatis et repellat doloribus nulla voluptatibus
                      at ratione! Pariatur quo voluptatibus enim voluptatem
                      labore maxime magni perferendis deserunt? Expedita
                      delectus sed architecto libero, saepe, nostrum unde
                      doloremque laborum placeat nam commodi voluptatem
                      provident.
                    </p>
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fuga, possimus exercitationem.
                    </strong>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quis quaerat sapiente earum? Veniam atque et fugiat
                      veritatis accusantium obcaecati dolore dicta doloremque
                      rem quidem culpa incidunt iusto, aliquam maxime labore
                      perspiciatis cumque, est enim sed molestias commodi ipsum
                      debitis? Et fugiat dolore dicta porro qui, aliquam
                      asperiores sit laborum earum iste non autem obcaecati
                      possimus veritatis beatae quibusdam pariatur eligendi
                      iusto consectetur ipsum commodi numquam excepturi, cumque
                      eum? Labore magni quae ullam quam nobis quibusdam, sunt
                      tempore veritatis et repellat doloribus nulla voluptatibus
                      at ratione! Pariatur quo voluptatibus enim voluptatem
                      labore maxime magni perferendis deserunt? Expedita
                      delectus sed architecto libero, saepe, nostrum unde
                      doloremque laborum placeat nam commodi voluptatem
                      provident.
                    </p>
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fuga, possimus exercitationem.
                    </strong>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quis quaerat sapiente earum? Veniam atque et fugiat
                      veritatis accusantium obcaecati dolore dicta doloremque
                      rem quidem culpa incidunt iusto, aliquam maxime labore
                      perspiciatis cumque, est enim sed molestias commodi ipsum
                      debitis? Et fugiat dolore dicta porro qui, aliquam
                      asperiores sit laborum earum iste non autem obcaecati
                      possimus veritatis beatae quibusdam pariatur eligendi
                      iusto consectetur ipsum commodi numquam excepturi, cumque
                      eum? Labore magni quae ullam quam nobis quibusdam, sunt
                      tempore veritatis et repellat doloribus nulla voluptatibus
                      at ratione! Pariatur quo voluptatibus enim voluptatem
                      labore maxime magni perferendis deserunt? Expedita
                      delectus sed architecto libero, saepe, nostrum unde
                      doloremque laborum placeat nam commodi voluptatem
                      provident.
                    </p>
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fuga, possimus exercitationem.
                    </strong>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quis quaerat sapiente earum? Veniam atque et fugiat
                      veritatis accusantium obcaecati dolore dicta doloremque
                      rem quidem culpa incidunt iusto, aliquam maxime labore
                      perspiciatis cumque, est enim sed molestias commodi ipsum
                      debitis? Et fugiat dolore dicta porro qui, aliquam
                      asperiores sit laborum earum iste non autem obcaecati
                      possimus veritatis beatae quibusdam pariatur eligendi
                      iusto consectetur ipsum commodi numquam excepturi, cumque
                      eum? Labore magni quae ullam quam nobis quibusdam, sunt
                      tempore veritatis et repellat doloribus nulla voluptatibus
                      at ratione! Pariatur quo voluptatibus enim voluptatem
                      labore maxime magni perferendis deserunt? Expedita
                      delectus sed architecto libero, saepe, nostrum unde
                      doloremque laborum placeat nam commodi voluptatem
                      provident.
                    </p>
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fuga, possimus exercitationem.
                    </strong>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quis quaerat sapiente earum? Veniam atque et fugiat
                      veritatis accusantium obcaecati dolore dicta doloremque
                      rem quidem culpa incidunt iusto, aliquam maxime labore
                      perspiciatis cumque, est enim sed molestias commodi ipsum
                      debitis? Et fugiat dolore dicta porro qui, aliquam
                      asperiores sit laborum earum iste non autem obcaecati
                      possimus veritatis beatae quibusdam pariatur eligendi
                      iusto consectetur ipsum commodi numquam excepturi, cumque
                      eum? Labore magni quae ullam quam nobis quibusdam, sunt
                      tempore veritatis et repellat doloribus nulla voluptatibus
                      at ratione! Pariatur quo voluptatibus enim voluptatem
                      labore maxime magni perferendis deserunt? Expedita
                      delectus sed architecto libero, saepe, nostrum unde
                      doloremque laborum placeat nam commodi voluptatem
                      provident.
                    </p>
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fuga, possimus exercitationem.
                    </strong>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quis quaerat sapiente earum? Veniam atque et fugiat
                      veritatis accusantium obcaecati dolore dicta doloremque
                      rem quidem culpa incidunt iusto, aliquam maxime labore
                      perspiciatis cumque, est enim sed molestias commodi ipsum
                      debitis? Et fugiat dolore dicta porro qui, aliquam
                      asperiores sit laborum earum iste non autem obcaecati
                      possimus veritatis beatae quibusdam pariatur eligendi
                      iusto consectetur ipsum commodi numquam excepturi, cumque
                      eum? Labore magni quae ullam quam nobis quibusdam, sunt
                      tempore veritatis et repellat doloribus nulla voluptatibus
                      at ratione! Pariatur quo voluptatibus enim voluptatem
                      labore maxime magni perferendis deserunt? Expedita
                      delectus sed architecto libero, saepe, nostrum unde
                      doloremque laborum placeat nam commodi voluptatem
                      provident.
                    </p>
                  </div>
                  <div className="btn-collapse" onClick={handleShowMore}>
                    <span id="descript-showmore">Show more</span>
                    <span id="descript-showless">
                      <ExpandLessIcon />
                    </span>
                  </div>
                </div>
                {/* Course review */}
                <div className="course-review">
                  <h1>Course Featured Review</h1>
                  <div className="avatar">
                    <div className="image">
                      <img src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairDreads&accessoriesType=Prescription02&hairColor=Auburn&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=EyeRoll&eyebrowType=Angry&mouthType=Disbelief&skinColor=Yellow" />
                    </div>
                    <div className="info">
                      <p>Karim Benzama</p>
                      <p>17 courses</p>
                      <p>7 reviews</p>
                    </div>
                  </div>
                  <div className="votes">
                    <span>
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                    </span>
                    <span>11 months ago</span>
                  </div>
                  <p>
                    Tim Buchalka really does a good job being very thorough &
                    not boring at the same time. Plus, you get to learn the
                    australian accent 😄. For me the best were 2 sections & 1
                    recurring topic: oop, quering dbs (additional benefit for
                    those who don't know sql: you'll learn the basics here) &
                    tkinter gui. And if you think how much skill and knowledge
                    you're getting for the $ you pay - it's a no-brainer. Again:
                    52 hours of a top-notch video content with loads of
                    excercises and code snippets.
                  </p>
                  <div className="likes">
                    <p>Was this review useful</p>
                    <div className="like-btn">
                      <div className="like-icon">
                        <ThumbUpAltOutlinedIcon className="like-up " />
                      </div>
                      <div className="like-icon">
                        <ThumbDownAltOutlinedIcon className="like-down " />
                      </div>
                      <span>Report</span>
                    </div>
                  </div>
                </div>
                <div className="course-review">
                  <h1>Course Featured Review</h1>
                  <div className="avatar">
                    <div className="image">
                      <img src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairDreads&accessoriesType=Prescription02&hairColor=Auburn&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=EyeRoll&eyebrowType=Angry&mouthType=Disbelief&skinColor=Yellow" />
                    </div>
                    <div className="info">
                      <p>Karim Benzama</p>
                      <p>17 courses</p>
                      <p>7 reviews</p>
                    </div>
                  </div>
                  <div className="votes">
                    <span>
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                    </span>
                    <span>11 months ago</span>
                  </div>
                  <p>
                    Tim Buchalka really does a good job being very thorough &
                    not boring at the same time. Plus, you get to learn the
                    australian accent 😄. For me the best were 2 sections & 1
                    recurring topic: oop, quering dbs (additional benefit for
                    those who don't know sql: you'll learn the basics here) &
                    tkinter gui. And if you think how much skill and knowledge
                    you're getting for the $ you pay - it's a no-brainer. Again:
                    52 hours of a top-notch video content with loads of
                    excercises and code snippets.
                  </p>
                  <div className="likes">
                    <p>Was this review useful</p>
                    <div className="like-btn">
                      <div className="like-icon">
                        <ThumbUpAltOutlinedIcon className="like-up " />
                      </div>
                      <div className="like-icon">
                        <ThumbDownAltOutlinedIcon className="like-down " />
                      </div>
                      <span>Report</span>
                    </div>
                  </div>
                </div>
                {/* Course also bought */}
                <div className="course-also-bought">
                  <h1>Students also bought</h1>
                  {renderCourseAlsoBought()}
                </div>
                {/* Instructors */}
                <div className="course-instructors">
                  <h1>Instructors</h1>
                  <div className="instructor-item">
                    <h2>Tim Buchalka</h2>
                    <p>
                      Java Android Python and C# Expert Developer - 924K+
                      students
                    </p>
                    <div className="instructor-avatar">
                      <img
                        src="https://i.pravatar.cc/150"
                        alt="instructor img"
                      />
                      <div className="text">
                        <p>
                          <Star className="ins-icon" /> 4.5 Instructor Rating
                        </p>
                        <p>
                          <WbIncandescentIcon className="ins-icon" /> 234.553
                          Reviews
                        </p>
                        <p>
                          <PeopleIcon className="ins-icon" /> 959.325 Students
                        </p>
                        <p>
                          <PlayCircleFilledIcon className="ins-icon" /> Courses
                        </p>
                      </div>
                    </div>
                    <div
                      className="instructor-introduction"
                      id="instructor-introduction"
                    >
                      <p>
                        Tim's been a professional software developer for over 35
                        years. During his career, he has worked for major
                        companies such as Fujitsu, Mitsubishi, and Saab.
                      </p>
                      <p>
                        His video courses are used to train developers in major
                        companies such as Mercedes-Benz, Paypal, VW, Pitney
                        Bowes, IBM, and T-Mobile just to name a few (via the
                        Udemy for Business program).
                      </p>
                      <p>
                        What makes Tim unique is his professional programming
                        career - many instructors have never programmed
                        professionally, let alone had a distinguished
                        professional development career like Tim.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores tempora quae placeat corrupti ad vitae alias,
                        ea, quis autem fugiat dolore eius tempore veritatis,
                        rerum facilis corporis eos cupiditate explicabo nisi
                        labore. Adipisci aliquid veniam iusto ipsum voluptatem
                        ex eligendi quas modi amet consectetur, corporis
                        possimus commodi odit enim! Voluptate.
                      </p>
                      <strong>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias, libero.
                      </strong>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus voluptatem maiores omnis repellendus.
                        Voluptatem officia quae molestiae porro magni debitis?
                        Perspiciatis impedit voluptate reprehenderit vel
                        temporibus laborum ipsum quisquam nobis possimus
                        adipisci ad, consectetur hic voluptatibus voluptatem quo
                        ullam incidunt?
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Animi itaque magni aspernatur exercitationem
                        obcaecati repudiandae quod hic quasi totam{" "}
                        <strong>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sunt nemo libero modi? A sed aut, deleniti quo
                          quaerat sequi mollitia.
                        </strong>{" "}
                        odit nihil voluptatibus debitis optio consequatur,
                        doloremque ad facilis incidunt officiis?
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Animi itaque magni aspernatur exercitationem
                        obcaecati repudiandae quod hic quasi totam{" "}
                        <strong>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sunt nemo libero modi? A sed aut, deleniti quo
                          quaerat sequi mollitia.
                        </strong>{" "}
                        odit nihil voluptatibus debitis optio consequatur,
                        doloremque ad facilis incidunt officiis?
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Animi itaque magni aspernatur exercitationem
                        obcaecati repudiandae quod hic quasi totam{" "}
                        <strong>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sunt nemo libero modi? A sed aut, deleniti quo
                          quaerat sequi mollitia.
                        </strong>{" "}
                        odit nihil voluptatibus debitis optio consequatur,
                        doloremque ad facilis incidunt officiis?
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Animi itaque magni aspernatur exercitationem
                        obcaecati repudiandae quod hic quasi totam{" "}
                        <strong>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sunt nemo libero modi? A sed aut, deleniti quo
                          quaerat sequi mollitia.
                        </strong>{" "}
                        odit nihil voluptatibus debitis optio consequatur,
                        doloremque ad facilis incidunt officiis?
                      </p>
                      <strong>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ipsum, accusamus eius.
                      </strong>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo numquam cum deleniti illum assumenda. Ab nisi
                        suscipit magni doloribus dolorum exercitationem repellat
                        velit cum fugit molestiae perferendis excepturi, ex
                        pariatur esse earum? Quod magni temporibus distinctio
                        sunt obcaecati autem. Quia tenetur facere nesciunt
                        reiciendis voluptas voluptates, id placeat ipsa
                        voluptatem! Earum nostrum sit esse excepturi provident
                        minima quis nemo voluptates modi! Dolorum delectus
                        exercitationem illum cumque, quia corporis libero,
                        consequuntur saepe porro, assumenda similique deserunt!
                        Aspernatur quia modi optio quasi dicta ab, harum eveniet
                        perferendis ratione aut voluptates iure delectus fuga
                        dolorum sed voluptatibus. Nostrum corporis inventore sed
                        vero porro.
                      </p>
                    </div>
                    <div
                      className="btn-show-more"
                      id="instructor-showmore"
                      onClick={handleInstructorShowMore}
                    >
                      <span>Show More</span>
                    </div>
                  </div>
                  <div className="instructor-item">
                    <h2>Tim Buchalka</h2>
                    <p>
                      Java Android Python and C# Expert Developer - 924K+
                      students
                    </p>
                    <div className="instructor-avatar">
                      <img
                        src="https://i.pravatar.cc/150"
                        alt="instructor img"
                      />
                      <div className="text">
                        <p>
                          <Star className="ins-icon" /> 4.5 Instructor Rating
                        </p>
                        <p>
                          <WbIncandescentIcon className="ins-icon" /> 234.553
                          Reviews
                        </p>
                        <p>
                          <PeopleIcon className="ins-icon" /> 959.325 Students
                        </p>
                        <p>
                          <PlayCircleFilledIcon className="ins-icon" /> Courses
                        </p>
                      </div>
                    </div>
                    <div
                      className="instructor-introduction"
                      id="instructor-introduction"
                    >
                      <p>
                        Tim's been a professional software developer for over 35
                        years. During his career, he has worked for major
                        companies such as Fujitsu, Mitsubishi, and Saab.
                      </p>
                      <p>
                        His video courses are used to train developers in major
                        companies such as Mercedes-Benz, Paypal, VW, Pitney
                        Bowes, IBM, and T-Mobile just to name a few (via the
                        Udemy for Business program).
                      </p>
                      <p>
                        What makes Tim unique is his professional programming
                        career - many instructors have never programmed
                        professionally, let alone had a distinguished
                        professional development career like Tim.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores tempora quae placeat corrupti ad vitae alias,
                        ea, quis autem fugiat dolore eius tempore veritatis,
                        rerum facilis corporis eos cupiditate explicabo nisi
                        labore. Adipisci aliquid veniam iusto ipsum voluptatem
                        ex eligendi quas modi amet consectetur, corporis
                        possimus commodi odit enim! Voluptate.
                      </p>
                      <strong>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias, libero.
                      </strong>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus voluptatem maiores omnis repellendus.
                        Voluptatem officia quae molestiae porro magni debitis?
                        Perspiciatis impedit voluptate reprehenderit vel
                        temporibus laborum ipsum quisquam nobis possimus
                        adipisci ad, consectetur hic voluptatibus voluptatem quo
                        ullam incidunt?
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Animi itaque magni aspernatur exercitationem
                        obcaecati repudiandae quod hic quasi totam{" "}
                        <strong>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sunt nemo libero modi? A sed aut, deleniti quo
                          quaerat sequi mollitia.
                        </strong>{" "}
                        odit nihil voluptatibus debitis optio consequatur,
                        doloremque ad facilis incidunt officiis?
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Animi itaque magni aspernatur exercitationem
                        obcaecati repudiandae quod hic quasi totam{" "}
                        <strong>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sunt nemo libero modi? A sed aut, deleniti quo
                          quaerat sequi mollitia.
                        </strong>{" "}
                        odit nihil voluptatibus debitis optio consequatur,
                        doloremque ad facilis incidunt officiis?
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Animi itaque magni aspernatur exercitationem
                        obcaecati repudiandae quod hic quasi totam{" "}
                        <strong>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sunt nemo libero modi? A sed aut, deleniti quo
                          quaerat sequi mollitia.
                        </strong>{" "}
                        odit nihil voluptatibus debitis optio consequatur,
                        doloremque ad facilis incidunt officiis?
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Animi itaque magni aspernatur exercitationem
                        obcaecati repudiandae quod hic quasi totam{" "}
                        <strong>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sunt nemo libero modi? A sed aut, deleniti quo
                          quaerat sequi mollitia.
                        </strong>{" "}
                        odit nihil voluptatibus debitis optio consequatur,
                        doloremque ad facilis incidunt officiis?
                      </p>
                      <strong>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ipsum, accusamus eius.
                      </strong>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo numquam cum deleniti illum assumenda. Ab nisi
                        suscipit magni doloribus dolorum exercitationem repellat
                        velit cum fugit molestiae perferendis excepturi, ex
                        pariatur esse earum? Quod magni temporibus distinctio
                        sunt obcaecati autem. Quia tenetur facere nesciunt
                        reiciendis voluptas voluptates, id placeat ipsa
                        voluptatem! Earum nostrum sit esse excepturi provident
                        minima quis nemo voluptates modi! Dolorum delectus
                        exercitationem illum cumque, quia corporis libero,
                        consequuntur saepe porro, assumenda similique deserunt!
                        Aspernatur quia modi optio quasi dicta ab, harum eveniet
                        perferendis ratione aut voluptates iure delectus fuga
                        dolorum sed voluptatibus. Nostrum corporis inventore sed
                        vero porro.
                      </p>
                    </div>
                    <div
                      className="btn-show-more"
                      id="instructor-showmore"
                      onClick={handleInstructorShowMore}
                    >
                      <span>Show More</span>
                    </div>
                  </div>
                  <div className="instructor-item">
                    <h2>Tim Buchalka</h2>
                    <p>
                      Java Android Python and C# Expert Developer - 924K+
                      students
                    </p>
                    <div className="instructor-avatar">
                      <img
                        src="https://i.pravatar.cc/150"
                        alt="instructor img"
                      />
                      <div className="text">
                        <p>
                          <Star className="ins-icon" /> 4.5 Instructor Rating
                        </p>
                        <p>
                          <WbIncandescentIcon className="ins-icon" /> 234.553
                          Reviews
                        </p>
                        <p>
                          <PeopleIcon className="ins-icon" /> 959.325 Students
                        </p>
                        <p>
                          <PlayCircleFilledIcon className="ins-icon" /> Courses
                        </p>
                      </div>
                    </div>
                    <div
                      className="instructor-introduction"
                      id="instructor-introduction"
                    >
                      <p>
                        Tim's been a professional software developer for over 35
                        years. During his career, he has worked for major
                        companies such as Fujitsu, Mitsubishi, and Saab.
                      </p>
                      <p>
                        His video courses are used to train developers in major
                        companies such as Mercedes-Benz, Paypal, VW, Pitney
                        Bowes, IBM, and T-Mobile just to name a few (via the
                        Udemy for Business program).
                      </p>
                      <p>
                        What makes Tim unique is his professional programming
                        career - many instructors have never programmed
                        professionally, let alone had a distinguished
                        professional development career like Tim.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores tempora quae placeat corrupti ad vitae alias,
                        ea, quis autem fugiat dolore eius tempore veritatis,
                        rerum facilis corporis eos cupiditate explicabo nisi
                        labore. Adipisci aliquid veniam iusto ipsum voluptatem
                        ex eligendi quas modi amet consectetur, corporis
                        possimus commodi odit enim! Voluptate.
                      </p>
                      <strong>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias, libero.
                      </strong>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus voluptatem maiores omnis repellendus.
                        Voluptatem officia quae molestiae porro magni debitis?
                        Perspiciatis impedit voluptate reprehenderit vel
                        temporibus laborum ipsum quisquam nobis possimus
                        adipisci ad, consectetur hic voluptatibus voluptatem quo
                        ullam incidunt?
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Animi itaque magni aspernatur exercitationem
                        obcaecati repudiandae quod hic quasi totam{" "}
                        <strong>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sunt nemo libero modi? A sed aut, deleniti quo
                          quaerat sequi mollitia.
                        </strong>{" "}
                        odit nihil voluptatibus debitis optio consequatur,
                        doloremque ad facilis incidunt officiis?
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Animi itaque magni aspernatur exercitationem
                        obcaecati repudiandae quod hic quasi totam{" "}
                        <strong>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sunt nemo libero modi? A sed aut, deleniti quo
                          quaerat sequi mollitia.
                        </strong>{" "}
                        odit nihil voluptatibus debitis optio consequatur,
                        doloremque ad facilis incidunt officiis?
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Animi itaque magni aspernatur exercitationem
                        obcaecati repudiandae quod hic quasi totam{" "}
                        <strong>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sunt nemo libero modi? A sed aut, deleniti quo
                          quaerat sequi mollitia.
                        </strong>{" "}
                        odit nihil voluptatibus debitis optio consequatur,
                        doloremque ad facilis incidunt officiis?
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Animi itaque magni aspernatur exercitationem
                        obcaecati repudiandae quod hic quasi totam{" "}
                        <strong>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sunt nemo libero modi? A sed aut, deleniti quo
                          quaerat sequi mollitia.
                        </strong>{" "}
                        odit nihil voluptatibus debitis optio consequatur,
                        doloremque ad facilis incidunt officiis?
                      </p>
                      <strong>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ipsum, accusamus eius.
                      </strong>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo numquam cum deleniti illum assumenda. Ab nisi
                        suscipit magni doloribus dolorum exercitationem repellat
                        velit cum fugit molestiae perferendis excepturi, ex
                        pariatur esse earum? Quod magni temporibus distinctio
                        sunt obcaecati autem. Quia tenetur facere nesciunt
                        reiciendis voluptas voluptates, id placeat ipsa
                        voluptatem! Earum nostrum sit esse excepturi provident
                        minima quis nemo voluptates modi! Dolorum delectus
                        exercitationem illum cumque, quia corporis libero,
                        consequuntur saepe porro, assumenda similique deserunt!
                        Aspernatur quia modi optio quasi dicta ab, harum eveniet
                        perferendis ratione aut voluptates iure delectus fuga
                        dolorum sed voluptatibus. Nostrum corporis inventore sed
                        vero porro.
                      </p>
                    </div>
                    <div
                      className="btn-show-more"
                      id="instructor-showmore"
                      onClick={handleInstructorShowMore}
                    >
                      <span>Show More</span>
                    </div>
                  </div>
                </div>
                {/* Student feedback */}
                <div className="course-feedback">
                  <h1>Student Feedbacks</h1>
                  <div className="feedback-star">
                    <div className="feedback-rating-number">
                      <p>4.6</p>
                      <p>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <StarHalf />
                      </p>
                      <p>Course Rating</p>
                    </div>
                    <div className="feedback-progressbar">
                      <div
                        className="five-stars bar-star"
                        onClick={() => {
                          handlePickBar(1);
                        }}
                      >
                        <div className="bar">
                          <div
                            className="bar-percent"
                            style={{ width: "55%" }}
                          ></div>
                        </div>
                        <div className="stars">
                          <Star />
                          <Star />
                          <Star />
                          <Star />
                          <Star />
                        </div>
                        <div className="percent">55%</div>
                      </div>
                      <div
                        className="four-stars bar-star"
                        onClick={() => {
                          handlePickBar(2);
                        }}
                      >
                        <div className="bar">
                          <div
                            className="bar-percent"
                            style={{ width: "25%" }}
                          ></div>
                        </div>
                        <div className="stars">
                          <Star />
                          <Star />
                          <Star />
                          <Star />
                          <StarBorder />
                        </div>
                        <div className="percent">25%</div>
                      </div>
                      <div
                        className="three-stars bar-star"
                        onClick={() => {
                          handlePickBar(3);
                        }}
                      >
                        <div className="bar">
                          <div
                            className="bar-percent"
                            style={{ width: "15%" }}
                          ></div>
                        </div>
                        <div className="stars">
                          <Star />
                          <Star />
                          <Star />
                          <StarBorder />
                          <StarBorder />
                        </div>
                        <div className="percent">15%</div>
                      </div>
                      <div
                        className="two-stars bar-star"
                        onClick={() => {
                          handlePickBar(4);
                        }}
                      >
                        <div className="bar">
                          <div
                            className="bar-percent"
                            style={{ width: "4%" }}
                          ></div>
                        </div>
                        <div className="stars">
                          <Star />
                          <Star />
                          <StarBorder />
                          <StarBorder />
                          <StarBorder />
                        </div>
                        <div className="percent">04%</div>
                      </div>
                      <div
                        className="one-stars bar-star"
                        onClick={() => {
                          handlePickBar(5);
                        }}
                      >
                        <div className="bar">
                          <div
                            className="bar-percent"
                            style={{ width: "1%" }}
                          ></div>
                        </div>
                        <div className="stars">
                          <Star />
                          <StarBorder />
                          <StarBorder />
                          <StarBorder />
                          <StarBorder />
                        </div>
                        <div className="percent">01%</div>
                      </div>
                    </div>
                  </div>
                  <Comment user={userAdminPage} />
                </div>
              </div>

              <div className="detail-right">
                <div className="cover-tag">
                  <div className="price">
                    <span>$9.99</span>
                    <span>$94.99</span>
                    <span>89% off</span>
                  </div>

                  <div className="time-off">
                    <TimerIcon viewBox="0 0 30 30" />
                    <span>13 hours</span>
                    <span>left at this price!</span>
                  </div>

                  <div className="btns">
                    <div className="mx-2 item">
                      <AddItemToCard courseCart={courseDetail} />
                    </div>
                    <div className="item">
                      <BuyNowBtn />
                    </div>
                  </div>

                  <p className="moneyback">30-day Money-Back Guarantee</p>

                  <div className="course-include">
                    <h2>This Course Includes: </h2>
                    <div className="line">
                      <LiveTvIcon viewBox="0 0 30 30" />
                      <span>63 Hours on-demand video</span>
                    </div>
                    <div className="line">
                      <NoteIcon viewBox="0 0 30 30" />
                      <span>14 articles</span>
                    </div>
                    <div className="line">
                      <ContactMailIcon viewBox="0 0 30 30" />
                      <span>15 downloadable resources</span>
                    </div>
                    <div className="line">
                      <CodeIcon viewBox="0 0 30 30" />
                      <span>32 coding exercises</span>
                    </div>
                    <div className="line">
                      <AllInclusiveIcon viewBox="0 0 30 30" />
                      <span>Full lifetime access</span>
                    </div>
                    <div className="line">
                      <PhoneAndroidIcon viewBox="0 0 30 30" />
                      <span>Access on mobile and TV</span>
                    </div>
                    <div className="line">
                      <SpaIcon viewBox="0 0 30 30" />
                      <span>Certificate of completion</span>
                    </div>
                    <div className="apply">
                      <p>Apply Coupon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return <div>{renderCourseDetail()}</div>;
}
