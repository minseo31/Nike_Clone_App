# Nike Clone App

- 해당 웹앱은 기존의 Nike 웹앱을 참고하여 리메이크를 목적으로 두는 프로젝트입니다.

# 기술 스택

- Front : HTML, CSS , TS, React
- Back : Java Spring Boot
- DB : MySQL

## 세부 스택

- Axios(JSON 자동변환 서버요청) , React-Router(라우팅) , SWR(최신 상태값 유지 훅) , React-Icon(아이콘) , GSAP(애니메이션) , Postman(서버 요청/응답 테스트)

# 파일 구조

- public : 정적파일을 보관
  -- image : 웹앱에서 사용될 이미지를 모두 보관
  -- svg : 웹앱에서 사용될 svg 엘리먼트를 보관
- src : 개발 작업구역
  -- component : 웹앱에서 구현할 인터페이스의 컴포넌트 단위를 정의
  -- util : 웹앱에서 구현될 모든 재사용 가능한 특정 기능을 수행하는 동작을 정의
  -- service : 서버와 통신을 정의
  -- data : 클라이언트 측 데이터를 관리 (샘플데이터)
  -- style : css 스타일을 정의 (스타일은 css 파일이 아닌 객체로 export하여 인라인 스타일로 정의)

  - 타입은 모듈화 시키지 않고 파일의 상단부에 직접 정의

  * 라우터는 루트 파일인 진입점에서 구현 App.tsx

# 웹앱 구조

## 페이지

    - Home : 홈 페이지 (루트 페이지)
    - About : 회사 소개 및 정보 , 문의
    - Product : 상품
    - Menber : 회원관리 및 프로필 , 로그인, 회원가입

### 세부 컨텐츠

- 공통 컨텐츠
  -- header
  -- footer

- Home

  - 나이키 웹 참고용 https://www.nike.com/kr/
    -- Main Banner
    -- Trending Now
    -- Featured
    -- Always Iconic
    -- Shop by Sport
    -- Nike Membership

- About

  - 나이키 나무위키 참고용 https://namu.wiki/w/%EB%82%98%EC%9D%B4%ED%82%A4
    -- 개요 + 로고
    -- 슬로건
    -- 역사
  - 나이키 제품 나무위키 참고용 https://namu.wiki/w/%EB%82%98%EC%9D%B4%ED%82%A4/%EC%A0%9C%ED%92%88
    -- 제품 분류 설명
    -- 매장위치
    -- 고객센터
    -- 문의사항

- Product
  -- 신제품, 신발, 의류, 용품

  - 공통 필터 -
    --- 성별 , 가격대 , 할인율, 색상, 사이즈 , 정렬기준

  - 신발 카테고리 -
    --- 조던, 러닝, 농구, 축구, 트레이닝 및 짐, 스케이트보딩, 골프, 테니스, 샌들 & 슬리퍼

  - 의류 카테고리 -
    --- 탑 & 티셔츠 , 후디 & 크루 , 재킷 & 베스트 , 팬츠& 타이즈 , 트랙슈트 , 서핑 & 수영복, 양말

  - 용품 카테고리 -
    --- 가방, 모자 & 헤어밴드 , 양말, 장갑 , 슬리브 & 암 밴드, 공, 보호대

- Member
  -- 로그인
  -- 회원가입
  -- 프로필
  -- 구매 상품 , 찜 목록

# 업무

## Front

1. 인터페이스 구현
2. 사용자의 이벤트, 상호작용 간의 통신 구현
3. 서버와의 통신 (요청과 응답) API
4. 데이터의 무결성, 유효성 검사
5. 클라이언트 측 데이터 관리

- 샘플데이터 생성 (정적파일, 기본 UI 텍스트 등)

## Back

1. 전체 데이터 관리 , DB
2. 유저 및 상품 데이터의 요청과 응답에 대한 유효성과 무결성 검사
3. 유저 보안검사
4. 상품 구매 , 결제에 대한 데이터 검사 및 관리

- 서버는 유저와 상품 결제 관련 미들웨어와 컨트롤러만 구현할 예정이기에 프론트 위주의 프로젝트로 진행됩니다.
- 서버 요청/응답 테스트 postman으로 확인
- json-server를 통하여 서버 없이 데이터 관리을 진행하고 프론트에서 미들웨어, 컨트롤러을 따로 구현 (서버 미구현 시)

# 참고용 사이트

https://toyfight.co/connect GSAP 라이브러리 사용 예시 사이트
http://batino.co.kr/brand/ GSAP 라이브러리 및 상품 예시 사이트
https://wrapstudio.co.kr/ 레이아웃 예시 사이트 (정적)
https://www.vibey.co.kr/ 레이아웃 예시 사이트 (동적)
https://wch.eqlstore.com/main 상품 예시 사이트
https://ba-ton.kr/ 상품 페이지 레이아웃 예시 사이트

# git

## branch

- 구성원이 각자 작업부분을 관리할 branch를 가지고 마지막에 하나로 병합하기 > 개인의 작업부분에 독립적으로 관리할 수 있음
- 하나의 branch로 작업하기 > 개인의 작업부분 X , 변경사항이 모두의 작업 환경에 적용됨

## 커밋 내용 기입 (업데이트 사항을 밑에 기입하여 커뮤니케이션을 향상시킵시다.)

---

- 커밋 메시지 양식 \*

* 2024.06.15 - (작성자 - 김민서)
  page.tsx : header.tsx 컴포넌트를 생성하여 홈 페이지와 연결하였고 샘플데이터로 컨텐츠를 작성하였습니다 추후에 서버 구현시 데이터 요청으로 변경이 필요합니다.

---
