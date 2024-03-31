import "./SuperviseurAcceuil.css";

const EntryHoursLabel = () => {
  return (
    <section className="entry-hours-label">
      <div className="absent-minutes-label">
        <div className="button-report-download">
          <h1 className="bienvenue-maha-hilali">{`Bienvenue, Maha Hilali ! `}</h1>
        </div>
        <div className="suivi-du-temps-wrapper">
          <h2 className="suivi-du-temps">Suivi Du Temps</h2>
        </div>
        <div className="frame-parent44">
          <div className="buttonmodifier-wrapper">
            <button className="buttonmodifier1">
              <div className="buttonmodifier-item" />
              <b className="modifier5">{`Modifier `}</b>
            </button>
          </div>
          <div className="button-container">
            <button className="button2">
              <div className="button-child" />
              <b className="b2">{`<`}</b>
            </button>
            <div className="datename">
              <div className="datename-child" />
              <input
                className="mars-131"
                name="Date"
                id="Date"
                value="MM DD"
                placeholder="Mars 13"
                type="text"
                disabled
              />
            </div>
            <button className="button3">
              <div className="button-item" />
              <b className="b3">{`>`}</b>
            </button>
          </div>
          <div className="buttonenregistrer-wrapper">
            <button className="buttonenregistrer2">
              <div className="buttonenregistrer-inner" />
              <b className="enregistrer">{`Enregistrer `}</b>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntryHoursLabel;
