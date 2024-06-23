import { CSSProperties, useState } from "react";
import { productImgStyle, productTitleStyle } from "../../style/product/Products";
import { root } from "../../style/root";
import ProductModal from "./ProductModal";


type ProductInfoProps = {
    name: string,
    price: number,
    discountRate: number,
    category: string[],
}

const Product: React.FC = () => {

    const [hover, setHover] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    
    // 제품 호버
    const productHoverStyle: CSSProperties = {
        position: root.absolute,
        width: root.fullSize,
        height: root.fullSize,
        backgroundColor: root.gray50,
        cursor: root.pointer,
        display: root.flex,
        flexDirection: root.column,
        justifyContent: root.center,
        alignItems: root.center,
        gap: root.gap30,
        color: root.black100,
        top: root.zero,
        left: root.zero,
        opacity: hover? 0.7: 0,
    }


    return (
        <div style={productTitleStyle} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <img style={productImgStyle} src="https://static.nike.com/a/images/t_default/fee53391-cec8-4218-9346-4c95fc01884c/%EC%A4%8C-%EB%B3%B4%EB%A9%94%EB%A1%9C-5-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-Rhb5Drxt.png" alt="" />
            <div style={productHoverStyle} onClick={openModal}>
                <span>name</span>
                <span>price</span>
                <span>discount</span>
                <span>Info</span>
            </div>
            <ProductModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}

export default Product;