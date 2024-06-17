import { CSSProperties } from "react";
import { root } from "../root";

// 배너 컨테이너
export const bannerStyle: CSSProperties = {
  width: root.viewWidth,
  height: root.viewHeight,
  padding: "50px",
  paddingTop: "70px",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: root.black,
  position: "relative",
};

// 비디오
export const videoStyle: CSSProperties = {
  width: "70%",
  height: "auto",
};

// 포스트 박스
export const postBoxStyle: CSSProperties = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: "100%",
  height: "100%",
  padding: "70px 50px 50px 50px",
  opacity: 0.7,
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "end",
};

// 오른쪽 포스트
export const post1Style: CSSProperties = {
  width: "300px",
  height: "auto",
  objectFit: "cover",
};

// 왼쪽 / 가운데 포스트 박스
export const post23BoxStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  right: 0,
  padding: "70px 50px 50px 50px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "start",
};

// 가운데 포스트
export const post2Style: CSSProperties = {
  width: "150px",
  height: "auto",
  objectFit: "cover",
  margin: "auto",
  paddingLeft: "20vw",
};
// 왼쪽 포스트
export const post3Style: CSSProperties = {
  width: "250px",
  height: "auto",
  objectFit: "cover",
};

// 타이포그래피 박스
export const typographyBoxStyle: CSSProperties = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: "100%",
  height: "100%",
  padding: "70px 50px 50px 50px",
  fontSize: "8rem",
  fontFamily: "Rubik Lines",
  color: root.white,
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

// 타이포그래피 왼쪽 상단
export const typographyLeftStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

// 타이포그래피 오른쪽 하단
export const typographyRightStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  textAlign: "end",
};
