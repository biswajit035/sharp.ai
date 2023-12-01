import Card from "./Card";

// import './about.scss'
const About = () => {
  return (
    <div className="about">
      <div className="left">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="right">
        <h4 className="heading">ABOUT UNION CORPORATION</h4>
        <h1 className="title">
          More than 40M+ Trusted Our Financial & Conusultation Institution
        </h1>
        <p className="content">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
        <p className="content">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth.
        </p>
        {/* <AnimatedButton text="Learn More" className="learnMore"/> */}
        <div className=" learnMore">Learn More</div>
      </div>
    </div>
  );
}

export default About