import { GoHeart } from "react-icons/go";
import { modalHeartStyle, modalPurchaseButtonBoxStyle, modalPurchaseButtonStyle } from "../../style/product/Modal";
import { useState } from "react";

const PurchaseButton = () => {

    const [showOption, setShowOption] = useState(false);

    const handleButtonClick = () => setShowOption(true);
    const handelCloseClick = () => setShowOption(false);

    return (
        <div style={modalPurchaseButtonBoxStyle}>
            <GoHeart style={modalHeartStyle} />
            <button style={modalPurchaseButtonStyle} onClick={handleButtonClick}>구매하기</button>
        </div>
    );
}

export default PurchaseButton;