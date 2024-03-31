import "./EmployeePointageAttentionMsg.css";

const Attention = () => {
  return (
    <section className="attention">
      <div className="attentionbackground" />
      <div className="file-download-shape">
        <img
          className="tlchargement-1-icon"
          loading="lazy"
          alt=""
          src="/tlchargement-1@2x.png"
        />
        <div className="attention-wrapper">
          <div className="attention1">ATTENTION !</div>
        </div>
      </div>
      <div className="indiquer-de-fausses-heures-de-wrapper">
        <div className="indiquer-de-fausses">
          Indiquer de fausses heures de travail pourrait avoir des conséquences
          graves
        </div>
      </div>
    </section>
  );
};

export default Attention;
