import React from "react";
import "./style.scss";
import StarBorder from "@material-ui/icons/StarBorder";
import Star from "@material-ui/icons/Star";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";

function Comment({ user }) {
  const color = [
    "#2896a9",
    "#9c467f",
    "#f0bd4f",
    "#eb8a2f",
    "#4dab65",
    "#07a787",
    "",
  ];
  // Function handle
  const handleRandomColor = () => {
    let num = Math.floor(Math.random() * 5 + 1);
    let pickColor = color[num];
    console.log(pickColor);
    return pickColor;
  };
  // handleRandomColor();
  const handleGetNameAvatar = (item) => {
    let name = item.hoTen.split(" ");
    let firstLetter_one = name[0].charAt(0);
    let firstLetter_two = name[1]?.charAt(0);
    return `${firstLetter_one}${firstLetter_two ? firstLetter_two : ""}`;
  };
  // Function render
  const renderComment = () => {
    return user?.map((item, index) => {
      return (
        <div className="comment" key={index}>
          <div className="avatar">
            <p style={{ background: `${handleRandomColor()}` }}>
              {handleGetNameAvatar(item)}
            </p>
          </div>
          <div className="content">
            <div className="name">
              <h2>{item.hoTen}</h2>
            </div>
            <div className="rating">
              <div className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <StarBorder />
              </div>
              <div className="times">2 weeks ago</div>
            </div>
            <div className="text">
              Excellent Course TIM. I have been rigorously studying this course
              from past few weeks , the content really good and TIM goes really
              into details while explaining , I also liked you giving the
              reference to the necessary docs PEP guide and the sections which
              students should read. This is definitely one of the best course in
              market, On a side note Tim has got good sense of humor :)
            </div>
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
        </div>
      );
    });
  };

  return (
    <>
      {renderComment()}
      <div className="see-more-review">
        <span>See more reviews</span>
      </div>
    </>
  );
}

export default Comment;
