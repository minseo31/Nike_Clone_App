import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./db";

// Firestore에서 데이터 읽기
async function getData() {
  // "your-collection" 라는 컬렉션을 데이터 베이스에서 요청
  const querySnapshot = await getDocs(collection(db, "your-collection"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
}

// 유저 데이터 생성 및 데이터베이스 추가 - 회원가입
export function saveUserProfile(id: string, name: string, email: string) {
  const usersCollection = collection(db, "users"); // users 컬렉션 생성 후 반환

  // Firestore에 사용자 정보 추가
  addDoc(usersCollection, {
    id: id, // 유저 아이디
    name: name, // 이름
    email: email, // 이메일
  })
    .then((docRef) => {
      // 유저 데이터를 성공적으로 추가하였을 떄 해당 유저 아이디를 출력
      console.log("추가된 유저의 아이디: ", docRef.id);
    })
    .catch((error) => {
      // 추가 실패 시 에러 발생 출력
      console.error("에러 발생 : ", error);
    });
}
