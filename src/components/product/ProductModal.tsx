import React from "react";
import { modalCatalStyle, modalContainerStyle, modalContentStyle, modalCurrentPriceStyle, modalDiscountRateStyle1, modalDiscountRateStyle2, modalImgBoxStyle, modalImgStyle, modalInfoImageBoxStyle, modalInfoImageStyle, modalInfoStyle, modalInfoTextStyle, modalNameStyle, modalOriginPriceStyle, modalOverlayStyle, modalPriceBoxStyle, modalPriceStyle, modalXButtonStyle } from "../../style/product/Modal";
import { MdOutlineCancel } from "react-icons/md";
import PurchaseButton from "./PurchaseButton";


type ProductModalProps = {
    isOpen: boolean,
    onClose: () => void,
}

const ProductModal: React.FC<ProductModalProps> = ({isOpen, onClose}: ProductModalProps) => {
    if(!isOpen) return null;

    return (
        <div style={modalOverlayStyle} onClick={onClose}>
            <div style={modalContainerStyle} onClick={(e) => e.stopPropagation()}>
                <button style={modalXButtonStyle} onClick={onClose}>
                    <MdOutlineCancel />
                </button>
                <div style={modalContentStyle}>
                    <div style={modalImgBoxStyle}>
                        <img style={modalImgStyle} src="https://static.nike.com/a/images/t_default/fee53391-cec8-4218-9346-4c95fc01884c/%EC%A4%8C-%EB%B3%B4%EB%A9%94%EB%A1%9C-5-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-Rhb5Drxt.png" alt="" />
                    </div>
                    <div style={modalInfoStyle}>
                        <div style={modalNameStyle}>
                            나이키 줌 보메로 5
                        </div>
                        <div style={modalCatalStyle}>
                            남성신발
                        </div>
                        <div style={modalPriceBoxStyle}>
                            <div style={modalPriceStyle}>
                                <span style={modalCurrentPriceStyle}>170,100 원</span>
                                <div>
                                    <span style={modalDiscountRateStyle1}>10%</span>
                                    <span style={modalDiscountRateStyle2}>SALE</span>  
                                </div>
                            </div>
                            <span style={modalOriginPriceStyle}>189,000 원</span>
                        </div>
                        <div style={modalInfoTextStyle}>
                            줌 보메로 5와 함께 나만을 위한 새로운 길을 개척하세요. 복합적이고 입체적이면서 이제는 스타일링도 간편하게 할 수 있는 신발입니다. 풍부한 레이어드 디자인에 직물과 합성 스웨이드, 플라스틱 액센트가 더해져 이번 시즌 가장 멋진 스니커즈가 탄생했습니다. 뉴트럴한 색상이 어떤 옷차림에도 완벽한 멋진 룩을 선사합니다. 2000년대 초반의 감성을 현대적으로 업그레이드한 이 아이템은 기술과 절제가 완벽한 조화를 이룹니다.
                        </div>
                        <div style={modalInfoImageBoxStyle}>
                            <img style={modalInfoImageStyle} src="/image/product/sampleimage1.png" alt="sample1" />
                            <img style={modalInfoImageStyle} src="/image/product/sampleimage2.png" alt="sample2" />
                            <img style={modalInfoImageStyle} src="/image/product/sampleimage3.png" alt="sample3" />
                            <img style={modalInfoImageStyle} src="/image/product/sampleimage4.png" alt="sample4" />
                        </div>
                    </div>
                </div>
                <PurchaseButton />
            </div>
        </div>
    );
}

export default ProductModal;