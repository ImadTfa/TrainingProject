import "./EmployeeCongeSoldeFrame.css";

const DateDeBilan = () => {
  return (
    <section className="date-de-bilan">
      <div className="solde-de-cong-parent">
        <div className="solde-de-cong">{`Solde De Congé :    `}</div>
        <div className="parent">
          <input
            className="input11"
            name="SoldeConge"
            id="SoldeConge"
            value="0"
            placeholder="24"
            type="text"
            disabled
          />
          <div className="jours">Jours</div>
        </div>
      </div>
      <div className="a-wrapper">
        <div className="a6">Créer Une Nouvelle Demande De Congé</div>
      </div>
    </section>
  );
};

export default DateDeBilan;
