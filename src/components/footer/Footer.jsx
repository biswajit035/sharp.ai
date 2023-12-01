import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="footer_logo">
          <img src={logo} alt="" />
          A small river named Duden flows by their
          place and supplies it with the necessary regelialia.
        </div>
        <div className="footer_support">
          <div className="title">SUPPORT</div>
          <ul>
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>Help Desk</li>
            <li>Knowledgebase</li>
          </ul>
        </div>
        <div className="footer_aboutus">
          <div className="title">About Us</div>
          <ul>
            <li>Careers</li>
            <li>Terms of Service</li>
            <li>Privacy</li>
            <li>Policy</li>
          </ul>
        </div>
      </div>
      <span style={{ textAlign: "center"}}>
        Copyright ©2023 All rights reserved
        <br/>
      This website is made with ❤ by Biswajit
      </span>
    </div>
  );
};

export default Footer;
