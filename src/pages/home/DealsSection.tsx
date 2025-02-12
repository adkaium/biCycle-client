import dealsImg from "../../assets/deals.png";
const DealsSection = () => {
  return (
    <section className="section__container deals__container">
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
        <div className="deals__countdown flex-wrap">
          <div className="deals__countdown__card">
            <h4>14</h4>
            <p>Days</p>
          </div>
          <div className="deals__countdown__card">
            <h4>22</h4>
            <p>Hours</p>
          </div>
          <div className="deals__countdown__card">
            <h4>19</h4>
            <p>Minutes</p>
          </div>
          <div className="deals__countdown__card">
            <h4>05</h4>
            <p>Seconds</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
