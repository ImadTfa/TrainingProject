import "./SuperviseurDemandesConge.css";

const FrameComponent5 = () => {
  return (
    <section className="frame-wrapper25">
      <div className="frame-parent48">
        <div className="demandes-de-cong-group">
          <h3 className="demandes-de-cong2">Demandes De Congé</h3>
          <div className="frame-wrapper26">
            <div className="nombres-de-demandes-parent">
              <b className="nombres-de-demandes">{`Nombres De Demandes :   `}</b>
              <input
                className="input16"
                name="NombreDemande"
                id="NombreDemande"
                value="n"
                placeholder="1"
                type="text"
                disabled
              />
            </div>
          </div>
        </div>
        <div className="imad-taki-profile-picture-wrapper">
          <div className="imad-taki-profile-picture">
            <b className="nom7">Nom</b>
            <div className="date-de-dbut-group">
              <b className="date-de-dbut1">Date de début</b>
              <b className="nombre-de-jours1">Nombre de jours</b>
              <div className="date-de-retour-container">
                <b className="date-de-retour1">Date de retour</b>
              </div>
              <b className="statut1">Statut</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
