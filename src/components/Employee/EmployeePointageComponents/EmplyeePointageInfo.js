import "./EmplyeePointageInfo.css";

const FrameComponent2 = () => {
  return (
    <div className="frame-parent36">
      <div className="heure-dentre-container">
        <div className="heure-dentre2">{`Heure D'Entrée :    `}</div>
        <input
          className="working-hours-label"
          name="HeureEntree"
          id="HeureEntree"
          value="00:00"
          placeholder="08:00"
          type="text"
          disabled
        />
      </div>
      <div className="total-missing-minutes-label">
        <div className="heure-de-sortie2">{`Heure De Sortie :    `}</div>
        <input
          className="input8"
          name="HeureSortie"
          id="HeureSortie"
          value="00:00"
          placeholder="17:00"
          type="text"
          disabled
        />
      </div>
      <div className="dure-de-pose-minutes-group">
        <div className="dure-de-pose-container1">
          <span className="dure-de-pose1">Durée De Pose (</span>
          <b>minutes)</b>
          <span className="span4"> :</span>
        </div>
        <input
          className="input9"
          name="DureePose"
          id="DureePose"
          value="0"
          placeholder="60"
          type="text"
          disabled
        />
      </div>
      <div className="minutes-manques-minutes-group">
        <div className="minutes-manques-minutes-container2">
          <span className="minutes-manques2">Minutes Manquées (</span>
          <b>minutes)</b>
          <span className="span5">{` :   `}</span>
        </div>
        <input
          className="input10"
          name="MinutesManquees"
          id="MinutesManquees"
          value="0"
          placeholder="0"
          type="text"
          disabled
        />
      </div>
    </div>
  );
};

export default FrameComponent2;
