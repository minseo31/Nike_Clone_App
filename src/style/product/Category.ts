import { CSSProperties } from "react";
import { root } from "../root";

export const sidebar: CSSProperties = {
    width: '200px',
    padding: '20px',
    borderRight: '1px solid #dbdbdb',
    height: root.viewHeight,
    position: root.absolute,
    left: root.zero,
    top: "70px",
  };
  
  export const title: CSSProperties = {
    fontSize: '24px',
    marginBottom: '20px',
    borderBottom: "1px solid #dbdbdb"
  };
  
  export const list: CSSProperties = {
    listStyleType: root.none,
    paddingBottom: "30px",
  };
  
  export const item: CSSProperties = {
    paddingBottom: root.p5,
    cursor: root.pointer,
  };
  
  export const category: CSSProperties = {
    fontWeight: root.bold,
    marginBottom: '5px',
  };
  
  export const sublist: CSSProperties = {
    listStyleType: root.none,
    paddingLeft: '15px',
  };
  
  export const subitem: CSSProperties = {
    marginBottom: '5px',
    cursor: root.pointer,
  };