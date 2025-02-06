import { Link } from "react-router-dom";
import bannerImg from "../../assets/header.png";

export const Banner = () => {
  return (
    <div className="max-w-screen-xl section__container header__container">
      <div className="header__content z-30">
        <h4 className="uppercase">Up to 20% discount</h4>
        <h1>Mountain's Cycle</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          alias quisquam officiis sunt! Obcaecati facilis ad magnam minus
          corporis nobis, possimus in atque quis sed eaque veniam maxime cumque?
          Nam.
        </p>
        <button className="btn">
          <Link to="shop">Explore Now</Link>
        </button>
      </div>
      <div className="header__image">
        <img src={bannerImg} alt="banner Img" />
      </div>
    </div>
  );
}
