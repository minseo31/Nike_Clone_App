import { useEffect, useState, useRef } from "react";
import { fadeInGSAP } from "../../animation/fadeIn";
import LoadingPage from "../LoadingPage";
import Login from "../../components/member/login/Login";
import SignUp from "../../components/member/signup/SignUp";

const MenberPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true); // 로딩 값
  const [isSignUp, setIsSignUp] = useState<boolean>(false); // 회원가입 박스 등장 상태 값
  const pageRef = useRef<HTMLDivElement>(null); // 페이지 엘리먼트

  // 컴포넌트 로드 시간 지연
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4초 지연
    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
  }, []);

  // 페이지 페이드 인
  useEffect(() => {
    if (!isLoading) {
      fadeInGSAP(pageRef);
    }
  }, [isLoading]);

  return (
    <>
      {/* 페이지 로드 시간 동안 로딩 페이지를 렌더링 */}
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div ref={pageRef}>
          <Login setIsSignUp={setIsSignUp}/>
          {isSignUp ? <SignUp setIsSignUp={setIsSignUp} /> : null}
        </div>
      )}
    </>
  );
};

export default MenberPage;
