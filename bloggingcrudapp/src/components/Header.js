import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Travel</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?cs=srgb&dl=pexels-aleksandar-pasaric-325185.jpg&fm=jpg"
        alt=""
      />
    </div>
  );
}