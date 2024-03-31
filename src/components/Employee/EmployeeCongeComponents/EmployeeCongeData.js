import "./EmployeeCongeData.css";

const FrameComponent6 = () => {
  return (
    <section className="body-inner1">
      <div className="frame-parent37">
        <div className="frame-wrapper15">
          <div className="frame-parent38">
            <div className="frame-wrapper16">
              <div className="de-a-label-parent">
                <div className="de-a-label">
                  <div className="de">De</div>
                </div>
                <div className="rectangle-wrapper">
                  <input
                    className="rectangle-input"
                    name="StartDate"
                    id="StartDate"
                    type="date"
                  />
                </div>
                <div className="a-container">
                  <div className="a7">A</div>
                </div>
                <input
                  className="number-of-days-label"
                  name="EndDate"
                  id="EndDate"
                  type="date"
                />
              </div>
            </div>
            <button className="date-retour-label">
              <img className="buttoncreer-icon" alt="" src="/buttoncreer.svg" />
              <div className="creer">{`Créer  `}</div>
            </button>
          </div>
        </div>
        <div className="frame-parent39">
          <div className="frame-parent40">
            <div className="frame-wrapper17">
              <div className="date-de-dbut-parent">
                <b className="date-de-dbut">Date de début</b>
                <b className="nombre-de-jours">Nombre de jours</b>
                <div className="date-de-retour-wrapper">
                  <b className="date-de-retour">Date de retour</b>
                </div>
                <b className="statut">Statut</b>
              </div>
            </div>
            <div className="footer" />
          </div>
          <div className="frame-wrapper18">
            <div className="frame-parent41">
              <div className="mars-2024-wrapper">
                <input
                  className="mars-20241"
                  name="DateDebut"
                  id="DateDebut"
                  placeholder="11 Mars , 2024"
                  type="date"
                  disabled
                />
              </div>
              <input
                className="accepted-message"
                name="NombreJours"
                id="NombreJours"
                value="0"
                placeholder="5"
                type="text"
                disabled
              />
              <div className="mars-status">
                <input
                  className="mars-20242"
                  name="DateRetour"
                  id="DateRetour"
                  placeholder="16 Mars , 2024"
                  type="date"
                  disabled
                />
                <input
                  className="accept"
                  name="Statut"
                  id="Statut"
                  value="None"
                  placeholder="Accepté"
                  type="text"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
