import {
  bannerStyle,
  videoStyle,
  typographyBoxStyle,
  typographyLeftStyle,
  typographyRightStyle,
  postBoxStyle,
  post23BoxStyle,
  post1Style,
  post2Style,
  post3Style,
} from "../../style/home/banner";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin"; // 텍스트 애니메이션 플러그인

gsap.registerPlugin(TextPlugin); // 플러그인 연결

const Banner: React.FC = () => {
  const typographyRef1 = useRef<HTMLSpanElement>(null); // 첫 번째 타이포그래피 엘리먼트
  const typographyRef2 = useRef<HTMLSpanElement>(null); // 두 번째 타이포그래피 엘리먼트
  const typographyRef3 = useRef<HTMLSpanElement>(null); // 세 번째 타이포그래피 엘리먼트
  const typographyRef4 = useRef<HTMLSpanElement>(null); // 네 번째 타이포그래피 엘리먼트
  const typographyRefs = [
    typographyRef1,
    typographyRef2,
    typographyRef3,
    typographyRef4,
  ];

  useEffect(() => {
    if (
      typographyRef1.current &&
      typographyRef2.current &&
      typographyRef3.current &&
      typographyRef4.current
    ) {
      // 애니메이션 정의
      const tl1 = gsap.timeline({ repeat: -1, yoyo: true }); // 애니메이션의 타임라인은 무한 반복 , 역방향 순회 적용
      tl1
        .to(typographyRef1.current, {
          duration: 2, // 변경 시간
          text: "YOU CAN'T STOP US", // 변경될 텍스트
          ease: "power1.inOut", // 변경 속도
        })
        .to(typographyRef1.current, {
          duration: 2,
          text: "JUST DO IT",
          ease: "power1.inOut",
        });
      const tl2 = gsap.timeline({ repeat: -1, yoyo: true }); // 애니메이션의 타임라인은 무한 반복 , 역방향 순회 적용
      tl2
        .to(typographyRef2.current, {
          duration: 2, // 변경 시간
          text: "JUST DO IT", // 변경될 텍스트
          ease: "power1.inOut", // 변경 속도
        })
        .to(typographyRef1.current, {
          duration: 2,
          text: "NIKE",
          ease: "power1.inOut",
        });
      const tl3 = gsap.timeline({ repeat: -1, yoyo: true }); // 애니메이션의 타임라인은 무한 반복 , 역방향 순회 적용
      tl3
        .to(typographyRef3.current, {
          duration: 2, // 변경 시간
          text: "NIKE", // 변경될 텍스트
          ease: "power1.inOut", // 변경 속도
        })
        .to(typographyRef1.current, {
          duration: 2,
          text: "PLAY NEW",
          ease: "power1.inOut",
        });
      const tl4 = gsap.timeline({ repeat: -1, yoyo: true }); // 애니메이션의 타임라인은 무한 반복 , 역방향 순회 적용
      tl4
        .to(typographyRef4.current, {
          duration: 2, // 변경 시간
          text: "PLAY NEW", // 변경될 텍스트
          ease: "power1.inOut", // 변경 속도
        })
        .to(typographyRef1.current, {
          duration: 2,
          text: "YOU CAN`T STOP US",
          ease: "power1.inOut",
        });
    }
  });

  return (
    <section style={bannerStyle}>
      <video style={videoStyle} autoPlay loop muted>
        <source src="/video/nike-video.mp4" type="video/mp4" />
      </video>
      <div style={postBoxStyle}>
        <img style={post1Style} src="/image/banner-post1.jpg" alt="" />
        <div style={post23BoxStyle}>
          <img style={post2Style} src="/image/banner-post2.jpg" alt="" />
          <img style={post3Style} src="/image/banner-post3.jpg" alt="" />
        </div>
      </div>
      <div style={typographyBoxStyle}>
        <div style={typographyLeftStyle}>
          <span ref={typographyRef1}>JUST DO IT</span>
          <span ref={typographyRef2}>NIKE</span>
        </div>
        <div style={typographyRightStyle}>
          <span ref={typographyRef3}>PLAY NEW</span>
          <span ref={typographyRef4}>YOU CAN`T STOP US</span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
