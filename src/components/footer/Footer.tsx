import instaImg1 from "../../assets/instagram-1.jpg";
import instaImg2 from "../../assets/instagram-2.jpg";
import instaImg3 from "../../assets/instagram-3.jpg";
import instaImg4 from "../../assets/instagram-4.jpg";
import instaImg5 from "../../assets/instagram-5.jpg";
import instaImg6 from "../../assets/instagram-6.jpg";
const Footer = () => {
  return (
    <>
      <footer className="section__container footer__container">
        <div className="footer__col">
          <h4>CONTACT INFO</h4>
          <p>
            <span>
              <i className="ri-map-pin-2-fill"></i>
            </span>
            Address: 1234 Street Name, City Name, United States
          </p>
          <p>
            <span>
              <i className="ri-mail-fill"></i>
            </span>
            support@BicyCle.com
          </p>
          <p>
            <span>
              <i className="ri-phone-fill"></i>
            </span>
            +123-456-7890
          </p>
        </div>

        <div className="footer__col">
          <h4>COMPANY</h4>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Our Blogs</a>
        </div>

        <div className="footer__col">
          <h4>UseFull Link</h4>
          <a href="/">Help</a>
          <a href="/">Hot Line</a>
          <a href="/">Track Order</a>
          <a href="/">Tarm & Condetion</a>
        </div>
        <div className="footer__col">
          <h4>Instagram</h4>
          <div className="instagram__grid">
            <img src={instaImg1} alt="" />
            <img src={instaImg2} alt="" />
            <img src={instaImg3} alt="" />
            <img src={instaImg4} alt="" />
            <img src={instaImg5} alt="" />
            <img src={instaImg6} alt="" />
          </div>
        </div>
      </footer>
      <div className="footer__bar">
        copy right &copy; 2025 BicyCle. All Rights Reserved
      </div>
    </>
  );
};

export default Footer;
