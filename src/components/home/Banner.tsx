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

const Banner: React.FC = () => {
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
          <span>JUST DO IT</span>
          <span>NIKE</span>
        </div>
        <div style={typographyRightStyle}>
          <span>PLAY NEW</span>
          <span>YOU CAN`T STOP US</span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
