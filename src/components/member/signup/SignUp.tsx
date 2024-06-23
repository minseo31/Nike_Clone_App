import {
  inputTitleStyle,
  logoStyle,
  signupBoxStyle,
  signupContainerStyle,
  titleStyle,
  inputBoxStyle,
  inputStyle,
  signupBtn,
  checkBoxTitleStyle,
  overlayStyle,
} from "../../../style/member/signup";

type PropType = {
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignUp: React.FC<PropType> = ({ setIsSignUp }: PropType) => {
  const handleClick = () => {
    setIsSignUp((prev) => !prev );
  };

  return (
    <section style={signupContainerStyle}>
      <div onClick={handleClick} style={overlayStyle}></div>
      <form style={signupBoxStyle}>
        <img style={logoStyle} src="/image/logo/Nike-Logo.png" alt="" />
        <h1 style={titleStyle}>회원가입하기</h1>
        <div style={inputBoxStyle}>
          <label style={inputTitleStyle} htmlFor="">
            이름
          </label>
          <input
            style={inputStyle}
            type="text"
            placeholder="이름을 입력하세요."
          />
        </div>
        <div style={inputBoxStyle}>
          <label style={inputTitleStyle} htmlFor="">
            이메일
          </label>
          <input
            style={inputStyle}
            type="email"
            placeholder="이메일을 입력하세요."
          />
        </div>
        <div style={inputBoxStyle}>
          <label style={inputTitleStyle} htmlFor="">
            아이디
          </label>
          <input
            style={inputStyle}
            type="text"
            placeholder="아이디를 입력하세요."
          />
        </div>
        <div style={inputBoxStyle}>
          <label style={inputTitleStyle} htmlFor="">
            비밀번호
          </label>
          <input
            style={inputStyle}
            type="password"
            placeholder="비밀번호를 입력하세요."
          />
        </div>
        <div style={inputBoxStyle}>
          <label style={inputTitleStyle} htmlFor="">
            비밀번호 확인
          </label>
          <input
            style={inputStyle}
            type="password"
            placeholder="비밀번호를 다시 입력하세요."
          />
        </div>
        <div>
          <input type="checkbox" />
          <label style={checkBoxTitleStyle} htmlFor="">
            SNS 마케팅 홍보성 문자 수신에 동의합니다.
          </label>
        </div>
        <button style={signupBtn}>가입하기</button>
      </form>
    </section>
  );
};

export default SignUp;
