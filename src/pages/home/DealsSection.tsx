import dealsImg from "../../assets/deals.png";
const DealsSection = () => {
  return (
    <section className="section__container deals__container">
      DealsSection
      <div className="deals__image">
        <img src={dealsImg} alt="" />
      </div>
      <div className="deals__content">
        <h5>Get Up To 20% Discount</h5>
        <h4>Deals Of The Month</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          maiores est soluta quod esse incidunt veniam a aperiam, laudantium
          perferendis autem ducimus tempore voluptate? Recusandae voluptatem non
          sequi deserunt similique?a
        </p>
      </div>
    </section>
  );
};

export default DealsSection;
