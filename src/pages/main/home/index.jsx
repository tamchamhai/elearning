import React, { useEffect } from "react";
import Carousel from "../../../components/main/carousel";
import Card from "../../../components/main/card";
import Feature from "../../../components/feature";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  getListCourses,
} from "../../../store/actions/courses.action";

export default function Home() {
  // Get data from store
  const dispatch = useDispatch();
  // tuong tu nhu mapStateToProps phai state.courses moi boc tach duoc list
  const { courseList } = useSelector((state) => state.courses);
  const { loading } = useSelector((state) => state.loading);

  // Call Api to pull data to store
  useEffect(function () {
    dispatch(getListCourses());
    dispatch(getCategories());
  }, []);

  return (
    <div>
      <Carousel />
      <Feature />
      <Card renderList={courseList} loading={loading} />
    </div>
  );
}
