import "../CSS/Footer.css";

function Footer() {
  return (
    <div className="footerBody">
      <div className="footer-logo-img" />
      <div className="footer-title">
        <span>ROYAL HOTEL</span>
      </div>
      <div className="footer-phone">
        <span className="footer-front">김태호 | </span>
        <span className="footer-front"> 백앤드,프론트앤드,데이터베이스</span>
        <span className="footer-front">&nbsp;&nbsp;&nbsp; 지천배 | </span>
        <span className="footer-korean">유니티,프론트앤드</span>
      </div>
      <div className="footer-second">
        <span className="footer-people">민인홍 | </span>
        <span className="footer-korean">유니티,프론트앤드</span>
        <span className="footer-people">&nbsp;&nbsp;&nbsp;전영관 | </span>
        <span className="footer-korean">프론트앤드</span>
      </div>
      <div className="footer-under-text">
        <span>© 2020 ROYAL HOTEL & RESORTS Co. All rights reserved.</span>
      </div>
    </div>
  );
}

export default Footer;
