import {
  inputBoxStyle,
  inputStyle,
  loginBoxStyle,
  loginBtn,
  loginContainerStyle,
  loginFormStyle,
  logoStyle,
  memberContnetBoxStyle,
  memberContnetImgStyle,
  memberContnetTextStyle,
  memberContnetTitleStyle,
  memberTitleBoxStyle,
  postStyle1,
  postStyle2,
  signupBoxStyle,
} from "../../../style/member/login";

// prop 타입
type PropType = {
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login: React.FC<PropType> = ({ setIsSignUp }: PropType) => {
  const handleClick = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <section style={loginContainerStyle}>
      <div style={loginBoxStyle}>
        <div style={memberContnetBoxStyle}>
          <img
            style={memberContnetImgStyle}
            src="/image/member/login.png"
            alt=""
          />
          <div style={memberTitleBoxStyle}>
            <h1 style={memberContnetTitleStyle}>NIKE MEMBERSHIP</h1>
            <h3 style={memberContnetTextStyle}>
              나이키 멤버가 되어 많은 혜택을 받아보세요!
            </h3>
          </div>
          <img style={postStyle1} src="/image/member/login2.jpg" alt="" />
          <img style={postStyle2} src="/image/member/login3.jpg" alt="" />
        </div>
        <form action="/login" style={loginFormStyle}>
          <img style={logoStyle} src="/image/logo/Nike-Logo.png" alt="" />
          <div style={inputBoxStyle}>
            <label htmlFor="username">아이디</label>
            <input
              style={inputStyle}
              type="text"
              placeholder="아이디를 입력하세요."
            />
          </div>
          <div style={inputBoxStyle}>
            <label htmlFor="password">비밀번호</label>
            <input
              style={inputStyle}
              type="text"
              placeholder="비밀번호를 입력하세요."
            />
          </div>
          <button style={loginBtn}>로그인</button>
          <div style={signupBoxStyle}>
            <span>계정이 없으신가요? </span>
            <span onClick={handleClick}>회원가입하기</span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
