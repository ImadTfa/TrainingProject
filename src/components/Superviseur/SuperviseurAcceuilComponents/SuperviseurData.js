import "./SuperviseurData.css";

const Table = () => {
  return (
    <section className="table2">
      <div className="table-child" />
      <div className="frame-parent45">
        <div className="frame-wrapper20">
          <div className="imad-modified-1-group">
            <img
              className="imad-modified-1-icon5"
              loading="lazy"
              alt=""
              src="/imadmodified-1@2x.png"
            />
            <div className="frame-wrapper21">
              <div className="frame-parent46">
                <div className="nom-wrapper">
                  <b className="nom6">Nom</b>
                </div>
                <input
                  className="imad-taki3"
                  name="Name"
                  id="Name"
                  value="None"
                  placeholder="Imad  Taki"
                  type="text"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
        <div className="frame-child19" />
      </div>
      <div className="table-inner">
        <div className="heure-dentre-parent1">
          <b className="heure-dentre3">Heure D'Entrée</b>
          <div className="duration-label">
            <input
              className="input12"
              name="HeureEntree"
              id="HeureEntree"
              value="00:00"
              placeholder="08:00 "
              type="text"
              disabled
            />
          </div>
        </div>
      </div>
      <div className="table-inner1">
        <div className="heure-de-sortie-container">
          <b className="heure-de-sortie3">Heure De Sortie</b>
          <div className="report-button">
            <input
              className="input13"
              name="HeurSortie"
              id="HeurSortie"
              value="00:00"
              placeholder="17:00 "
              type="text"
              disabled
            />
          </div>
        </div>
      </div>
      <div className="center-background">
        <div className="dure-de-pause-parent">
          <b className="dure-de-pause1">Durée De Pause</b>
          <div className="frame-wrapper22">
            <div className="group">
              <input
                className="input14"
                name="DureePause"
                id="DureePause"
                value="0"
                placeholder="60"
                type="text"
                disabled
              />
              <div className="minutes"> Minutes</div>
            </div>
          </div>
        </div>
      </div>
      <div className="rapport-download-button">
        <div className="frame-parent47">
          <div className="frame-wrapper23">
            <div className="line-parent">
              <div className="frame-child20" />
              <div className="minutes-manques-parent">
                <b className="minutes-manques3">Minutes Manquées</b>
                <div className="frame-wrapper24">
                  <div className="parent1">
                    <input
                      className="input15"
                      name="MinutesManquees"
                      id="MinutesManquees"
                      value="0"
                      placeholder="0"
                      type="text"
                      disabled
                    />
                    <div className="minutes1"> Minutes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="buttonrapportdownload-icon"
            loading="lazy"
            alt=""
            src="/buttonrapportdownload@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Table;
