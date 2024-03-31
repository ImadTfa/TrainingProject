import "./EmployeeAcceuil.css";

const FrameComponent4 = () => {
  return (
    <div className="frame-parent31">
      <div className="end-hour-timebox-parent">
        <div className="end-hour-timebox">
          <img
            className="time-1-icon"
            loading="lazy"
            alt=""
            src="/time-1@2x.png"
          />
          <div className="temps-de-travail">{`Temps De Travail : `}</div>
          <input
            className="working-minutes"
            name="TempsTravail"
            id="TempsTravail"
            value="0"
            placeholder="7"
            type="text"
            disabled
          />
          <b className="heures">heures</b>
        </div>
        <div className="heure-dentre-group">
          <div className="heure-dentre1">{`Heure D'Entrée :    `}</div>
          <input
            className="input4"
            name="HeureDentree"
            id="HeureDentree"
            value="00:00"
            placeholder="08:00"
            type="text"
            disabled
          />
        </div>
      </div>
      <div className="heure-de-sortie-group">
        <div className="heure-de-sortie1">{`Heure De Sortie :    `}</div>
        <input
          className="input5"
          name="HeureSortie"
          id="HeureSortie"
          value="00:00"
          placeholder="17:00"
          type="text"
          disabled
        />
      </div>
      <div className="frame-parent32">
        <div className="dure-de-pose-minutes-parent">
          <div className="dure-de-pose-container">
            <span className="dure-de-pose">Durée De Pose (</span>
            <b>minutes)</b>
            <span className="span2"> :</span>
          </div>
          <input
            className="input6"
            name="DureePose"
            id="DureePose"
            value="0"
            placeholder="60"
            type="text"
            disabled
          />
        </div>
        <div className="frame-parent33">
          <div className="timetotal-1-wrapper">
            <img
              className="timetotal-1-icon"
              loading="lazy"
              alt=""
              src="/timetotal-1@2x.png"
            />
          </div>
          <div className="minutes-manques-minutes-wrapper">
            <div className="minutes-manques-minutes-container1">
              <span className="minutes-manques1">Minutes Manquées (</span>
              <b>minutes)</b>
              <span className="span3">{` :   `}</span>
            </div>
          </div>
          <div className="container">
            <input
              className="input7"
              name="MinutesManquees"
              id="MinutesManquees"
              value="0"
              placeholder="0"
              type="text"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
