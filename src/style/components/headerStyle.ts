import { CSSProperties } from "react";
import { root } from "../root";

type HeaderStyle = {};

// 헤더 컨테이너
export const headerStyle: CSSProperties = {
  width: root.viewWidth,
  height: "70px",
  backgroundColor: root.white,
  display: root.flex,
  paddingInline: "5%",
  position: root.fixed,
  justifyContent: "space-between",
  alignItems: "center",
  boxSizing: "border-box",
  zIndex : 999,
};

// 헤더 왼쪽 컨텐츠
export const headerLeftContentStyle: CSSProperties = {
  height: "100%",
  width: "fit-contnet",
  display: "flex",
  alignItems: "center",
  gap: "50px",
};

// 헤더 로고
export const headerLogoStyle: CSSProperties = {
  height: "100%",
  width: "auto",
};

// 헤더 메뉴
export const headerNaviStyle: CSSProperties = {
  height: "100%",
  width: "fit-contnet",
  display: "flex",
  alignItems: "center",
  gap: "15px",
};

// 헤더 네비 리스트
export const headerNaviListStyle: CSSProperties = {
  textDecoration: "none",
  color: root.black,
  fontWeight: "bold",
  fontSize: "1rem",
};

// 헤더 상세메뉴 리스트
export const headerDetailsListStyle : CSSProperties = {
    textDecoration: "none",
    color: root.black,
    fontWeight: "bold",
    fontSize: "0.7rem",
}
