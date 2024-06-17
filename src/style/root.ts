type Root = {
  white: "#fff";
  black: "#111";
  viewWidth: "100vw";
  viewHeight: "100vh";
  flex: "flex";
  column: "column";
  fixed : "fixed"
  shadowS: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px";
};

// 루트 스타일 값
export const root: Root = {
  // color
  white: "#fff", // 화이트
  black: "#111", // 블랙

  // size
  viewWidth: "100vw", // 뷰포트 w
  viewHeight: "100vh", // 뷰포트 h

  // layout
  flex: "flex", 
  column: "column", 

  // position 
  fixed : "fixed",

  // shadow
  shadowS:
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px", // 약한 섀도우
};
