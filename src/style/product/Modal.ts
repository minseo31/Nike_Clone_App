import { CSSProperties } from "react";
import { root } from "../root";

export const modalOverlayStyle:CSSProperties = {
    width: root.fullSize,
    height: "calc(100vh - 70px)",
    position: root.fixed,
    top: "70px",
    left: root.zero,
    display: root.flex,
    justifyContent: root.center,
    backgroundColor: root.white,
    zIndex: root.z999,
}

export const modalContainerStyle:CSSProperties = {
    width: "600px",
    height: root.fullSize,
    display: root.flex,
    borderTop: "1px solid #dbdbdb",
    borderRight: "1px solid #dbdbdb",
    borderLeft: "1px solid #dbdbdb",
    position: root.relative,
}

export const modalContentStyle:CSSProperties = {
    width: root.fullSize,
    height: "95%",
    display: root.flex,
    flexDirection: root.column,
    gap: root.gap30,
    alignItems: root.center,
    overflowY: root.auto,

}

export const modalXButtonStyle:CSSProperties = {
    position: root.absolute,
    top: "10px",
    right: "12px",
    appearance: root.none,
    backgroundColor: "transparent",
    border: root.none,
    fontSize: "30px",
    cursor: root.pointer,
}

export const modalImgBoxStyle:CSSProperties = {
    width: "500px",
    height: "600px",
}

export const modalImgStyle:CSSProperties = {
    width: root.fullSize,
    height: root.fullSize,
    objectFit: root.contain,
}


export const modalInfoStyle:CSSProperties = {
    display: root.flex,
    flexDirection: root.column,
    gap: root.gap20,
    padding: "0 10px 0 10px",
}

export const modalNameStyle: CSSProperties = {
    fontSize: "25px",
    fontWeight: "700",
}

export const modalCatalStyle: CSSProperties = {
    fontWeight: "800"
}

export const modalPriceBoxStyle: CSSProperties = {
    display: root.flex,
    flexDirection: root.column,
    gap: root.gap10,
    borderBottom: "1px solid #dbdbdb",
    paddingBottom: root.p5,
}

export const modalPriceStyle: CSSProperties = {
    display: root.flex,
    justifyContent: root.between,
}

export const modalCurrentPriceStyle: CSSProperties = {
    fontSize: root.font20,
    fontWeight: "700",
}

export const modalDiscountRateStyle1: CSSProperties = {
    color: root.red,
    fontSize: root.font20,
    fontWeight: "700",
}

export const modalDiscountRateStyle2: CSSProperties = {
    color: root.red,
    fontSize: root.font12,
}

export const modalOriginPriceStyle: CSSProperties = {
    color: root.gray70,
    textDecoration: "line-through",

}

export const modalInfoTextStyle: CSSProperties = {
    fontWeight: "600",
    lineHeight: "1.7",
}

export const modalInfoImageBoxStyle: CSSProperties = {
    display: root.flex,
    flexDirection: root.column,
    gap: root.gap10,
    justifyContent: root.center,
    alignItems: root.center,
}

export const modalInfoImageStyle: CSSProperties = {
    width: "550px",
    height: "350px",
    objectFit: root.contain,
}


export const modalPurchaseButtonBoxStyle:CSSProperties = {
    width: root.fullSize,
    height: "50px",
    position: root.absolute,
    bottom: root.zero,
    left: root.zero,
    borderTop: "1px solid #dbdbdb",
    display: root.flex,
    justifyContent: root.between,
    alignItems: root.center,
    backgroundColor: root.white,
    zIndex: root.z5,

}

export const modalHeartStyle:CSSProperties = {
    fontSize: "25px",
    color: root.gray70,
    paddingLeft: root.p5,
}

export const modalPurchaseButtonStyle:CSSProperties = {
    width: "500px",
    height: "40px",
    marginRight: root.p5,
    backgroundColor: root.black100,
    border: root.none,
    borderRadius: "5px",
    color: root.white,
    fontWeight: "700",
    fontSize: "15px",
    cursor: root.pointer,
}

