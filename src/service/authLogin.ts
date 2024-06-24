import {
  getAuth, // auth 객체
  signInWithEmailAndPassword, // 로그인메서드
} from "firebase/auth";
import { auth } from "./db";

// 사용자 로그인 함수
function login(email: string, password: string) {
  // 전달받은 인수를 데이터베이스에 존재하는 지 비교검사
  signInWithEmailAndPassword(auth, email, password)
    // 해당 데이터가 존재하면 데이터를 담은 userCredential객체를 반환하고 실행
    .then((userCredential) => {
      // 로그인 성공
      const user = userCredential.user;
      console.log("Logged in with user: ", user.email);
    })
    .catch((error) => {
      // 로그인 실패
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("에러 발생 : ", errorCode, errorMessage);
    });
}

login("user@example.com", "examplePassword");
