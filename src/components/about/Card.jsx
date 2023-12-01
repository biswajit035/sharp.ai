import stock from "../../assets/stock.png";

const Card = () => {
  return (
    <div className="card">
      <div className="icon">
        <img src={stock} alt="" />
      </div>
      <h2 className="title">Professional Consultants</h2>
      <p className="content">
        Far far away, behind the word mountains, far from the countries Vokalia.
      </p>
    </div>
  );
};

export default Card;
